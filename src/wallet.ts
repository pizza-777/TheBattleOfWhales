import { Address, ProviderRpcClient } from 'everscale-inpage-provider'

import { RD1Address, RD2Address } from './config'

import BetContract from './contracts/BetContract'
import RDContract from './contracts/RDContract'
//import { UtilsContract } from './contracts/UtilsContract';

import { ConnectionProperties, EverscaleStandaloneClient } from 'everscale-standalone-client'
import RoundContract from './contracts/RoundContract'

import { checkAccTypeName } from './sdk'

import Vue from 'vue'

let _ever: ProviderRpcClient
let _accountInteraction: everWallet | undefined

const _everStandalone = new ProviderRpcClient({
  fallback: () =>
    EverscaleStandaloneClient.create({
      connection: 'local' as ConnectionProperties,
    }),
  forceUseFallback: true,
})

async function ever() {
  if (typeof _ever === 'undefined') {
    _ever = new ProviderRpcClient()
    if (!(await _ever.hasProvider())) {
      // document.write('Please install the EverWallet extension')
      //throw new Error('Extension is not installed')
    }
  }
  return _ever
}

async function everWallet() {
  const _ever = await ever()
  if (typeof _accountInteraction === 'undefined') {
    const { accountInteraction } = await _ever.requestPermissions({
      permissions: ['basic', 'accountInteraction'],
    })
    if (accountInteraction == null) {
      alert('Issue with permissions')
      throw new Error('Insufficient permissions')
    }
    _accountInteraction = accountInteraction
  }
  return _accountInteraction
}

//round deployer contract
const pubKey = '9c2d5cfa59defd4534861a066e4e3c0833d4d32ff4fa2318234064d6b538d471'

//utils
//const UtilsAddress = "0:9e4c05724a4bb81a27d5b2100974acde329168469717ea172c88cd139079b37f"

export async function bet(side: 1 | 2, amount: number) {
  const everProvider = await ever()
  const accountInteraction = await everWallet()

  const RDAddress = side == 1 ? RD1Address : RD2Address
  return await everProvider.sendMessage({
    sender: accountInteraction.address,
    recipient: new Address(RDAddress),
    amount: amount.toString(),
    bounce: true,
  })
}

export async function login() {
  const _ever = await ever()
  await _ever.ensureInitialized()
  await everWallet()
}

export async function logout() {
  const _ever = await ever()
  _ever.disconnect()
  _accountInteraction = undefined
}

export async function authState(): Promise<boolean | string | undefined> {
  try {
    const _ever = await ever()
    if ((await _ever.hasProvider()) == false) return
    const state = await _ever.getProviderState()

    if (typeof state.permissions.accountInteraction === 'undefined') {
      return false
    }

    return state.permissions.accountInteraction.address.toString()
  } catch {
    console.log('error in auth')
  }
}
//https://provider-docs.broxus.com/guides/subscriptions.html
//
//watching for network changes and pass them to the Vue app

export async function betsSubscriber() {
  const _ever = _everStandalone
  const rt: any = await getRoundTime()
  const rAddr = await getRoundContractAddress(rt.roundStart, rt.roundEnd)
  const transactionsSub = await _ever.subscribe('transactionsFound', { address: rAddr })
  return transactionsSub
}

//use https://provider-docs.broxus.com/guides/deploy.html#expected-address-retrieval
export async function getRoundContractAddress(roundStart: number, roundEnd: number) {
  const provider = _everStandalone
  const deployParams: any = {
    tvc: RoundContract.tvc,
    workchain: 0,
    publicKey: pubKey,
    initParams: {
      betCode: BetContract.code,
      roundStart: Number(roundStart),
      roundEnd: Number(roundEnd),
      RD1: RD1Address,
      RD2: RD2Address
    },
  }

  // Get the expected address of the contract
  const expectedAddress = await provider.getExpectedAddress(RoundContract.abi, deployParams)

  return expectedAddress
}

//use https://provider-docs.broxus.com/guides/deploy.html#expected-address-retrieval
export async function getBetContractAddress() {
  const provider = await ever()
  if ((await provider.hasProvider()) == false) return
  const auth = await authState()
  if (!auth || typeof auth == 'undefined') return
  const accountInteraction = await everWallet()
  const rt: any = await getRoundTime()
  const roundData = await checkRoundContract(rt.roundStart, rt.roundEnd)
  if (roundData.acc_type_name == 'NonExist') {
    return null
  }

  const deployParams = {
    tvc: BetContract.tvc,
    workchain: 0,
    publicKey: pubKey,
    initParams: {
      player: accountInteraction.address,
      roundStart: Number(rt.roundStart),
      roundEnd: Number(rt.roundEnd),
      round: roundData.address.toString(),
    },
  }

  // Get the expected address of the contract
  const expectedAddress = await provider.getExpectedAddress(BetContract.abi, deployParams as never)

  return expectedAddress
}

export async function checkBetContract() {
  const addr = await getBetContractAddress()
  return {
    address: addr,
    acc_type_name: await checkAccTypeName(JSON.stringify(addr)),
  }
}

export async function checkRoundContract(roundStart: number, roundEnd: number) {
  const addr = await getRoundContractAddress(roundStart, roundEnd)

  return {
    address: addr,
    acc_type_name: await checkAccTypeName(JSON.stringify(addr)),
  }
}

export async function getRoundTime(): Promise<{ roundStart: number; roundEnd: number } | Error> {
  const everProvider = _everStandalone
  const contract = new everProvider.Contract(RDContract.abi, new Address(RD1Address))
  try {
    const response = await contract.methods.roundTime({} as never).call()
    return {
      roundStart: response['value0'],
      roundEnd: response['value1'],
    }
  } catch (e) {
    throw new Error('Cannot calculate round time: ' + JSON.stringify(e))
  }
}

//total bets
export async function getBetsData() {
  // Optionally request account state
  const provider = _everStandalone
  const roundTime: any = await getRoundTime()

  const addressData = await checkRoundContract(roundTime.roundStart, roundTime.roundEnd)
 
  if (addressData.acc_type_name == 'NonExist')
    return {
      side1: 0,
      side2: 0,
    }

  const contract = new provider.Contract(RoundContract.abi, addressData.address)

  const response: { value0: string; value1: string } = await contract.methods.getBetsData({} as never).call()
  return {
    side1: Number(response.value0) / 1e9,
    side2: Number(response.value1) / 1e9,
  }
}

//user bets
export async function getUserBetsData() {
  // Optionally request account state
  const provider = await ever()
  if ((await _ever.hasProvider()) == false) return
  const auth = await authState()
  if (!auth || typeof auth == 'undefined') return
  const addressData = await checkBetContract()
  if (addressData.acc_type_name == 'NonExist') {
    return {
      side1: 0,
      side2: 0,
    }
  }

  const contract = new provider.Contract(BetContract.abi, addressData.address as Address)

  const response: { value0: string; value1: string } = await contract.methods.getBetsData({} as never).call()

  return {
    side1: Number(response.value0) / 1e9,
    side2: Number(response.value1) / 1e9,
  }
}

//user bets
export async function getUserDataByRound(roundAddress: string) {
  // Optionally request account state
  const provider = await ever()
  if ((await provider.hasProvider()) == false) return

  const auth = await authState()
  if (!auth || typeof auth == 'undefined') return

  const accountInteraction = await everWallet()

  try {
    const roundContract = new provider.Contract(RoundContract.abi, new Address(roundAddress))

    const userBetsAddress: { value0: Address } = await roundContract.methods.calcBetAddress({ player: accountInteraction.address } as never).call()

    const userBetsContract = new provider.Contract(BetContract.abi, new Address(userBetsAddress.value0.toString()))

    const userBetsData: { value0: number; value1: number; value2: string; value3: number; value4: number } = await userBetsContract.methods.getBetsData({} as never).call()
    return {
      address: userBetsAddress.value0,
      side1: userBetsData.value0,
      side2: userBetsData.value1,
      claimedReward: userBetsData.value2,
      roundStart: userBetsData.value3,
      roundEnd: userBetsData.value4,
    }
  } catch (e) {
    console.warn('getUserDataByRound error:' + JSON.stringify(e))
  }
}
//total bets
export async function getRoundDataByAddress(address: string) {
  // Optionally request account state
  const provider = _everStandalone

  const contract = new provider.Contract(RoundContract.abi, new Address(address))

  const totalBets: { value0: string; value1: string } = await contract.methods.getBetsData({} as never).call()
  const start: { roundStart: number } = await contract.methods.roundStart({} as never).call()
  const end: { roundEnd: number } = await contract.methods.roundEnd({} as never).call()
  return {
    side1: Number(totalBets.value0) / 1e9,
    side2: Number(totalBets.value1) / 1e9,
    roundStart: start.roundStart,
    roundEnd: end.roundEnd,
  }
}

export async function claim(addr: Address) {
  const everProvider = await ever()
  const accountInteraction = await everWallet()
  const round = new everProvider.Contract(RoundContract.abi, addr)
  try {
    return await everProvider.sendMessage({
      sender: accountInteraction.address,
      recipient: round.address,
      amount:String(1e8),
      bounce: true,
    })
  } catch (e) {
    console.error(e)
  }
}

export async function getNetwork(): Promise<string | undefined> {
  const _ever = await ever()
  if ((await _ever.hasProvider()) == false) return
  const ps = await _ever.getProviderState()
  return ps.selectedConnection
}

//VUE GLOBALS VARIABLES
const vueGlobal = Vue.observable({
  network: '',
  betsSubscriber: {},    
  permissionsChanged: {},
})

Object.defineProperty(Vue.prototype, '$network', {
  get() {
    return vueGlobal.network
  },

  set(value) {
    vueGlobal.network = value
  },
})

Object.defineProperty(Vue.prototype, '$permissionsChanged', {
  get() {
    return vueGlobal.permissionsChanged
  },

  set(value) {
    vueGlobal.permissionsChanged = value
  },
})

Object.defineProperty(Vue.prototype, '$betsSubscriber', {
  get() {
    return vueGlobal.betsSubscriber
  },

  set(value) {
    vueGlobal.betsSubscriber = value
  },
})

//subscritions
;(async () => {
  const provider = ever()
  //  if ((await (await provider).hasProvider()) == false) return

  provider
    .then(async (_ever) => {
      //network
      (await _ever.subscribe('networkChanged')).on('data', (event: { selectedConnection: any }) => {
        vueGlobal.network = event.selectedConnection
        console.log('network changed')
      })

      //permissions: first load, login, logout
      ;(await _ever.subscribe('permissionsChanged')).on('data', (data: { permissions: any }) => {
        vueGlobal.permissionsChanged = data
        //alert('permissionsChanged')
        console.log('permissions changed' + JSON.stringify(data))
      })

      //subscriber on current round transactions
      ;(await betsSubscriber()).on('data', (data) => {
        vueGlobal.betsSubscriber = data
        console.log('bet placed', JSON.stringify(data))
      })
    })
    .catch((r) => {
      console.log('subscription error', r)
    })
})()

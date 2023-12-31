import { Address, ProviderRpcClient } from 'everscale-inpage-provider'

import { RD1Address, RD2Address } from './config'

import { walletConnection } from './connection'

import BetContract from './contracts/BetContract'
import RDContract from './contracts/RDContract'

import { ConnectionProperties, EverscaleStandaloneClient } from 'everscale-standalone-client'
import RoundContract from './contracts/RoundContract'

import { checkAccTypeName } from './sdk'

import Vue from 'vue'

let _ever: ProviderRpcClient

const subscriptionManager: Array<any> = []

let _accountInteraction:
  | {
      address: Address
      publicKey: string
      contractType: string
    }
  | undefined

const _everStandalone = new ProviderRpcClient({
  fallback: () =>
    EverscaleStandaloneClient.create({
      connection: walletConnection() as ConnectionProperties,
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

const pubKey = '9c2d5cfa59defd4534861a066e4e3c0833d4d32ff4fa2318234064d6b538d471'

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
  vueGlobal.permissionsChanged = 'connected'
}

export async function logout() {
  const _ever = await ever()
  _ever.disconnect()
  _accountInteraction = undefined
  vueGlobal.permissionsChanged = 'disconnected'
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

//use https://provider-docs.broxus.com/guides/deploy.html#expected-address-retrieval
export async function getRoundContractAddress(roundStart: number, roundEnd: number): Promise<Address> {
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
      RD2: RD2Address,
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

  // if (roundData.acc_type_name == 'NonExist') {
  //   return null
  // }

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

export async function getRoundTime(): Promise<{ roundStart: number; roundEnd: number }> {
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

    const userBetsData: { value0: number; value1: number; value2: boolean; value3: number; value4: boolean; value5: number; value6: number } = await userBetsContract.methods.getBetsData({} as never).call()
    return {
      address: userBetsAddress.value0,
      side1: userBetsData.value0,
      side2: userBetsData.value1,
      claimedReward: userBetsData.value2,
      roundStart: userBetsData.value3,
      roundEnd: userBetsData.value4,
      countSide1: userBetsData.value5,
      countSide2: userBetsData.value6,

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
  // const fee: { value0: number } = await contract.methods.calcProcessingFee({} as never).call()
  return {
    side1: Number(totalBets.value0) / 1e9,
    side2: Number(totalBets.value1) / 1e9,
    roundStart: start.roundStart,
    roundEnd: end.roundEnd,
    fee: 0, //Number(fee.value0) / 1e9,
  }
}

export async function calcFee(roundAddr: string, userBetsOnSide1: number, userBetsOnSide2: number): Promise<number> {
  const provider = _everStandalone
  const roundContract = new provider.Contract(RoundContract.abi, new Address(roundAddr))

  const fee: {value0: number} = await roundContract.methods.calcProcessingFee({ countPlayerBetsSide1: userBetsOnSide1, countPlayerBetsSide2: Number(userBetsOnSide2) } as never).call() 
  return fee.value0
}

export async function claim(addr: string) {
  const everProvider = await ever()
  const accountInteraction = await everWallet()
  const round = new everProvider.Contract(RoundContract.abi, new Address(addr))
  try {
    return await everProvider.sendMessage({
      sender: accountInteraction.address,
      recipient: round.address,
      amount: String(1e8),
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
  network: '', permissionsChanged: {},
  RD1: {}, RD2: {}, betState: {}, betTransactions: {},roundState: {}, roundTransactions: {}
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
Object.defineProperty(Vue.prototype, '$RD1', {
  get() {
    return vueGlobal.RD1
  },

  set(value) {
    vueGlobal.RD1 = value
  },
})

Object.defineProperty(Vue.prototype, '$RD2', {
  get() {
    return vueGlobal.RD2
  },

  set(value) {
    vueGlobal.RD2 = value
  },
})
Object.defineProperty(Vue.prototype, '$betTransactions', {
  get() {
    return vueGlobal.betState
  },

  set(value) {
    vueGlobal.betState = value
  },
})
Object.defineProperty(Vue.prototype, '$roundState', {
  get() {
    return vueGlobal.roundState
  },

  set(value) {
    vueGlobal.roundState = value
  },
})
Object.defineProperty(Vue.prototype, '$roundTransactions', {
  get() {
    return vueGlobal.roundTransactions
  },

  set(value) {
    vueGlobal.roundTransactions = value
  },
})

//subscritions
//https://provider-docs.broxus.com/guides/subscriptions.html

export function setUpSubscriptions() {
  //wallet subscriptions
  (async () => {
    const provider = ever()
    if ((await (await provider).hasProvider()) == false) return
    const auth = await authState()
    if (!auth || typeof auth == 'undefined') return

    provider
      .then(async (_ever) => {
        //network
        subscriptionManager.push(
          (await _ever.subscribe('networkChanged')).on('data', (event: { selectedConnection: any }) => {
            vueGlobal.network = event.selectedConnection
            console.log('network changed')
          })
        )

        //permissions: first load, login, logout
        subscriptionManager.push(
          (await _ever.subscribe('permissionsChanged')).on('data', (data: { permissions: any }) => {
            vueGlobal.permissionsChanged = data
            //alert('permissionsChanged')
            // console.log('permissions changed' + JSON.stringify(data))
          })
        )
        //bet subscription
        const betAddr = await getBetContractAddress()
        if (betAddr) {
          subscriptionManager.push(
            (await _ever.subscribe('contractStateChanged', { address: betAddr })).on('data', (data) => {
              vueGlobal.betState = data
              console.log('betContract state changed' /*, JSON.stringify(data)*/)
            })
          )
          subscriptionManager.push(
            (await _ever.subscribe('transactionsFound', { address: betAddr })).on('data', (data) => {
              vueGlobal.betTransactions = data
              console.log('bet transaction fount' /*, JSON.stringify(data)*/)
            })
          )
        }
      })
      .catch((r) => {
        console.log('subscription error', r)
      })
  })()

  //standalone transactions subscriptions
  ;(async () => {
    const provider = _everStandalone
    subscriptionManager.push(
      (await provider.subscribe('transactionsFound', { address: new Address(RD1Address) })).on('data', (data) => {
        vueGlobal.RD1 = data
        console.log('bet1 placed' /*, JSON.stringify(data)*/)
      })
    )
    subscriptionManager.push(
      (await provider.subscribe('transactionsFound', { address: new Address(RD2Address) })).on('data', (data) => {
        vueGlobal.RD2 = data
        console.log('bet2 placed' /*, JSON.stringify(data)*/)
      })
    )

    const roundTime: any = await getRoundTime()
    const roundAddr: Address = await getRoundContractAddress(roundTime.roundStart, roundTime.roundEnd)
    subscriptionManager.push(
      (await provider.subscribe('contractStateChanged', { address: roundAddr })).on('data', (data) => {
        vueGlobal.roundState = data
        console.log('round contract state changed' /*, JSON.stringify(data)*/)
      })
    )
    subscriptionManager.push(
      (await provider.subscribe('transactionsFound', { address: roundAddr })).on('data', (data) => {
        vueGlobal.roundTransactions = data
        console.log('round transacton found' /*, JSON.stringify(data)*/)
      })
    )
  })()
}

export async function tearDownSubscriptions() {
  for (let i = 1; i < subscriptionManager.length; i++) {
    await subscriptionManager[i].unsubscribe()
  }
}

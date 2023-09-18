<template>
  <div>
    <div><BaseAuth :authProp="authTrigger" /></div>
    <BaseTitle></BaseTitle>
    <div class="container mt-5 mb-5" id="fishBox">
      <div>
        <div id="leftFish" ref="leftFish">🐋</div>
        <div class="mt-4 mb-4 text-center text-light h4">{{ totalAmountSide1 }} EVER</div>
        <div id="leftFishInputAmount">
          <b-form-input block v-model="fishInputAmount1" placeholder="0 EVER"></b-form-input>
        </div>
        <div id="leftFishBtn" v-if="userBox">
          <b-button id="betBtnLeft" block variant="outline-primary" @click="_bet(1)">Bet</b-button>
          <!-- <b-tooltip target="betBtnLeft" triggers="click">Sent</b-tooltip>  -->
        </div>
        <div id="leftAddr" class="mt-3">
          <b-input-group size="sm">
            <b-form-input v-on:focus="$event.target.select()" ref="leftAddr" class="link-light" v-model="RD1Address"> </b-form-input>
            <b-input-group-append>
              <b-button variant="outline-primary" id="copyBtnLeft" @click="_copy(1)">Copy</b-button>
              <b-tooltip variant="dark" target="copyBtnLeft" triggers="click">Copied</b-tooltip>
              <b-icon icon="question-circle" id="leftBetTip" variant="light" aria-label="Help"></b-icon>
              <b-tooltip target="leftBetTip" variant="dark">Direct bet — send to this address. Min amount 1 Ever.</b-tooltip>
            </b-input-group-append>
          </b-input-group>
        </div>
      </div>
      <div>
        <div id="rightFish" ref="rightFish">🐋</div>
        <div class="mt-4 mb-4 text-center text-light h4">{{ totalAmountSide2 }} EVER</div>
        <div id="leftFishInputAmount">
          <b-form-input v-model="fishInputAmount2" placeholder="0 EVER"></b-form-input>
        </div>
        <div id="rightFishBtn" v-if="userBox">
          <b-button id="betBtnRight" variant="outline-primary" @click="_bet(2)">Bet</b-button>
          <!-- <b-tooltip target="betBtnRight">Sent</b-tooltip> -->
        </div>
        <div id="RightAddr" class="mt-3">
          <b-input-group size="sm">
            <b-form-input v-on:focus="$event.target.select()" ref="rightAddr" class="link-light" v-model="RD2Address"> </b-form-input>
            <b-input-group-append>
              <b-button variant="outline-primary" id="copyBtnRight" @click="_copy(2)">Copy</b-button>
              <b-tooltip target="copyBtnRight" variant="dark" triggers="click">Copied</b-tooltip>
              <b-icon icon="question-circle" id="rightBetTip" variant="light" aria-label="Help"></b-icon>
              <b-tooltip target="rightBetTip" variant="dark">Direct bet — send to this address. Min amount 1 Ever.</b-tooltip>
            </b-input-group-append>
          </b-input-group>
        </div>
      </div>
    </div>
    <div class="container text-light text-center">Round state: {{ roundState }}</div>
    <div class="container">
      <b-progress :value="progressValue" height="0.4rem" variant="secondary" :max="progressMax" :show-value="false"></b-progress>
    </div>

    <div class="container text-center text-light mt-4 mb-4">Time: {{ roundStart }} — {{ roundEnd }}</div>
    <div class="container text-center mt-4">
      <b-alert mt-4 mb-4 :show="alert">{{ alertMessage }}</b-alert>
    </div>
    <div v-if="userBox" class="mt-4">
      <div class="text-center text-light mt-4 h5">My bets:</div>
      <div id="userAmountBox">
        <div class="mt-4 mb-4 text-center text-light h5">{{ userAmountSide1 }} Ever</div>
        <div class="mt-4 mb-4 text-center text-light h5">{{ userAmountSide2 }} Ever</div>
      </div>
    </div>
    <div class="container text-center text-light mt-4 footer">
      Round contract: <b-link class="link-light" :href="'http://localhost/accounts/accountDetails?id=' + roundContractAddress" target="_blank">{{ roundContractAddress }}</b-link>
    </div>
   
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { RD1Address, RD2Address } from '@/config'
import { authState, bet, getRoundTime, getRoundContractAddress, getBetsData, getUserBetsData, getNetwork } from '@/wallet.ts'
import { sleep } from '@/utils'
import {roundDuration} from '@/config'

export default Vue.extend({
  name: 'HomeView',
  mounted() {
    window.setInterval(() => {
      this.currentTime = Date.now()
    }, 1000)
    this.updateAll()
  },
  data() {
    return {
      authTrigger: false,
      fishInputAmount1: 0,
      fishInputAmount2: 0,
      alert: false,
      alertMessage: '',
      roundStart: null,
      roundEnd: null,
      roundStartTimestamp: null,
      roundEndTimestamp: null,
      roundContractAddress: '',
      totalAmountSide1: null,
      totalAmountSide2: null,
      userAmountSide1: null,
      userAmountSide2: null,
      userBox: false,
      RD1Address: null,
      RD2Address: null,
      betBtnDisabled: false,
      leftFishSize: '5em',
      rightFishSize: '5em',
      currentTime: Date.now(),
      progressMax: 100,
      progressValue: 0,
      roundState: '',
    }
  },
  methods: {
    async _bet(side: 1 | 2) {
      if ((await authState()) == false) {
        this.alert = true
        this.alertMessage = 'Connect your wallet'
        sleep(5000)
        this.alert = false
        return
      }
      const amount = this['fishInputAmount' + side]
      if (isNaN(amount) || amount < 1) {
        this.alertMessage = 'Min bet 1 EVER'
        this.alert = true
        await sleep(3000)
        this.alert = false
        return
      }
      this.alert = false
      await bet(side, Number(this['fishInputAmount' + side]) * 1e9)
      // const toolTipId = side == 1 ? 'betBtnLeft' : 'betBtnRight'
      // this.$root.$emit('bv::show::tooltip', toolTipId)
      // await sleep(1000)
      // this.$root.$emit('bv::hide::tooltip', toolTipId)
    },
    async _copy(side) {
      if (side == 1) this.$refs.leftAddr.focus()
      if (side == 2) this.$refs.rightAddr.focus()
      document.execCommand('copy')
      await sleep(1000)
      const toolTipId = side == 1 ? 'copyBtnLeft' : 'copyBtnRight'
      this.$root.$emit('bv::hide::tooltip', toolTipId)
    },
    controlNetwork() {
      if (typeof this.network == 'undefined') return
      if (this.$network !== 'localnet') {
        this.alert = true
        this.alertMessage = 'Switch wallet to local network. Current network is ' + this.$network
      } else {
        this.alert = false
      }
    },
    updateBetsData() {
      getRoundTime().then((time) => {
        this.roundStart = new Date(time.roundStart * 1000).toLocaleTimeString()
        this.roundEnd = new Date(time.roundEnd * 1000).toLocaleTimeString()
        getRoundContractAddress(time.roundStart, time.roundEnd).then((a) => {
          this.roundContractAddress = a.toString()
        })
      })
      getBetsData().then((data) => {
        this.totalAmountSide1 = data.side1
        this.totalAmountSide2 = data.side2
        //this.updateFishSize(data.side1, data.side2)
      })
      getUserBetsData().then((data) => {
        if (typeof data == 'undefined') return
        this.userAmountSide1 = data.side1
        this.userAmountSide2 = data.side2
        this.userBox = true
      })
    },
    updateFishSize(side1, side2) {
      this.$refs.leftFish.style.fontSize = side1 > side2 ? '5.5em' : '5em'
      this.$refs.rightFish.style.fontSize = side2 > side2 ? '5.5em' : '5em'
    },
    updateRoundState() {
      if (this.currentTime < this.roundStartTimestamp + 60 * 1000) {
        this.roundState = 'Prepearing...'
      } else if (this.currentTime > this.roundStartTimestamp + 60 * 1000 && this.currentTime < this.roundEndTimestamp) {
        this.roundState = 'Running'
      } else if (this.currentTime > this.roundEndTimestamp) {
        this.roundState = 'Finished'
      }
    },
    updateAll() {
      getRoundTime().then((time) => {
        this.roundStart = new Date(time.roundStart * 1000).toLocaleTimeString()
        this.roundEnd = new Date(time.roundEnd * 1000).toLocaleTimeString()
        this.roundStartTimestamp = time.roundStart * 1000
        this.roundEndTimestamp = time.roundEnd * 1000
        getRoundContractAddress(time.roundStart, time.roundEnd).then((a) => {
          this.roundContractAddress = a.toString()
        })
      })
      getBetsData().then((data) => {
        this.totalAmountSide1 = data.side1
        this.totalAmountSide2 = data.side2
        // this.updateFishSize(data.side1, data.side2)
      })
      getUserBetsData().then((data) => {
        if (typeof data == 'undefined') return
        this.userAmountSide1 = data.side1
        this.userAmountSide2 = data.side2
        this.userBox = true
      })
      getNetwork().then((network) => {
        this.$network = network
        this.controlNetwork()
      })
      this.RD1Address = RD1Address
      this.RD2Address = RD2Address
      this.alert = false
    },
  },
  watch: {
    $network() {
      this.controlNetwork()
    },
    $betsSubscriber() {
      this.updateBetsData()
    },
    currentTime(_, currentTime) {
      console.log(this.progressValue)
      //wait minute and update all
      if (currentTime > this.roundEndTimestamp) {
        if (currentTime > this.roundEndTimestamp + 60 * 1000) {
          this.updateAll()
        }
        this.progressValue = 100
        
        this.updateRoundState()
        return
      }
      this.updateRoundState()
      this.progressValue = 100 - ((this.roundEndTimestamp - currentTime) / 1000 / (roundDuration-60)) * 100 // todo change interval value
    },
  },
})
</script>
<style scoped>
#leftFish {
  transform: scale(-1, 1);
  font-size: 5em;
}
#rightFish {
  font-size: 5em;
}
#fishBox,
#userAmountBox {
  display: flex;
  justify-content: space-around;
}
#links {
  display: flex;
  justify-content: space-around;
}
#leftFishInputAmount,
#rightFishInputAmount {
  width: 5em;
}
#leftFishBtn button,
#rightFishBtn button {
  margin-top: 1em;
  width: 5em;
}

#footer {
  position: absolute;
  height: 100px;
  bottom: 0;
  width: 100%;
}
#leftBetTip,
#rightBetTip {
  margin-left: 0.5em;
}

#copyBtnLeft,
#copyBtnRight {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>

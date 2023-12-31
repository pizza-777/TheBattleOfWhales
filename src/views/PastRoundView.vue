<template>
  <div>
    <div class="container mt-5" id="fishBox">
      <div>
        <div id="leftFish">🐋</div>
        <div class="mt-4 mb-4 text-center text-light h4">{{ totalAmountSide1 }} EVER</div>
      </div>
      <div>
        <div id="rightFish">🐋</div>
        <div class="mt-4 mb-4 text-center text-light h4">{{ totalAmountSide2 }} EVER</div>
      </div>
    </div>
    <div class="container text-center text-light mt-4 mb-4">Time: {{ roundStart }} — {{ roundEnd }}</div>
    <div v-if="userBox">
      <div class="text-center text-light mt-4 h5">My bets:</div>
      <div id="userAmountBox">
        <div class="mt-4 mb-4 text-center text-light h5">{{ userAmountSide1 }} Ever</div>
        <div class="mt-4 mb-4 text-center text-light h5">{{ userAmountSide2 }} Ever</div>
      </div>
    </div>
    <div id="userReward" class="container text-center text-light mt-4 mb-4">
      <div v-if="userBox">
        <span class="p-3">Reward ≈ {{ (userReward - fee).toFixed(2) }} EVER</span>
        <b-button v-show="claimedReward" disabled variant="outline-primary">Claimed</b-button>
        <b-button v-show="claimedReward == false" :disabled="claimDisabled" variant="outline-primary" @click="_claim()">Claim</b-button>
        <b-icon icon="question-circle" id="rewardTip" aria-label="Help"></b-icon>
        <b-tooltip target="rewardTip" variant="dark">{{ fee }} Ever fee included</b-tooltip>
      </div>
      <div id="claimAddr" class="mt-3 col-md-6 mx-auto mb-4 mt-4">
        <b-input-group size="sm">
          <b-form-input v-on:focus="$event.target.select()" ref="claimAddr" class="link-light" v-model="roundContractAddress"> </b-form-input>
          <b-input-group-append>
            <b-button variant="outline-primary" id="copyBtnClaim" @click="_copy()"> Copy </b-button>
            <b-icon icon="question-circle" id="claimTip" aria-label="Help"></b-icon>
            <b-tooltip target="claimTip" :placement="isMobile() ? 'left' : 'top'" variant="dark">Direct claim — send 0.1 Ever to this address</b-tooltip>
            <b-tooltip target="copyBtnClaim" variant="dark" triggers="click">Copied</b-tooltip>
          </b-input-group-append>
        </b-input-group>
      </div>
    </div>
    <base-network></base-network>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { getRoundDataByAddress, claim, getUserDataByRound, calcFee } from '@/wallet'
import { calcUserReward, sleep, isMobile } from '@/utils'

export default Vue.extend({
  name: 'HomeView',
  async mounted() {
    this.roundContractAddress = this.$route.params.roundAddress
    const data = await getRoundDataByAddress(this.roundContractAddress)
    this.roundStart = new Date(data.roundStart * 1000).toLocaleDateString() + ' ' + new Date(data.roundStart * 1000).toLocaleTimeString()
    this.roundEnd = new Date(data.roundEnd * 1000).toLocaleDateString() + ' ' + new Date(data.roundEnd * 1000).toLocaleTimeString()
    this.totalAmountSide1 = data.side1
    this.totalAmountSide2 = data.side2
    //this.fee = data.fee
    getUserDataByRound(this.roundContractAddress).then(async (data) => {
      if (typeof data == 'undefined') {
        return
      }
      this.userAmountSide1 = Math.round(data.side1 / 1e9)
      this.userAmountSide2 = Math.round(data.side2 / 1e9)
      this.userBetsAddress = data.address.toString()
      this.claimedReward = data.claimedReward
      this.claimDisabled = this.claimedReward
      this.userReward = calcUserReward(this.userAmountSide1, this.userAmountSide2, this.totalAmountSide1, this.totalAmountSide2)
      this.userBox = true      
      this.fee = await calcFee(this.roundContractAddress, data.countSide1, data.countSide2)
      this.fee = Number((this.fee / 1e9).toFixed(2))
    })
  },
  data() {
    return {
      fishInputAmount1: 0,
      fishInputAmount2: 0,
      alert: false,
      alertMessage: '',
      roundStart: '',
      roundEnd: '',
      roundContractAddress: '',
      totalAmountSide1: 0,
      totalAmountSide2: 0,
      userAmountSide1: 0,
      userAmountSide2: 0,
      userReward: 0,
      claimDisabled: false,
      claimedReward: false,
      userBetsAddress: '',
      userBox: false,
      fee: 0,
      isMobile
    }
  },
  methods: {
    async _claim() {
      const response = await claim(this.roundContractAddress)
      if (typeof response !== 'undefined') this.claimedReward = true
    },
    async _copy() {
      if(typeof this.$refs.claimAddr == 'undefined') return
      (this.$refs.claimAddr as HTMLElement).focus()
      document.execCommand('copy')
      await sleep(1000)
      this.$root.$emit('bv::hide::tooltip', 'copyBtnClaim')
    },
  },
  watch: {},
})
</script>

<style scoped>
#leftFish,
#rightFish {
  font-size: 5em;
}
#leftFish {
  transform: scale(-1, 1);
}
#fishBox,
#userAmountBox {
  display: flex;
  justify-content: space-around;
}
#claimTip,
#rewardTip {
  margin-left: 0.5em;
}
#copyBtnClaim {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>

<template>
  <div>
    <div><BaseAuth :authProp="authTrigger" /></div>
    <div>
      <h1 id="title" class="mb-3 text-center text-light"><span class="h2">↯</span> Whale pool <span class="h2">↯</span></h1>
    </div>
    <div class="container mt-5 text-light" id="pool">
      <b-card bg-variant="dark" id="volumes" class="container" style="max-width: 40%">
        <b-card-text>Total pool volume: {{ totalVolume }}</b-card-text>

        <b-card-text v-if="userBox" class="text-light mt-4 mb-1">
          <div class="mt-1">My volume: {{ userVolume }}</div>
          <div class="mt-1">My total reward: {{ userTotalReward }}</div>
          <div class="mt-1">Claimed reward: {{ claimedReward }}</div>
        </b-card-text>
      </b-card>
      <div id="userReward" class="container text-center text-light mt-4 mb-4">
        <div v-if="userReward !== null && userReward > 0">
          <span class="p-3">Reward: {{ userReward }} EVER</span>
          <b-button v-show="claimedReward" disabled variant="outline-primary">Claimed</b-button>
          <b-button v-show="claimedReward == false" :disabled="claimDisabled" variant="outline-primary" @click="_claim()">Claim</b-button>
          <b-icon icon="question-circle" id="rewardTip" aria-label="Help"></b-icon>
          <b-tooltip target="rewardTip" variant="dark">Claim reward with EverWallet</b-tooltip>
        </div>
      </div>
      <div id="claimAddr" class="mt-3 mb-4 col-md-6 mx-auto">
        <b-input-group size="sm">
          <b-form-input v-on:focus="$event.target.select()" ref="claimAddr" class="link-light" v-model="claimPoolAddress"> </b-form-input>
          <b-input-group-append>
            <b-button variant="outline-primary" id="copyBtnClaim" @click="_copy()"> Copy </b-button>
            <b-icon icon="question-circle" id="claimTip" aria-label="Help"></b-icon>
            <b-tooltip target="claimTip" variant="dark">Direct claim — send 0.1 Ever to this address</b-tooltip>
            <b-tooltip target="copyBtnClaim" variant="dark" triggers="click">Copied</b-tooltip>
          </b-input-group-append>
        </b-input-group>
      </div>
      <hr />
      <div class="container text-light text-center h4 pt-4">Volume leaderboard</div>
      <BaseFooter></BaseFooter>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { sleep } from '@/utils'
import { claimPoolAddress } from '../config'
import { getPoolTotalVolume } from '../wallet'
export default Vue.extend({
  name: 'PoolView',
  mounted() {
    this.claimPoolAddress = claimPoolAddress
    getPoolTotalVolume().then((data) => {
      this.totalVolume = data.totalVolume
    })
  },
  data() {
    return {
      authTrigger: false,
      alert: false,
      alertMessage: '',
      claimPoolAddress: '',
      totalVolume: '',
      claimedReward: 0,
      userReward: 1,
      claimDisabled: false,
      userTotalReward: 0,
      userVolume: 0,
      userBox: true,
    }
  },
  methods: {
    async _claim() {
      // const response = await claim(this.roundContractAddress)
      //  if (typeof response !== 'undefined') this.claimedReward = true
    },
    async _copy() {
      this.$refs.claimAddr.focus()
      document.execCommand('copy')
      await sleep(1000)
      this.$root.$emit('bv::hide::tooltip', 'copyBtnClaim')
    },
  },
  watch: {},
})
</script>

<style scoped>
#links {
  display: flex;
  justify-content: space-around;
  margin-top: 4em;
}
#volumes {
  background-color: rgb(93, 93, 97, 0.1) !important;
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

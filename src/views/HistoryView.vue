<template>
  <div>
    <div><LoginLogout :authProp="authTrigger" /></div>
    <div class="container mt-4 mb-4">
      <div v-if="rounds.length == 0" class="text-center">No past rounds yet</div>
      <div v-else class="text-center text-light h4">Past rounds</div>
      <b-table style="background-color: rgb(93, 93, 97, 0.2) !important; color: rgba(255,255,255, 0.9) !important; border-radius: 5px;" :items="rounds" :fields="fields" :per-page="perPage" :current-page="currentPage">
        <template #cell(Address)="data">
          <span v-html="data.value"></span>
        </template>
      </b-table>
      <b-pagination  align="center" v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
    </div>

    <div variant="outline-secondary" class="text-center mt-4" style="text-align: center">
      <a href="./#/" class="link-light"><b>Current round</b></a>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import LoginLogout from '@/components/LoginLogout.vue'
import { getRounds } from '@/sdk'
import { getRoundDataByAddress } from '@/wallet'

export default Vue.extend({
  name: 'HomeView',
  mounted() {
    getRounds().then(async (rounds) => {
      rounds = await Promise.all(
        rounds.map(async (round) => {
          const roundData = await getRoundDataByAddress(round.id)
          return {
            Ended: new Date(roundData.roundEnd * 1000).toLocaleDateString() + ' ' + new Date(roundData.roundStart * 1000).toLocaleTimeString(),
            Address: '<a href="/#/round/' + round.id + '">' + round.id + '</a>',
            Total: Math.floor(roundData.side1 + roundData.side2),
            RoundEndTimestamp: roundData.roundEnd,
          }
        })
      )
      rounds = rounds.filter((r) => {
        return r.RoundEndTimestamp < Date.now()
      })
      this.rounds = rounds.sort((a, b)=> b.RoundEndTimestamp - a.RoundEndTimestamp)  
    })
  },
  data() {
    return {
      authTrigger: false,
      fields: ['Ended', 'Address', 'Total'],
      rounds: [],
      perPage: 10,
      currentPage: 1,
    }
  },
  methods: {},
  components: {
    LoginLogout,
  },
  watch: {},
  computed: {
    rows() {
      return this.rounds.length
    },
  },
})
</script>
<style>
.page-link {
  background-color: rgb(93, 93, 97, 0.2) !important;
  color: white !important;
  cursor: pointer;
}
</style>

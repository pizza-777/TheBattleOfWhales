<template>
  <div>
    <div v-if="rounds.length == 0" class="text-center text-light h4">No past rounds yet</div>
    <div v-else class="text-center text-light h4">Past rounds</div>
    <div v-if="rounds.length > 0"  class="container mt-4 mb-4">      
      <b-table style="background-color: rgb(93, 93, 97, 0.2) !important; color: rgba(255,255,255, 0.9) !important; border-radius: 5px; word-break: break-all;" :items="rounds" :fields="fields" :per-page="perPage" :current-page="currentPage">
        <template #cell(Address)="data">
          <span v-html="data.value"></span>
        </template>
      </b-table>
      <b-pagination  align="center" v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { getRounds } from '@/sdk'
import { getRoundDataByAddress } from '@/wallet'
import {isMobile} from "@/utils"
import moment from 'moment'

export default Vue.extend({
  name: 'HomeView',
  mounted() {
    getRounds().then(async (data) => {
      if(typeof data == 'undefined') return
      let rounds = await Promise.all(
        data.map(async (round) => {
          const roundData = await getRoundDataByAddress(round.id)
          return {
            Ended: moment.unix(roundData.roundEnd).local().format('DD[.]MM HH[:]mm'),
            Address: '<a href="./#/round/' + round.id + '">' + (isMobile() ? round.id.slice(0, 6) + ' . . . ' + round.id.slice(60) : round.id) + '</a>',
            Total: Math.floor(roundData.side1 + roundData.side2),
            RoundEndTimestamp: roundData.roundEnd,            
          }
        })
      )
      rounds = rounds.filter((r) => {      
        return (r.RoundEndTimestamp * 1000) < Date.now()
      })
      this.rounds = rounds.sort((a, b)=> b.RoundEndTimestamp - a.RoundEndTimestamp)
    })
  },
  data() {
    return {
      fields: ['Ended', 'Address', 'Total'],
      rounds: null as null | Array<{Ended: string, Address: string, Total: number, RoundEndTimestamp: number}>,
      perPage: 10,
      currentPage: 1,
      isMobile
    }
  },
  methods: {},
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

<template>
  <div>
    <div><LoginLogout :authProp="authTrigger" /></div>
    <div class="container mt-4 mb-4">
    <div v-if="rounds.length == 0" class="text-center">No past rounds yet</div>
    <div v-else class="text-center text-secondary h4">Past rounds</div>
      <b-table dark striped hover :items="rounds">
       <template #cell(Address)="data">
        <span  v-html="data.value"></span>
      </template>
      </b-table>      
    </div>
    <div variant="outline-secondary" class="text-center mt-4" style="text-align: center">
      <a href="./#/" class="link-secondary"><b>Current round</b></a>
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
      this.rounds = await Promise.all(rounds.map(async (round) => {      
        const roundData = await getRoundDataByAddress(round.id)        
        return {
          Ended: (new Date(roundData.roundEnd * 1000)).toLocaleDateString() + ' ' + (new Date(roundData.roundStart * 1000)).toLocaleTimeString(),
          Address: '<a href="/#/round/'+round.id+'">'+round.id+'</a>',         
          Total: Math.floor((roundData.side1 + roundData.side2)),
        }
      })      )
    })
  },
  data() {
    return {
      authTrigger: false,
      rounds: [],
    }
  },
  methods: {},
  components: {
    LoginLogout,
  },
  watch: {},
})
</script>

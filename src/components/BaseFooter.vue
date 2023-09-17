<template>
  <div id="footer" class="text-light">
    <b-table-simple hover small caption-top responsive class="container text-left mt-4" id="footer-links">
      <b-tr>
        <b-td>
          <div variant="outline-secondary">
            <a href="./#/" class="link-light"><b>Current round</b></a>
          </div>
        </b-td>
        <b-td>
          <div variant="outline-secondary">
            <a href="./#/history" class="link-light"><b>Past rounds</b></a>
          </div>
        </b-td>
        <b-td>
          <div variant="outline-secondary">
            <a href="./#/rules" class="link-light"><b>Rules</b></a>
          </div>
        </b-td>
      </b-tr>
      <b-tr>
        <b-td>
          <div variant="outline-secondary">
            <a href="./#/pool" class="link-light"><b>Pool</b></a>
          </div></b-td
        >
        <b-td>
          <div variant="outline-secondary">
            <a href="./#/pool" class="link-light"><b>History</b></a>
          </div></b-td
        >
        <b-td>
          <div variant="outline-secondary">
            <a href="./#/history" class="link-light"><b>GitHub</b></a>
          </div>
        </b-td>
      </b-tr>
    </b-table-simple>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseFooter',
  data() {
    return {
      items: [{ html: 'info' }],
    }
  },
})
</script>
<style scoped>
#footer {
  background-color: rgb(93, 93, 97, 0.1) !important;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

#footer-links {
  color: rgba(255, 255, 255, 0.5) !important;
}
</style>

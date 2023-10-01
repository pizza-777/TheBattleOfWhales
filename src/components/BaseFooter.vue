<template>
  <div id="footer" class="text-light mt-4">
    <b-table-simple hover small caption-top responsive class="container text-left mt-4 text-center" id="footer-links">
      <b-tr>
        <b-td class="col-md-4">
          <div variant="outline-secondary">
            <a href="./#/" class="link-light"><b>Current round</b></a>
          </div>
        </b-td>
        <b-td class="col-md-4">
          <div variant="outline-secondary">
            <a href="./#/history" class="link-light"><b>Past rounds</b></a>
          </div>
        </b-td>
        <b-td class="col-md-4">
          <div variant="outline-secondary">
            <a href="./#/rules" class="link-light"><b>Rules</b></a>
          </div>
        </b-td>
      </b-tr>
      <b-tr>
        <b-td class="col-md-4 sm">
          <div variant="outline-secondary">
            <a href="https://pizza-777.github.io/TheBattleOfWhales/" target="_blank" class="link-light">
              <span class="text-muted small strong">Demo (devnet)</span>
            </a>
          </div>
        </b-td>
        <b-td>
          <div variant="outline-secondary sm">
            <a href="https://github.com/pizza-777/TheBattleOfWhales" target="_blank" class="link-light">
              <span class="text-muted small strong">Source code</span>
            </a>
          </div>
        </b-td>
        <b-td> </b-td>
      </b-tr>
    </b-table-simple>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
//sticky footer
// create an Observer instance
const resizeObserver = new ResizeObserver(() => {
  const footer = document.getElementById('footer')
  const bodyH = document.body.scrollHeight

  const screenH = window.innerHeight - 50
  if (footer)
    if (bodyH > screenH) {
      footer.style.position = 'relative'
    } else {
      footer.style.position = 'absolute'
    }
})

// start observing a DOM node
resizeObserver.observe(document.body)

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
  /*  background-color: rgb(93, 93, 97, 0.1) !important;*/
  bottom: 0;
  left: 0;
  width: 100%;
}

#footer-links a {
  text-decoration: none;
}

td {
  width: 33.3%;
}
</style>

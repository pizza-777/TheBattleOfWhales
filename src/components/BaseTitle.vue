<template>
  <div>
    <h1 v-if="!isMobile()" id="title" class="mb-3 mt-3 text-center text-light"><span class="h2">↯</span> THE BATTLE of WHALES <span class="h2">↯</span></h1>
    <h2 v-if="isMobile()" id="title" class="mb-3 mt-3 text-center text-light"><span class="h2">↯</span> THE BATTLE of WHALES <span class="h2">↯</span></h2>
  </div>
</template>

<script>
import { isMobile } from '@/utils'
import Vue from 'vue'
export default Vue.extend({
  name: 'BaseTitle',
  data() {
    return {
      isMobile,
    }
  },
})
</script>

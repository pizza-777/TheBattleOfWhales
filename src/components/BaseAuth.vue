<template>
  <div v-if="!isMobile()">
    <nav class="text-right mt-2" style="text-align: right">
      <span @click="_loginLogout()" class="btn-link text-light" style="cursor: pointer; padding-right: 2em">{{ ls }}</span>
    </nav>
  </div>
</template>

<script>
import Vue from 'vue'
import { authState, login, logout } from '@/wallet'

export default Vue.extend({
  name: 'LoginLogout',
  data() {
    return {
      ls: null,
    }
  },
  methods: {
    isMobile() {
      if (screen.width <= 760) {
        return true
      } else {
        return false
      }
    },
    //needed for monitoring the state of the user from other components
    async authorization() {
      const auth = await authState()
      if (typeof auth == 'undefined') this.ls = 'Install EverWallet'
      else this.ls = auth === false ? 'Connect' : `${auth.slice(0, 6)}...${auth.slice(62)} ⎆`
    },
    async _loginLogout() {
      const auth = await authState()
      if (typeof auth == 'undefined') {
        window.open('https://chrome.google.com/webstore/detail/ever-wallet/cgeeodpfagjceefieflmdfphplkenlfk', '_blank')
        return
      }
      if (auth === false) {
        await login()
        await this.authorization()
        return
      }
      logout().then(() => {
        this.ls = 'Connect'
      })
    },
  },
  async created() {
    await this.authorization()
  },
})
</script>

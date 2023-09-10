<template>
  <div>
    <h1 id="title" class="mb-4 text-center text-light mt-4"><span class="h2">❃</span> Rules <span class="h2">❃</span></h1>
    <b-list-group class="text-center">
      <b-list-group-item class="lgi">Bet on a Whale. Use EverWallet or send Evers directly to the address below the Whale</b-list-group-item>
      <b-list-group-item class="lgi">Claim your reward when the round ended</b-list-group-item>
      <b-list-group-item class="lgi">New rounds start every 6 hours</b-list-group-item>
    </b-list-group>
    <div id="footer">
      <div id="links">
        <div variant="outline-secondary" class="text-center">
          <a href="./#/history" class="link-light"><b>Past rounds</b></a>
        </div>
        <div variant="outline-secondary" class="text-center mt-3">
          <a href="./" class="link-light"><b>Current round</b></a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.lgi {
  background-color: black;
  color: white;
  background-color: rgba(0, 0, 0, 0);
}
#footer {
  position: absolute;
  height: 100px;
  bottom: 0;
  width: 100%;
}
</style>

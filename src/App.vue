<template>
  <div id="app">   
    <div><BaseAuth/></div>
    <BaseTitle></BaseTitle>
    <router-view/>
    <base-footer></base-footer>
  </div>
</template>

<style>
/* @font-face {
  src: local("Robus"),
   url(./assets/font/Robus.otf) format("opentype");
} */
input {
  background-color:  rgb(93, 93, 97, 0.3) !important;
  color: rgba(255,255,255, 0.9) !important;
}
#title {
  font-family: Robus;
}
</style>

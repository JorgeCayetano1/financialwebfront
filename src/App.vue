<template>
<div>
  <nav-bar></nav-bar>
    <div id="app">
      
      <router-view></router-view>

      <b-button
          id="chat-bot"
      >Open CHAT BOT</b-button>
    </div>

<!--  <footer-bar/>-->
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
// import FooterBar from '@/components/Footer.vue'


export default {
  name: 'App',
  components:{
    NavBar,
    // FooterBar,
}
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#chat-bot {
  display: flex;
  position: relative;
  z-index: 9999;
  left: 250px;
}
</style>

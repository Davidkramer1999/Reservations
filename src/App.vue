<template>
  <div id="app">
    Welcome Page
    <div id="nav">
      <router-link to="/SelectCrypto">Select crypto </router-link> |
      <router-link to="/HelloWorld">HelloWorld </router-link>
      <router-view />
    </div>
    <!-- <HelloWorldVue></HelloWorldVue> -->
    <!-- <SelectCryptoVue> </SelectCryptoVue> -->
    <!-- <AccommodationViewVue></AccommodationViewVue> -->
    <!-- <ShowAllAccommodations></ShowAllAccommodations> -->
  </div>
</template>

<script>
// import HelloWorldVue from './components/HelloWorld.vue';
// import SelectCryptoVue from './components/SelectCrypto.vue';
// import AccommodationViewVue froPm './components/AccommodationView.vue';
// import ShowAllAccommodations from './components/ShowAllAccommodations.vue';
export default {
  name: 'App',
  components: {
    // SelectCryptoVue,
    // AccommodationViewVue,
    // HelloWorldVue,
    // ShowAllAccommodations
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

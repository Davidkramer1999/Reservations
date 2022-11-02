<template>
  <div id="app">
    KUA SE DOGAJA TU?
    <HelloWorldVue></HelloWorldVue>
    <SelectCryptoVue> </SelectCryptoVue>
    <AccommodationViewVue></AccommodationViewVue>
  </div>
</template>

<script>
import HelloWorldVue from './components/HelloWorld.vue';
import SelectCryptoVue from './components/SelectCrypto.vue';
import AccommodationViewVue from './components/AccommodationView.vue';
export default {
  name: 'App',
  components: {
    SelectCryptoVue,
    AccommodationViewVue,
    HelloWorldVue
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

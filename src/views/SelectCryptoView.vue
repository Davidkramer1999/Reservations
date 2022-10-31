
<template>
  Please select crypto

  <select v-model="selectedRate" id="selectedRate">
    <option v-for="rate in rates" :value="rate.symbol" :key="rate">
      {{ rate.symbol }}
    </option>
  </select>
  <div>Selected: {{ selectedRate }}</div>
  <div>
    <button v-if="selectedRate !== ''" @click="Accommodation()"> Continue to reservation </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedRate: "",
      rates: []
    }
  },
  //get data from api EUR
  async mounted() {
    const response = await fetch("https://api.exchangerate-api.com/v4/latest/EUR");
    const data = await response.json()
    let rates = []
    for (const [symbol, rate] of Object.entries(data.rates)) {
      rates.push({
        symbol,
        rate
      });
    }
    this.rates = rates
  },
  methods: {
    Accommodation() {
      this.$router.push({ name: 'accommodationView', params: { id: selectedRate } })
      // this.$router.push('/accommodationView')
    }
  }
}
</script>


<style>
.root {
  margin: 0 auto;
  max-width: 600px;
}
</style>
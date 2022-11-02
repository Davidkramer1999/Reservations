
<template>
    <div>
        <v-select :items="rates" label="Solo field"></v-select>


        <select v-model="selectedRate">
            <option v-for="(rate, index)  in rates" :value="rate.symbol" :key="index">
                {{ rate.symbol }}
            </option>
        </select>
        <div>Selected: {{ selectedRate }}</div>
        <div>
            <li>
                <router-link to="/AccommodationView">Todos</router-link>
            </li>
            <button v-if="selectedRate !== ''" @click="Accommodation()"> Continue to reservation </button>
        </div>
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
                rate,
            });
        }
        this.rates = rates
    },
    methods: {
        Accommodation() {

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
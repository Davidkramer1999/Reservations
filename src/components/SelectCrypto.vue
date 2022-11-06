<template>
    <div>
        <div class="currency-select">
            <multiselect
                v-model="selectedRates"
                placeholder="Choose currency?"
                label="symbol"
                track-by="rate"
                :options="rates"
                :multiple="true"
                :taggable="true"
            ></multiselect>
            <router-link
                v-if="selectedRates.length !== 0"
                :to="{
                    name: 'AccommodationView',
                    params: { rates: selectedRates },
                }"
            >
                Select accommodations
            </router-link>
        </div>
    </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
    components: { Multiselect },
    data() {
        return {
            selectedRates: [],
            rates: [],
        };
    },
    async mounted() {
        const response = await fetch(
            "https://api.exchangerate-api.com/v4/latest/EUR"
        );
        const data = await response.json();
        let rates = [];
        for (const [symbol, rate] of Object.entries(data.rates)) {
            rates.push({
                symbol,
                rate,
            });
        }
        this.rates = rates;
    },
};
</script>

<style scoped>
.currency-select {
    margin-top: 20px;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
}
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css">
.currency-select {
    width: 70%;
}
</style>

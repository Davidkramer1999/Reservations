
<template>
    <div>
        <!-- <div>
            <select class="addToSelect" v-model="selectedRate" multiple>
                <option v-for=" (rate, index) in rates" :value="rate.symbol" :key="index">
                    {{ rate.symbol }}
                </option>
            </select>
            <div>Selected: {{ selectedRate }}</div>
            <div>
                <router-link to="/AccommodationView"> Select accommodations</router-link>
            </div>
        </div> -->
             <!-- :to="'/AccommodationView'" -->

        <div>
            <multiselect v-model="selectedRate" placeholder="Choose crypto?" label="symbol" track-by="rate"
                :options="rates" :multiple="true" :taggable="true"></multiselect>
            <router-link v-if="selectedRate.length !== 0"
            :to="{ name: 'AccommodationView', params: { selectedRate } }"
            >
                Select
                accommodations
            </router-link>
        </div>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
    components: { Multiselect },
    data() {
        return {
            selectedRate: [],
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
    provide() {
        return { foo: 'hi' }
    }
}
</script>
  
  
<style src="vue-multiselect/dist/vue-multiselect.min.css">
/* .addToSelect {
    border: 1px !important;
    border-color: black !
} */
</style>
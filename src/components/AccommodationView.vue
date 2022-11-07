<template>
    <div>
        <v-card>
            <v-card-title>
                <v-spacer></v-spacer>
                <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
                </v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="accommodation" :search="search" v-model="selected"
                :footer-props="{ 'items-per-page-options': [11] }" item-key="id" show-select class="elevation-1"
                :single-select="singleSelect">
            </v-data-table>
            <template v-slot:top>
                <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
            </template>
        </v-card>
        <router-link v-if="selected.length !== 0" :to="{
            name: 'ShowSelected',
            params: { accommodations: selected },
        }">
            Show more info
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        rates: {
            type: Array,
            default: () => [],
        },
    },
    async mounted() {
        const response = await fetch(
            "https://5ddbbbd5041ac10014de14d7.mockapi.io/accommodations/prices"
        );
        const data = await response.json();
        this.accommodation = this.mapAccommodations(data);
        this.headers = this.headers.concat(this.getHeadersBasedOnRates());
    },
    data() {
        return {
            singleSelect: false,
            selected: [],
            search: "",
            headers: [{ text: "Name", value: "name" }],
            accommodation: [],
        };
    },
    methods: {
        mapAccommodations(accommodations) {
            const mappedAccommodations = [];
            for (const accommodation of accommodations) {
                const acc = { ...accommodation };
                for (const rate of this.rates ?? []) {
                    acc[`priceIn${rate.symbol}`] = acc.priceInEur * rate.rate;
                }
                mappedAccommodations.push(acc);
            }
            return mappedAccommodations;
        },
        getHeadersBasedOnRates() {
            const tableHeaders = [];
            for (const rate of this.rates ?? []) {
                tableHeaders.push({
                    text: `Price in ${rate.symbol}`,
                    value: `priceIn${rate.symbol}`,
                });
            }
            return tableHeaders;
        },
    },
};
</script>
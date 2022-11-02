<template>
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
</template>


  
<script>
export default {
    async mounted() {
        const response = await fetch("https://5ddbbbd5041ac10014de14d7.mockapi.io/accommodations/prices");
        const data = await response.json()
        this.accommodation = data
    },
    data() {
        return {
            singleSelect: false,
            selected: [],
            search: '',
            headers: [
                { text: 'id', value: 'id', filterable: false },
                { text: 'name', value: 'name' },
                { text: 'address', value: 'address' },
                { text: 'avaliable', value: 'avaliable' },
                { text: 'city', value: 'city' },
                { text: 'country', value: 'country' },
                { text: 'priceInEur', value: 'priceInEur', filterable: false },
                { text: 'createdAt', value: 'createdAt', filterable: false },
            ],
            accommodation: [],
        }
    },

}
</script>
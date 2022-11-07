<template>
    <div>
        <div v-for="accomodation in accomodations" v-bind:key="accomodation.id">
            <p>ID: {{ accomodation.id }}</p>
            <p>Price in EUR: {{ accomodation.priceInEur }}</p>
            <p>Available: {{ accomodation.avaliable }}</p>
            <p>City: {{ accomodation.city }}</p>
            <p>Address: {{ accomodation.address }}</p>
            <p>Country: {{ accomodation.country }}</p>
            <p>Name: {{ accomodation.name }}</p>
            <p v-for="priceKey in getPriceKeys(accomodation)" v-bind:key="priceKey">
                Price in {{ getPriceSymbol(priceKey) }}:
                {{ accomodation[`${priceKey}`]}}
            </p>
            <hr />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        accomodations: Array,
        default: () => [],
    },
    mounted() {
        console.log(this.accomodations);
    },
    methods: {
        getPriceKeys(accomodation) {
            const priceKeys = [];
            for (const key of Object.keys(accomodation)) {
                if (key.startsWith("priceIn")) {
                    priceKeys.push(key);
                }
            }
            return priceKeys;
        },
        getPriceSymbol(priceKey) {
            return priceKey.split("priceIn")[1];
        },
    },
};
</script>
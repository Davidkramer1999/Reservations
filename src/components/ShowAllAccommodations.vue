
<template>
    <div>
        kr neki
        {{ this.selected = localStorage.geItem('selected') }}
    </div>
</template>
<script>


export default {
    // mounted() {

    //     this.selected = localStorage.geItem('selected')
    // },

    data() {
        return {
            selected: [],
            selectedCryptoSymbol: []
        }
    },
    //get data from api EUR

    methods: {

    }
}
</script>
  
  
<style>

</style>
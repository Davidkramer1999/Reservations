<template>
    <ag-grid-vue style="width: 500px; height: 200px" class="ag-theme-alpine" :columnDefs="columnDefs"
        :rowData="rowData">
    </ag-grid-vue>
</template>
  
<script>
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";

export default {
    name: "App",
    components: {
        AgGridVue,
    },
    data() {
        return {
            columnDefs: [
                { headerName: "Make", field: "id" },
                { headerName: "Model", field: "createdAt" },
                { headerName: "Price", field: "price" },
            ],
            rowData: [],
        };

    },
    async mounted() {
        const response = await fetch("https://5ddbbbd5041ac10014de14d7.mockapi.io/accommodations/prices");
        const data = await response.json()
        this.rowData = data
        console.warn(this.rowData)
    },
};
</script>
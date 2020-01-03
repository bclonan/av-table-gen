<template>
<main>
   <styled-table :avTableDef="fakeTableData" :avTableMData="fakeReturnedData"/>
</main>
</template>

<script>
// @ is an alias to /src
import styledTable from '@/components/generators/styledTable.vue'

import baseTable from '@/components/generators/baseTable'

// DEV MODe
import { createTableData } from '../../mockData/baseTable'

   export default {
      name : "PreviewTable",
      created() {
         this.fakeTableData = this.$fakeTable,
         this.fakeReturnedData = createTableData(5);
      },
      components : {
         styledTable
      },
      data() {
         return {
            fakeTableData: [],
            fakeReturnedData : []
         }
      },
      computed: {
        
      },
   }
</script>

<style>
table,
th,
td {
   border: 1px solid black;
   border-collapse: collapse;
}

th,
td {
   padding: 5px;
   text-align: left;
}
</style>

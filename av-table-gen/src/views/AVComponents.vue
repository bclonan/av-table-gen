<template>
<main>
   <styled-table :avTableDef="fakeTableData"/>
</main>
</template>

<script>
// @ is an alias to /src
import styledTable from '@/components/generators/styledTable.vue'

import baseTable from '@/components/generators/baseTable'
   export default {
      name : "PreviewTable",
      created() {
         this.fakeTableData = this.$fakeTable
      },
      components : {
         styledTable
      },
      data() {
         return {
            fakeTableData: []
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

<template>
<main>
   <styled-table />
</main>
</template>

<script>
// @ is an alias to /src
import styledTable from '@/components/generators/styledTable.vue'

import baseTable from '@/components/generators/baseTable'
   export default {
      name : "PreviewTable",
      components : {
         styledTable
      }
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

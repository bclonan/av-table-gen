<template>
<td :colspan="isColSpan" :rowspan="isRowSpan" :headers="headers.toString()">

   <slot>
      &nbsp;
   </slot>
</td>
</template>

<script>
export default {
   name: "avTableCell",
   props: {

      colSpan: {
         type: Number,
         default: 1
      },
      rowSpan: {
         type: Number,
         default: 1
      },
      headers: {
         type: Array,
         default: function () {
            return []
         }
      }
   },
   computed: {
      isColSpan() {
         const {
            colSpan
         } = this;
         return !colSpan ?
            1 :
            colSpan >= 1000 ?
            1000 :
            typeof colSpan == 'number' ?
            colSpan :
            null;
      },
      isRowSpan() {
         const {
            rowSpan
         } = this;
         return !rowSpan ?
            1 :
            rowSpan >= 65534 ?
            65534 :
            typeof rowSpan == 'number' ?
            rowSpan :
            null;
      }
   }
}
</script>

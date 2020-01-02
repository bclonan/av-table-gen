<template>
   <th :scope="isScope" :colspan="isColSpan" :rowspan="isRowSpan" :headers="headers.toString()">
      <slot></slot>
   </th>
</template>

<script>
   export default {
      name: "avTableCellHeader",
      props :{
         // row, col, rowgroup, colgroup, auto
         scope : {
            type : String,
            default : 'auto'
         },
         colSpan : {
            type : Number,
            default : null
         },
         rowSpan : {
            type : Number,
            default : null
         },
         headers : {
            type : Array,
           default: function () {
        return []
      }
         }
      },
      computed : {
         isColSpan () {
            const {colSpan} = this;
            return !colSpan ?
            1
            : 
            colSpan >= 1000 ?
            1000
            : typeof colSpan == 'number' ?
            colSpan
            : null;
         },
         isRowSpan () {
            const {rowSpan} = this;
            return !rowSpan ?
            1
            : 
            rowSpan >= 65534 ?
            65534
            : typeof rowSpan == 'number' ?
            rowSpan
            : null;


         },
         isScope () {
            const {scope} = this;
            return !scope ?
            'auto'
            : scope.includes('row', 'col', 'rowgroup', 'colgroup') ?
            scope
            : null;

         }
      }
   }
</script>
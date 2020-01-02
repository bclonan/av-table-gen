<template>
   <th :scope="scope" :colspan="isColSpan" :rowspan="isRowSpan" :headers="headers.toString()">
      <slot></slot>
   </th>
</template>

<script>
   export default {
      name: "avTableCell",
      props :{
         // row, col, rowgroup, colgroup, auto
         scope : {
            type : String,
            default : 'auto',
            validator: (prop) => [
        'row',
        'col',
        'rowgroup',
        'colgroup',
      ].includes(prop)
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
         }
      }
   }
</script>
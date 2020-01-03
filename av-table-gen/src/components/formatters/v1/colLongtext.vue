<template>
   <p>
     
      <slot :cellValue="cellValue | truncate(hasMaxLength)">
         {{cellValue | truncate(hasMaxLength)}}

      </slot>
   </p>
</template>

<script>
   export default {
      name: "colLongtext",
         props: {
      formatterParams: {
         type: Object,
         default: function () {
            return {}
         }
      },
      cellValue: {
         type: [String, Object, Array]
      },
      columnObj : {
         type : Object,
         default: function () {
            return {}
         }
      },
      title: {
         type: String,
         default : null,
      },
      field : {
         type : String,
         default : null
      },
      scope : {
         type : String,
         default : null
      }
   },
   computed : {

      hasMaxLength () {
            const {formatterParams} = this;
            return !formatterParams.maxLength ?
            10
            : formatterParams.maxLength;


         },
   }
   }
</script>
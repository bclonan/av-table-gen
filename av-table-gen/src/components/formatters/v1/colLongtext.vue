<template>
<div >
   <p> {{truncatedText ? truncatedText : cellValue}}</p>
   
</div>
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
         type: String,
         default: ""
      },
      columnObj: {
         type: Object,
         default: function () {
            return {}
         }
      },
      title: {
         type: String,
         default: null,
      },
      field: {
         type: String,
         default: null
      },
      scope: {
         type: String,
         default: null
      }
   },
   data() {
      return {
         isEditing: false,
         newValue: null
      }
   },
   methods: {
      editThis() {
         console.log("this")
         this.isEditing = !this.isEditing
      },
      updateValue(e) {
         this.newValue = e.target.value;
      }
   },
   computed: {
      truncatedText() {
         const {
            formatterParams,
            cellValue
         } = this;
         return !formatterParams.maxLength ?
            false : !cellValue ?
            false :
            
            cellValue.substring(0, formatterParams.maxLength);

      },
   }
}
</script>

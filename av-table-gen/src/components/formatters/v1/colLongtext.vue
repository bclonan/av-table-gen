<template>
<div >
   <p  @click="editValue"> {{truncatedText ? truncatedText : cellValue}}</p>
   
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
         type: [String, Object, Array]
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
      },
      editValue() {
         console.log("this")
         let additionalEditOptions = false;

         if(this.formatterParams.editOptions){
            additionalEditOptions = {...this.formatterParams.editOptions}
           return this.$emit('editCell', additionalEditOptions)
         }

         return this.$emit('editCell', additionalEditOptions)
         
      }
   },
   computed: {
      truncatedText() {
         const {
            formatterParams,
            cellValue
         } = this;
         return !formatterParams.maxLength ?
            false :
            cellValue.substring(0, formatterParams.maxLength);

      },
   }
}
</script>

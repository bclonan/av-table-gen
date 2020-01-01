<template>
   <col :span="colSpan" :class="colClass">
</template>

<script>
   export default {
      name : "avTableColumn",
      props : {
         colSpan : {
            type : Number,
            default : null
         },
         colClass : {
            type : Array,
             default: function () {
            return []
         }
         }
      }
   }
</script>
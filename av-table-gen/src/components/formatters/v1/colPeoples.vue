<template>
   <div>
      <slot></slot>
   </div>
</template>

<script>
   export default {
      name : 'colPeoples',
      props: {
         formatterOptions: {
            type: Object,
            default: function () {
            return {}
            }
         },
      },
   }
</script>
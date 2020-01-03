<template>
   <div>
      <slot></slot>
   </div>
</template>

<script>
   export default {
      name : 'colText',
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
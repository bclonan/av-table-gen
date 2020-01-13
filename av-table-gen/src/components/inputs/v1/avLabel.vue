<template>
  <label
    :for="labelFor"
    :id="`lbl-${labelFor}`"
   
    :class="[labelHidden ? 'visuallyhidden sr-only' : '']"
    >{{ labelText }}</label
  >
</template>

<script>
export default {
  name: "avLabel",
  props: {
    // labelFor: {
    //   type: String,
    //   default: null
    // },
    labelText: {
      type: String,
      default: null
    },
    labelHidden: {
      type: Boolean,
      default: false
    },
    labelFor: {
      type: String,
      default: null
    },
    sronly: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only {
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  /* 1 */
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  /* 2 */
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
  /* 3 */
}

.sr-only-focusable:focus,
.sr-only-focusable:active {
  clip: auto !important;
  -webkit-clip-path: none !important;
  clip-path: none !important;
  height: auto !important;
  margin: auto !important;
  overflow: visible !important;
  width: auto !important;
  white-space: normal !important;
}
</style>

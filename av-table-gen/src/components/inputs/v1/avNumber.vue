<template>
  <input
    type="number"
    :value="value"
    @input="$emit('input', $event.target.value)"
    :placeholder="placeholder"
    v-bind="allFormAttributes"
    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  />
  <!--https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number-->
</template>

<script>
export default {
  name: "avNumber",
  props: {
    placeholder: {
      type: [Number, String],
      default: null
    },
    value: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    maxlength: {
      type: [Number, String],
      default: 524288
    },
    minlength: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: null
    },
    min: {
      type: [Number, String],
      default: null
    },
    step: {
      type: [Number, String],
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    hasDefaultNumbers: {
      type: Boolean,
      default: false
    },
    dataList: {
      type: Array,
      default: function() {
        return [];
      }
    },
    tabIndex: {
      type: [Number, String],
      default: null
    },
    pattern: {
      type: String,
      default: null //'[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}
    }
  },
  computed: {
    hasId() {
      return this.formID
        ? {
            "aria-label": this.formID,
            name: this.formID,
            id: this.formID
          }
        : null;
    },
    hasSpellCheck() {
      return this.type === "password" ? null : this.spellCheck;
    },
    checkFormState() {
      return this.readOnly
        ? {
            readonly: true
          }
        : this.disabled
        ? {
            disabled: true
          }
        : null;
    },
    hasTabIndex() {
      return this.tabIndex >= 0 ? this.tabIndex : null;
    },
    hasPattern() {
      return !this.pattern ? null : this.pattern;
    },
    hasMaxlength() {
      return !this.maxlength ? null : this.maxlength;
    },
    hasMinlength() {
      return !this.minlength ? null : this.minlength;
    },
    hasSize() {
      return this.size >= 0 ? this.tabIndex : null;
    },
    hasRequired() {
      return this.required ? this.required : null;
    },
    hasMin() {
      return this.min >= 0 ? this.min : null;
    },
    hasMax() {
      return this.max >= 0 ? this.max : null;
    },
    hasStep() {
      return this.step >= 0 ? this.step : null;
    },
    allFormAttributes() {
      return {
        tabindex: this.hasTabIndex,
        ...this.hasId,
        ...this.checkFormState,
        pattern: this.hasPattern,
        maxlength: this.hasMaxlength,
        minlength: this.hasMinlength,
        min: this.hasMin,
        max: this.hasMax,
        step: this.hasStep,
        size: this.hasSize,
        required: this.hasRequired
      };
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
</style>

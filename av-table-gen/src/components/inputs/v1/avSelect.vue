<template>
<div class="relative">
   <select v-model="selectedOption" @input="
        event => {
          $emit('input', event.target.value);
        }
      " :id="formID" aria-haspopup="true" :tabindex="hasTabIndex">
      <option v-show="hasDisabledValue" disabled>{{ disabledText }}</option>
      <option v-for="(option, index) in hasOptions" :key="index" :value="option.value">{{ option.text }}</option>
   </select>
   <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
         <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
   </div>
</div>
</template>

<script>
export default {
   name: "avSelect",

   props: {
      placeholder: {
         type: [String, Boolean],
         default: null
      },
      selected: {
         type: [String, Boolean],
         default: null
      },
      value: {
         type: [String, Boolean, Object],
         default: null
      },
      formID: {
         type: String,
         default: null
      },
      spellCheck: {
         type: Boolean,
         default: false
      },
      type: {
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
      tabIndex: {
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
      pattern: {
         type: String,
         default: null //example email pattern '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}
      },
      size: {
         type: [Number, String],
         default: null
      },
      required: {
         type: Boolean,
         default: false
      },
      hasDisabledValue: {
         type: Boolean,
         default: false
      },
      disabledText: {
         type: String,
         default: "Please Select One"
      },
      options: {
         type: [Array, Object],
         default: function () {
            return [];
         }
      }
   },
   data() {
      return {
         selectedOption: null
         // selected: this.value || null
      };
   },
   watch: {
      selected(newValue, oldValue) {
         this.$emit("selectUpdate", newValue);
      }
   },
   watch: {
      selected: {
         immediate: true,
         handler: function (newValue) {
            this.selectedOption = newValue;
         }
      }
   },
   methods: {
      selectVal(fieldVal) {
         console.log(fieldVal);
         //this.$set(this.formData, fieldName, value);
         let inputObj = {
            name: fieldName,
            value: value
         };
         this.$emit("selectUpdate", inputObj);
      }
   },
   computed: {
      hasValue() {
         return this.value ? this.value : null;
      },
      hasId() {
         return this.formID ? this.formID : null;
      },
      hasSpellCheck() {
         return this.type === "password" ? null : this.spellCheck;
      },
      checkFormState() {
         return this.readOnly ?
            {
               readonly: true
            } :
            this.disabled ?
            {
               disabled: true
            } :
            null;
      },
      hasOptions() {
         return this.options ? this.options : null;
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

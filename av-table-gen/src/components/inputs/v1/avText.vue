<template>
<input @input="$emit('input', $event.target.value)":spellcheck="hasSpellCheck" :tabindex="hasTabIndex" :id="hasId" :name="hasId" :pattern="hasPattern" :maxlength="hasMaxlength" :minlength="hasMinlength" :size="hasSize" :required="hasRequired" :type="type" :value="value" :placeholder="placeholder" :aria-labelledby="hasLbl" :aria-describedby="hasHelpText"  />
</template>

<script>
export default {
   name: "avText",

   props: {
      placeholder: {
         type: [String, Boolean],
         default: null
      },
      value: {
         type: [String, Boolean],
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
      helpText: {
         type: String,
         default: null
      }
   },
   created() {
      //allFormAttribs = Object.assign({}, allFormAttribs, { a: 1, b: 2 })
      this.formAttribs = Object.assign({},
         this.formAttribs,
         this.allFormAttributes
      );
      this.inputLoaded = true;
   },
   data() {
      return {
         formAttribs: {},
         inputLoaded: false
      };
   },
   computed: {
      hasId() {
         return this.formID ? this.formID : null;
      },
      hasLbl() {
         return this.formID ?
            `lbl-${this.formID}` :
            null;
      },
      hasHelpText() {
         return this.helpText ?
            this.formID :
            null;
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
      allFormAttributes() {
         let allFormAttribs = {};
         let inputAttributes = {
            spellcheck: this.hasSpellCheck,
            tabindex: this.hasTabIndex,
            ...this.hasId,
            ...this.checkFormState,
            pattern: this.hasPattern,
            maxlength: this.hasMaxlength,
            minlength: this.hasMinlength,
            size: this.hasSize,
            required: this.hasRequired
         };
         allFormAttribs = Object.assign({}, allFormAttribs, {
            a: 1,
            b: 2
         });

         return inputAttributes;
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

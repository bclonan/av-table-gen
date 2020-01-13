<template>
<transition>
<div class="w-full px-3 mb-6 md:mb-0">
   <av-label v-show="field.label" v-bind="field.label" />
   <component :is="field.component" v-bind="field" :value="field.value" @input="updateForm(field.formID, $event)" @selectUpdate="upSelectForm($event)" v-click-outside="onClickOutside"/>
   <p v-if="field.helpText" class=" text-xs italic xyzHelpText">{{field.helpText}}</p>
   <div v-if="field.toolTipText && field.enableTooltips" :id="field.formID" class="xyztooltip" :class="[activeTooltipHover === field.formID ? 'visbleTooltip' : 'hiddenTooltip']" role="tooltip" :aria-hidden="[activeTooltipHover === field.formID ? false : true]">{{field.toolTipText}}</div>
</div>
</transition>

</template>
<script>
import avLabel from "@/components/inputs/v1/avLabel"
import avText from "@/components/inputs/v1/avText"
import avNumber from "@/components/inputs/v1/avNumber"
import avSelect from "@/components/inputs/v1/avSelect"

export default {
   name: "avTextRow",
   props: {
      field: {
         type: Object,
         default: function () {
            return {};
         }
      },
      inputOptions: {
         type: Object,
         default: function () {
            return {};
         }
      }
   },
   components: {
      avLabel,
      avSelect,
      avText,
      avNumber

   },
   data() {
      return {
         activeTooltipHover: null,
         formData: this.value || {},
         formValue : this.value || null
      };
   },
   methods: {
      updateForm(formID, value) {
         console.log(formID, value)
          this.$set(this.formData, formID, value);
          this.formValue = value;
         //this.$emit("sendValUpdate", value);
      },
      onClickOutside (event, el) {
        console.log('Clicked outside. Event: ', event)
        const value = event.target.value;
        const fdata = this.formValue;
        this.$emit("sendValUpdate", fdata);
      },
      upSelectForm(selectObj) {
         console.log(selectObj);
      }
   }
};
</script>

<style>
.xyztooltip {
   margin-left: 10px;
   padding: 2px 5px;
   background: #ffe;
   z-index: 10;
   border: 2px solid black;
   display: none;
}

.visbleTooltip {
   display: inline-block;
}

.xyzHelpText {
   color: #4E5B5F;
}
</style>

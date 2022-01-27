<template>
  <b-row>
    <b-col cols="12">
      <label class="profile-label">{{ title }}</label>
      <cleave
        v-model="content"
        class="form-control"
        :raw="false"
        :placeholder="placeholder"
        :options="mask"
      />
      <slot />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow } from 'bootstrap-vue'
import Cleave from 'vue-cleave-component'

export default {
  components: { BRow, BCol, Cleave },
  props: {
    value: { required: false },
    title: { required: true, type: String },
    placeholder: { required: false, type: String},
  },
  data() {
    return {
      content: null,
      mask: {
        // prefix: '+52',
        blocks: [3, 3, 4],
        numericOnly: true,
      },
    }
  },
  watch: {
    content(val) {
      this.$emit('input', val)
    },
    value(newValue) {
      this.content = newValue
    },
  },
}
</script>

<style scoped>

</style>

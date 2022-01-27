<template>
  <b-row>
    <b-col cols="12">
      <label class="profile-label">{{ title }}</label>

      <input
        v-model="content"
        :type="type"
        class="form-control"
        :placeholder="placeholder"
      >
      <slot />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow } from 'bootstrap-vue'

export default {
  components: { BRow, BCol },
  props: {
    value: { required: false },
    title: { required: true, type: String },
    placeholder: { required: false, type: String },
    disabled: { required: false, type: Boolean, default: false },
    type: { required: false, type: String, default: 'text' },
  },
  data() {
    return {
      content: this.value,
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

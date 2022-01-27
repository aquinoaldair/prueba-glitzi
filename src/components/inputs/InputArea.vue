<template>
  <b-row>
    <b-col cols="12">
      <label class="profile-label">{{ title }}</label>
      <b-form-textarea
        v-model="content"
        :placeholder="placeholder"
        rows="2"
        max-rows="4"
      />
      <slot />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow, BFormTextarea } from 'bootstrap-vue'

export default {
  components: { BRow, BCol, BFormTextarea },
  props: {
    value: { required: false },
    title: { required: true, type: String },
    placeholder: { required: false, type: String },
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

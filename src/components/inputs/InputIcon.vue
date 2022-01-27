<template>
  <b-row>
    <b-col cols="12">
      <label class="profile-label">{{ title }}</label>
      <div
        role="group"
        class="input-group input-group-merge"
      >
        <div class="input-group-prepend">
          <div class="input-group-text" :class="classDisabled">
            <feather-icon :icon="icon" />
          </div>
        </div>
        <input
          v-model="content"
          :disabled="disabled"
          class="form-control"
          :placeholder="placeholder"
        >
      </div>
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
    icon: { required: true, type: String },
  },
  data() {
    return {
      content: this.value,
    }
  },
  computed: {
    classDisabled() {
      return this.disabled ? 'bg-disabled' : ''
    },
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
  .bg-disabled{
    background-color: #EFEFEF !important;
  }
</style>

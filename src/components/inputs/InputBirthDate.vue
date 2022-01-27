<template>
  <b-row>
    <b-col cols="12">
      <label class="profile-label">{{ title }}</label>
      <div role="group" class="input-group input-group-merge">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <feather-icon icon="CalendarIcon" />
          </div>
        </div>
        <cleave
            v-model="content"
            class="form-control"
            :raw="false"
            :options="mask"
            :placeholder="placeholder"
        />
      </div>
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
    placeholder: { required: false, type: String, default: 'DD/MM/AAAA' },
  },
  data() {
    return {
      content: this.value,
      mask: {
        date: true,
        datePattern: ['d', 'm', 'Y'],
        delimiter: '/',
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

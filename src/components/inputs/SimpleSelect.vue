<template>
  <b-row>
    <b-col cols="12">
      <label class="profile-label">{{ title }}</label>
      <v-select
        v-model="content"
        :multiple="multiple"
        :label="label"
        :options="data"
        :clearable="false"
        :placeholder="placeholder"
        :reduce="reduction"
        @input="onSelected(content)"
      />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow } from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: { BRow, BCol, vSelect },
  props: {
    value: { required: true },
    multiple: { required: false, type: Boolean, default: false },
    title: { required: true, type: String },
    data: { required: true, type: Array },
    placeholder: { required: false, type: String },
    label: { type: String, required: false, default: 'label' }, // Si pasas un objeto entonces debes enviar la propiedad que debe ser mostrada
    primary: { type: String, required: false, default: null }, // Si quieres que en el modelo te regrese la propiedad seleccionada, no el objeto seleccionado, pasarle este valor
  },
  data() {
    return {
      reduction: option => option,
      content: this.value,
    }
  },
  created() {
    if (this.primary) {
      this.reduction = option => option[this.primary]
    }
  },
  methods: {
    onSelected(val) {
      const result = this.property ? val[this.key] : val
      this.$emit('input', result)
    },
  },
}
</script>

<style scoped>

</style>

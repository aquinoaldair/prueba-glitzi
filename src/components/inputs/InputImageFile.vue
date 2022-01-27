<template>
  <div class="row">
    <input
      ref="fileInput"
      style="display: none"
      type="file"
      enctype="multipart/form-data"
      accept="image/png, image/jpeg"
      @change="fileSelected"
    >
    <div
      class="d-flex justify-content-start align-items-center ml-1 mb-1"
    >
      <b-avatar
        button
        size="50"
        :src="url"
        class="align-baseline bg-white "
        @click="$refs.fileInput.click()"
      />
      <div class="profile-user-info ml-2">
        <h5 class="mb-0">
          {{ Fields.Image.title }}
        </h5>
        <small :class="variantColor">
          {{ Fields.Image.subtitle }}
        </small><br>
        <small
          v-if="isPreview"
          class="text-primary cursor-pointer"
          @click="$refs.fileInput.click()"
        >
          {{ Fields.Image.changeImage }}
        </small>
      </div>
    </div>

  </div>
</template>

<script>
import { BAvatar } from 'bootstrap-vue'
import Fields from '@/values/personal_form'

export default {
  components: { BAvatar },
  props: {
    value: { required: false },
    title: { required: false, type: String },
    subtitle: { required: false, type: String },
    textButton: { required: false, type: String },
  },
  data() {
    return {
      url: Fields.Image.defaultUrl,
      isPreview: false,
      Fields,
    }
  },
  computed: {
    variantColor() {
      return (this.isPreview) ? 'text-secondary' : 'text-primary'
    },
  },
  watch: {
    url() {
      this.isPreview = true
      this.$emit('input', this.url)
    },
  },
  methods: {
    fileSelected(e) {
      const file = e.target.files[0]
      if (file) {
        this.url = URL.createObjectURL(file)
      }
    },
  },
}
</script>

<style scoped>
</style>

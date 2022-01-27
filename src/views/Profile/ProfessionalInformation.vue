<template>
  <ValidationObserver v-slot="{ invalid }">
    <b-row class="mt-2 justify-content-center">
      <p class="profile-subtitle">
        {{ Profile.Professional.subtitle }}
      </p>
    </b-row>
    <form @submit.prevent="onSubmit">
      <b-row>

        <b-col
          cols="12"
          class="mt-1"
        >
          <ValidationProvider :rules="Fields.Area.rules">
            <SimpleSelect
              v-model="form.area_id"
              :title="Fields.Area.title"
              :data="areas"
              :label="Fields.Area.label"
              :primary="Fields.Area.primary"
              :placeholder="Fields.Area.placeholder"
            />
          </ValidationProvider>
        </b-col>
        <b-col
          cols="12"
          class="mt-1"
        >
          <ValidationProvider :rules="Fields.Profession.rules">
            <SimpleSelect
              v-model="form.profession_id"
              :title="Fields.Profession.title"
              :data="professions"
              :label="Fields.Profession.label"
              :primary="Fields.Profession.primary"
              :placeholder="Fields.Profession.placeholder"
            />
          </ValidationProvider>
        </b-col>
        <b-col
          cols="12"
          class="mt-1"
        >
          <ValidationProvider :rules="Fields.Specialty.rules">
            <SimpleSelect
              v-model="form.specialty_id"
              :title="Fields.Specialty.title"
              :data="specialties"
              :label="Fields.Specialty.label"
              :primary="Fields.Specialty.primary"
              :placeholder="Fields.Specialty.placeholder"
              :multiple="true"
            />
          </ValidationProvider>
        </b-col>
        <b-col
          cols="12"
          class="mt-1"
        >
          <ValidationProvider :rules="Fields.Zone.rules">
            <input-text
              v-model="form.zone"
              :title="Fields.Zone.title"
              :placeholder="Fields.Zone.placeholder"
            />
          </ValidationProvider>
        </b-col>
        <b-col
          cols="12"
          class="mt-1"
        >
          <ValidationProvider :rules="Fields.Description.rules">
            <input-area
              v-model="form.description"
              :title="Fields.Description.title"
              :placeholder="Fields.Description.placeholder"
            />
          </ValidationProvider>
        </b-col>
        <b-col
          cols="12"
          class="mt-1"
        >
          <ValidationProvider :rules="Fields.URL.rules">
            <input-icon
              v-model="form.url"
              icon="Link2Icon"
              :disabled="true"
              :title="Fields.URL.title"
            />
          </ValidationProvider>
        </b-col>
        <b-col
          cols="12"
          class="mt-1"
        >
          <ValidationProvider :rules="Fields.Instagram.rules">
            <input-icon
              v-model="form.instagram"
              icon="InstagramIcon"
              :placeholder="Fields.Instagram.placeholder"
              :title="Fields.Instagram.title"
            />
          </ValidationProvider>
        </b-col>
        <b-col
          v-if="isValidInstagramUrl"
          cols="12"
          class="mt-1"
        >
          <b-form-checkbox
            checked="false"
            name="check-button"
            switch
            inline
            @change="onImportChecked($event)"
          >
            {{ Fields.Instagram.checkText }}
          </b-form-checkbox>
        </b-col>
        <b-col
          cols="12"
          class="mt-2"
        >
          <b-button
            type="submit"
            block
            :disabled="invalid"
            variant="primary"
          >
            {{ Fields.Button.title }}
          </b-button>
        </b-col>
      </b-row>
    </form>
  </ValidationObserver>
</template>

<script>
import {
  BRow, BCol, BButton, BFormCheckbox,
} from 'bootstrap-vue'
import { extend, ValidationProvider, ValidationObserver } from 'vee-validate'
import Genders from '@/values/genders'
import Fields from '@/values/professional_form'
import Profile from '@/values/profile'
import InstagramUrlRegex from '@/utils/regex'
import { required, regex } from 'vee-validate/dist/rules'
import InputText from '../../components/inputs/InputText.vue'
import SimpleSelect from '../../components/inputs/SimpleSelect.vue'
import InputArea from '../../components/inputs/InputArea.vue'
import InputIcon from '../../components/inputs/InputIcon.vue'

extend('required', required)
extend('regex', regex)
export default {
  components: {
    InputIcon,
    InputText,
    BRow,
    BCol,
    SimpleSelect,
    BButton,
    ValidationProvider,
    ValidationObserver,
    InputArea,
    BFormCheckbox,
  },
  data() {
    return {
      form: {
        area_id: null,
        profession_id: null,
        specialty_id: null,
        zone: null,
        description: null,
        url: null,
        instagram: null,
      },
      Fields,
      Genders,
      Profile,
    }
  },
  computed: {
    areas() {
      return this.$store.state.services.areas
    },
    professions() {
      return this.$store.state.services.professions
    },
    specialties() {
      // regresamos lo mismo que el de arriba para no crear mas json en modo de ejemplo
      return this.$store.state.services.professions
    },
    isValidInstagramUrl() {
      const instagramUrlRegex = InstagramUrlRegex
      return instagramUrlRegex.test(this.form.instagram)
    },
  },
  created() {
    this.$store.dispatch('services/GET_AREAS')
    this.$store.dispatch('services/GET_PROFESSIONS')
    this.createProfileUrl() // simulamos crear la url
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit')
    },
    onImportChecked(val) {
      if (!val) return
      alert('Conectarse a Instragram')
    },
    createProfileUrl() {
      const user = {
        name: 'Aldair',
        lastName: 'Antonio Aquino',
      }
      const domain = 'https://nombre.com.mx/'

      this.form.url = domain.concat(this.removeSpecialCharacters(user.name))
        .concat('.')
        .concat(this.removeSpecialCharacters(user.lastName))
    },
    removeSpecialCharacters(val) {
      return val.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replaceAll(' ', '.')
    },

  },
}
</script>

<style scoped>

</style>

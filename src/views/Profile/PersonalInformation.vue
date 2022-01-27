<template>

  <ValidationObserver v-slot="{ invalid }">
    <b-row class="mt-2 justify-content-center">
      <p class="profile-subtitle">
        {{ Profile.Personal.subtitle }}
      </p>
    </b-row>
    <form @submit.prevent="onSubmit">
      <b-row>
        <b-col cols="12" class="mt-2">
          <input-image-file v-model="form.image" />
        </b-col>
        <b-col cols="12">
          <ValidationProvider :rules="Fields.Name.rules" v-slot="{ errors }">
            <input-text v-model="form.name" :title="Fields.Name.title" :placeholder="Fields.Name.placeholder" />
          </ValidationProvider>
        </b-col>
        <b-col cols="12" class="mt-1">
          <ValidationProvider :rules="Fields.LastName.rules" v-slot="{ errors }">
           <input-text v-model="form.lastName" :title="Fields.LastName.title" :placeholder="Fields.LastName.title"/>
          </ValidationProvider>
        </b-col>
        <b-col cols="12" class="mt-1">
          <ValidationProvider :rules="Fields.Phone.rules" v-slot="{ errors }">
            <input-phone v-model="form.phone" :title="Fields.Phone.title" :placeholder="Fields.Phone.placeholder" />
          </ValidationProvider>
        </b-col>
        <b-col cols="12" class="mt-1">
          <ValidationProvider :rules="Fields.Gender.rules" v-slot="{ errors }">
          <SimpleSelect
              v-model="form.gender"
              :title="Fields.Gender.title"
              :data="Genders"
              :label="Fields.Gender.label"
              :primary="Fields.Gender.primary"
              :placeholder="Fields.Gender.placeholder"
          />
          </ValidationProvider>
        </b-col>
        <b-col cols="12" class="mt-1">
          <ValidationProvider :rules="Fields.Email.rules" v-slot="{ errors }">
            <input-text v-model="form.mail" :title="Fields.Email.title" :placeholder="Fields.Email.placeholder" type="email"/>
          </ValidationProvider>
        </b-col>
        <b-col cols="12" class="mt-1">
          <ValidationProvider :rules="Fields.BirthDate.rules" v-slot="{ errors }">
            <input-birth-date v-model="form.birthDate" :title="Fields.BirthDate.title" />
          </ValidationProvider>
        </b-col>
        <b-col cols="12" class="mt-1">
          <ValidationProvider :rules="Fields.Address.rules" v-slot="{ errors }">
           <input-text v-model="form.address" :title="Fields.Address.title" :placeholder="Fields.Address.placeholder"/>
          </ValidationProvider>
        </b-col>
        <b-col cols="12" class="mt-2">
          <b-button type="submit" block :disabled="invalid" variant="primary">
            {{ Fields.Button.title }}
          </b-button>
        </b-col>
      </b-row>
    </form>
  </ValidationObserver>
</template>

<script>
import { BRow, BCol, BButton } from 'bootstrap-vue'
import { extend, ValidationProvider, ValidationObserver } from 'vee-validate'
import Genders from '@/values/genders'
import Fields from '@/values/personal_form'
import Profile from '@/values/profile'
import { required, email, regex } from 'vee-validate/dist/rules'
import InputText from '../../components/inputs/InputText.vue'
import InputPhone from '../../components/inputs/InputPhone.vue'
import SimpleSelect from '../../components/inputs/SimpleSelect.vue'
import InputBirthDate from '../../components/inputs/InputBirthDate.vue'
import InputImageFile from '../../components/inputs/InputImageFile.vue'

extend('required', required)
extend('email', email)
extend('regex', regex)
export default {
  components: {
    InputImageFile,
    InputBirthDate,
    InputText,
    BRow,
    BCol,
    InputPhone,
    SimpleSelect,
    BButton,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      form: {
        image: null,
        name: null,
        lastName: null,
        phone: null,
        mail: null,
        gender: null,
        birthDate: null,
        address: null,
      },
      Fields,
      Genders,
      Profile,
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit')
    },
  },
}
</script>

<style scoped>

</style>

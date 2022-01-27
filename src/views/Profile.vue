<template>
  <b-row class="justify-content-center">
    <b-col class="col-md-6">
      <b-card>
        <b-row class="justify-content-around border-bottom">
          <p class="profile-title">
            {{ Profile.title }}
          </p>
        </b-row>
        <b-row class="mt-2 d-flex justify-content-center justify-content-center">
          <div class="p-1">
            <div class="d-flex flex-row justify-content-end align-items-center">
              <b-button
                :variant="getButtonVariant(profileSteps.Personal)"
                class="btn-icon"
              >
                <feather-icon icon="UserIcon" />
              </b-button>
              <h4
                class="breadcrumb ml-1 mb-0 p-0"
                :class="getTextVariant(profileSteps.Personal)"
              >
                {{ Profile.Personal.title }}
              </h4>
            </div>
          </div>
          <div class="p-1">
            <feather-icon
              icon="ChevronRightIcon"
              variant="secondary"
              size="26"
              class="mt-custom"
            />
          </div>
          <div class="p-1">
            <div class="d-flex flex-row justify-content-start align-items-center">
              <b-button
                :variant="getButtonVariant(profileSteps.Professional)"
                class="btn-icon"
              >
                <feather-icon
                  icon="AtSignIcon"
                  :variant="getButtonVariant(profileSteps.Professional)"
                />
              </b-button>
              <h4
                class="breadcrumb ml-1 mb-0 p-0"
                :class="getTextVariant(profileSteps.Professional)"
              >
                {{ Profile.Professional.title }}
              </h4>
            </div>
          </div>
        </b-row>
        <b-row>
          <b-col>
            <personal-information
              v-show="isPersonalStep"
              @onSubmit="goToNextStep"
            />
            <professional-information
              v-show="isProfessionalStep"
              @onSubmit="goToNextStep"
            />
          </b-col>
        </b-row>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import {
  BCard, BRow, BButton, BCol,
} from 'bootstrap-vue'
import Steps from '@/values/profile_steps'
import Profile from '@/values/profile'
import PersonalInformation from './Profile/PersonalInformation.vue'
import ProfessionalInformation from './Profile/ProfessionalInformation.vue'

export default {
  components: {
    ProfessionalInformation,
    PersonalInformation,
    BCard,
    BRow,
    BCol,
    BButton,
  },
  data() {
    return {
      step: Steps.Personal,
      steps: [Steps.Personal, Steps.Professional],
      profileSteps: Steps,
      stepsQueues: [],
      Profile,
    }
  },
  computed: {
    isPersonalStep() {
      return this.step === Steps.Personal
    },
    isProfessionalStep() {
      return this.step === Steps.Professional
    },
  },
  created() {
    this.addStepToQueue(this.step)
  },
  methods: {
    goToNextStep() {
      const index = this.steps.findIndex(step => step === this.step)
      if (this.checkIfIsTheLastStep(index)) {
        alert('Do something For the Final Step')
        return
      }
      this.step = this.steps[index + 1]
      this.addStepToQueue(this.step)
    },
    addStepToQueue(step) {
      this.stepsQueues.push(step)
    },
    checkIfIsTheLastStep(index) {
      return index === (this.steps.length - 1)
    },
    getButtonVariant(step) {
      return this.steps.includes(step) ? 'primary' : 'secondary'
    },
    getTextVariant(step) {
      return this.steps.includes(step) ? 'text-primary' : 'text-secondary'
    },
  },
}
</script>

<style>

</style>

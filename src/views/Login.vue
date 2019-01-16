<template lang="pug">
  .container
    img.logo(src='../assets/wolox-logo.png')
    form(@submit.prevent='onSubmit')
      .input-container
        label.label(for='email') Email
        input(v-model='email',
          :class="['input', ($v.email.$invalid && submitted) || !$v.email.email ? 'error-input' : '']")
        span.error-label(v-if='!$v.email.email') El email no tiene un formato válido
        span.error-label(v-if='!$v.email.required && submitted') Campo requerido
      .input-container
        label.label(for='password') Password
        input(type='password',
          v-model='$v.password.$model',
          :class="['input', $v.password.$error && ($v.password.required || submitted ) ? 'error-input': '']")
        span.error-label(v-if='!$v.password.required && submitted') Campo requerido
        span.error-label(v-if='$v.password.$dirty && $v.password.required && !$v.password.hasNumber')
          | El password debe contener al menos un número
        span.error-label(v-if='$v.password.$dirty && $v.password.required && !$v.password.hasUppercase')
          | El password debe contener al menos una mayúscula
      button.primary-button Login
    .horizontal-division
    router-link.secondary-button(to='/sign-up') Sign up
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { hasNumber, hasUppercase } from '@/utils/validations.js'
import { login } from '@/services/auth'

export default {
  name: 'login',
  components: {},
  data () {
    return {
      email: '',
      password: '',
      submitted: false
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      hasNumber,
      hasUppercase
    }
  },
  methods: {
    generateLoginObject () {
      return {
        email: this.email,
        password: this.password
      }
    },
    async onSubmit () {
      if (!this.$v.$invalid) {
        const userData = this.generateLoginObject()
        const response = await login(userData)
        if (response.ok) {
          console.log(response.data.access_token)
        } else {
          this.formError =
            response.data && response.data.error && response.data.error[0]
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import "../scss/commons/colors.scss";
.container {
  background-color: $light-grey;
  border: 1px solid $light-grey2;
  border-top: 5px solid $scooter;
  display: flex;
  flex-direction: column;
  margin: 100px;
  padding: 0 15px;
  width: 300px;
}

.logo {
  margin: 25px 0;
  object-fit: contain;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin: 15px auto;
  width: 100%;
}

.horizontal-division {
  background-color: $light-grey3;
  border: 1px solid $light-grey3;
  margin: 5px 0;
}
</style>

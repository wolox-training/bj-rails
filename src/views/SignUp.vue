<template lang="pug">
  .container
    img.logo(src='../assets/wolox-logo.png', alt='wolox-books-logo')
    form.bottom-separator(@submit.prevent='onSubmit')
      .input-container
        label.label(for='name') First name
        input.input(v-model='firstName')
      .input-container
        label.label(for='lastName') Last name
        input.input(v-model='lastName')
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
          :class="['input', $v.password.$error && ($v.password.required || submitted ) ? 'error-input ': '']")
        span.error-label(v-if='!$v.password.required && submitted') Campo requerido
        span.error-label(v-if='$v.password.$dirty && $v.password.required && !$v.password.hasNumber')
          | El password debe contener al menos un número
        span.error-label(v-if='$v.password.$dirty && $v.password.required && !$v.password.hasUppercase')
          | El password debe contener al menos una mayúscula
      span.error-label(v-if='formError') {{formError}}
      button.primary-button Sign up
    router-link.secondary-button(to='/login') Login
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { hasNumber, hasUppercase } from '@/utils/validations.js'
import { signUp } from '@/services/auth'

export default {
  name: 'home',
  components: {},
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      submitted: false,
      formError: ''
    }
  },
  validations: {
    firstName: {
      required
    },
    lastName: {
      required
    },
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
    generateObject () {
      const formObject = {
        user: {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          password: this.password,
          password_confirmation: this.password,
          locale: 'es'
        }
      }
      return formObject
    },
    async onSubmit () {
      this.submitted = true
      if (!this.$v.$invalid) {
        const userData = this.generateObject()
        const response = await signUp(userData)
        if (response.ok) {
          this.$router.push('/login')
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
  max-width: 300px;
  padding: 0 15px;
  width: 100%;
}


.input-container {
  display: flex;
  flex-direction: column;
  margin: 15px auto;
  width: 100%;
}
</style>

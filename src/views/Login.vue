<template>
  <div class="container">
    <img src="../assets/wolox-logo.png" class="logo">
    <form @submit.prevent="onSubmit">
      <div class="input-container">
        <label for="name" class="label">First name</label>
        <input id="firstName" v-model="firstName" class="input">
      </div>
      <div class="input-container">
        <label for="lastName" class="label">Last name</label>
        <input id="lastName" v-model="lastName" class="input">
      </div>
      <div class="input-container">
        <label for="email" class="label">Email</label>
        <input
          id="email"
          v-model="email"
          :class="{'input': true, 'error-input': ($v.email.$invalid && submitted) || !$v.email.email}"
        >
        <span class="error-label" v-if="!$v.email.email">El email no tiene un formato válido</span>
        <span class="error-label" v-if="!$v.email.required && submitted">Campo requerido</span>
      </div>
      <div class="input-container">
        <label for="password" class="label">Password</label>
        <input
          id="password"
          type="password"
          v-model="$v.password.$model"
          :class="{'input': true, 'error-input': $v.password.$error && ($v.password.required || submitted )}"
        >
        <span class="error-label" v-if="!$v.password.required && submitted">Campo requerido</span>
        <span
          class="error-label"
          v-if="$v.password.$dirty && $v.password.required && !$v.password.hasNumber"
        >El password debe contener al menos un número</span>
        <span
          class="error-label"
          v-if="$v.password.$dirty && $v.password.required && !$v.password.hasUppercase"
        >El password debe contener al menos una mayúscula</span>
      </div>
      <button class="primary-button">Sign up</button>
    </form>
    <div class="horizontal-division"/>
    <button class="secondary-button">Login</button>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { hasNumber, hasUppercase } from '@/utils/validations.js'

export default {
  name: 'home',
  components: {},
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      submitted: false
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
          password: this.password
        }
      }
      return formObject
    },
    onSubmit () {
      this.submitted = true
      console.log(this.generateObject())
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

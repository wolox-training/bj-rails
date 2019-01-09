<template>
  <div class="container">
    <img src="../assets/wolox-logo.png" class="logo">
    <div class="input-container">
      <label for="name" class="label">First name</label>
      <input id="name" class="input" v-model="firstName">
    </div>
    <div class="input-container">
      <label for="name" class="label">Last name</label>
      <input id="name" class="input" v-model="lastName">
    </div>
    <div class="input-container">
      <label for="name" class="label">Email</label>
      <input id="name" class="input" v-model="email">
    </div>
    <div class="input-container">
      <label for="name" class="label">Password</label>
      <input id="name" class="input" v-model="password" type="password">
    </div>
    <button :class="'primaryButton'" @click="printForm">Sign up</button>
    <div class="horizontal-division"/>
    <button :class="'secondaryButton'">Login</button>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null
    };
  },
  methods: {
    generateObject() {
      const formObject = {
        user: {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          password: this.password
        }
      };
      return formObject;
    },
    printForm() {
      console.log(this.generateObject());
    }
  }
};
</script>

<style lang="scss">
@import "../scss/commons/colors.scss";
.container {
  background-color: $light-grey;
  border: 1px solid $light-grey2;
  border-top: 5px solid $scooter;
  display: flex;
  flex-direction: column;
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
  margin: 10px auto;
  width: 100%;
}

.horizontal-division {
  background-color: $light-grey3;
  border: 1px solid $light-grey3;
  margin: 5px 0;
}
</style>
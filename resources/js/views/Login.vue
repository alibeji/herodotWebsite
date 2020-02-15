<template>
  <form @submit.prevent="submit">
    <div v-if="errors && errors.auth" class="text-danger">{{ errors.auth }}</div>
    <label>Username or Email</label>
    <input type="text" name="login" v-model="fields.login" required>
    <label>Password</label>
    <input type="password" name="password" v-model="fields.password" required>
    <button type="submit">Log In</button>
  </form>
</template>

<script>
  import FormMixin from "../mixins/FormMixin";

  export default {
    name: "Login",
    mixins: [FormMixin],
    data() {
      return {
        action: "/api/login",
        onSuccess: this.authenticated,
      }
    },
    methods: {
      authenticated: function (response) {
        localStorage.setItem('authToken', response.token);
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.token;
        this.$store.dispatch('checkUser');
        this.$router.push("home")
      }
    }
  }
</script>

<style scoped>

</style>
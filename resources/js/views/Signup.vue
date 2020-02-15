<template>
  <form @submit.prevent="submit">
    <label>Username</label>
    <input type="text" name="username" v-model="fields.username" required>
    <div v-if="errors && errors.username" class="text-danger">{{ errors.username[0] }}</div>
    <label>Email</label>
    <input type="email" name="email" v-model="fields.email" required>
    <div v-if="errors && errors.email" class="text-danger">{{ errors.email[0] }}</div>
    <label>Password</label>
    <input type="password" name="password" v-model="fields.password" required>
    <div v-if="errors && errors.password" class="text-danger">{{ errors.password[0] }}</div>
    <label>Confirm Password</label>
    <input type="password" name="password_confirmation" v-model="fields.password_confirmation" required>
    <div v-if="errors && errors.password_confirmation" class="text-danger">{{ errors.password_confirmation[0] }}</div>
    <button type="submit">Create account</button>
  </form>
</template>

<script>
  import FormMixin from "../mixins/FormMixin";

  export default {
    name: "Signup",
    mixins: [FormMixin],
    data() {
      return {
        action: "/api/register",
        onSuccess: this.registered,
      }
    },
    methods: {
      registered: function (response) {
        this.$router.push("home")
      }
    }
  }
</script>

<style scoped>

</style>
<template>
  <div id="booking-modal">
    <h3>Book a Demo</h3>
    <img src="/cross.svg" alt="" class="cross" @click="closeModal" />
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Email address"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Company Name" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.company"
          placeholder="Enter company name"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        company: '',
      },
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.company = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    closeModal(event) {
      this.$emit('closingModal', false)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/constants.scss';
#booking-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba($color: $almostWhite, $alpha: 0.9);
  backdrop-filter: blur(4px);
  padding: 4rem 4rem 4rem 4rem;
  color: rgb(55, 163, 149);
  font-weight: 500;
  border-radius: 10px;
  z-index: 14999999999;
  .cross {
    width: 1.5rem;
    position: absolute;
    top: 0.7rem;
    right: 0.7rem;
    cursor: pointer;
  }
  h3 {
    font-weight: 600;
    font-family: $paragraphFont;
    margin-bottom: 1rem;
  }
  .btn-primary {
    background-color: rgb(55, 163, 149);
    border-color: rgb(55, 163, 149);
    width: 8rem;
  }
  .btn-danger {
    background-color: rgb(205, 29, 103);
    width: 8rem;
  }
  .form-control {
    &:focus {
      border-color: rgb(55, 163, 149);
      box-shadow: 0 0 0 0.2rem rgba(55, 163, 149, 0.5);
    }
  }
}
@media only screen and (max-width: $breakpoint-md) {
  #booking-modal {
    position: fixed;
    top: 0%;
    left: 0%;
    transform: translate(0%, 0%);
    border-radius: 0px;
    padding: 1rem 1rem 1rem 1rem;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>

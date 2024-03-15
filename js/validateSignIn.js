const { createApp, ref } = Vue;
const { ErrorMessage, Field, Form } = VeeValidate;

const App = {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      email: "",
      password: "",
      errors: {
        email: null,
        password: null,
      },
      check: false, // New variable to track both errors resolved
    };
  },
  methods: {
    onSubmit(values) {
      console.log(values, null, 2);
    },
    required(value) {
      if (!value) {
        this.errors.password = "This field is required";
      } else if (value.length < 8) {
        this.errors.password = "Password length must be 8.";
      } else {
        this.errors.password = null; // Clear error
      }
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        this.errors.email = "This field is required";
      } else {
        // if the field is not a valid email
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!regex.test(value)) {
          this.errors.email = "This field must be a valid email";
        } else {
          this.errors.email = null; // Clear error
        }
      }
    },
    updateCheck() {
      this.check = !this.errors.email && !this.errors.password;
      console.log(this.check);
    },
  },
  watch: {
    errors: {
      handler() {
        this.updateCheck();
      },
      deep: true,
    },
  },
};
const app = createApp(App);
app.mount("#app");

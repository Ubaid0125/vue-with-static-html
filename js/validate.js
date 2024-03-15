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
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      companyWebsite: "",
      password: "",
      confirmPassword: "",
      errors: {
        firstName: null,
        lastName: null,
        email: null,
        phoneNumber: null,
        companyName: null,
        companyWebsite: null,
        password: null,
        confirmPassword: null,
      },
      check: false,
    };
  },
  methods: {
    onSubmit(values) {
      console.log(values, null, 2);
    },
    validateFirstName(value) {
      if (!value) {
        this.errors.firstName = "This field is required";
      } else {
        this.errors.firstName = null;
      }
    },
    validateLastName(value) {
      if (!value) {
        this.errors.lastName = "This field is required";
      } else {
        this.errors.lastName = null;
      }
    },
    validateEmail(value) {
      if (!value) {
        this.errors.email = "This field is required";
      } else {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!regex.test(value)) {
          this.errors.email = "This field must be a valid email";
        } else {
          this.errors.email = null;
        }
      }
    },
    validatePhoneNumber(value) {
      if (!value) {
        this.errors.phoneNumber = "This field is required";
      } else {
        this.errors.phoneNumber = null;
      }
    },
    validateCompanyName(value) {
      if (!value) {
        this.errors.companyName = "This field is required";
      } else {
        this.errors.companyName = null;
      }
    },
    validateCompanyWebsite(value) {
      if (!value) {
        this.errors.companyWebsite = "This field is required";
      } else {
        this.errors.companyWebsite = null;
      }
    },
    validatePassword(value) {
      if (!value) {
        this.errors.password = "This field is required";
      } else if (value.length < 8) {
        this.errors.password = "Password length must be 8.";
      } else {
        this.errors.password = null;
      }
    },
    validateConfirmPassword(value) {
      if (!value) {
        this.errors.confirmPassword = "This field is required";
      } else if (value.length < 8) {
        this.errors.confirmPassword = "Password length must be 8.";
      } else {
        this.errors.confirmPassword = null;
      }
    },
    updateCheck() {
      this.check =
        !this.errors.email &&
        !this.errors.password &&
        !this.errors.firstName &&
        !this.errors.lastName &&
        !this.errors.phoneNumber &&
        !this.errors.companyName &&
        !this.errors.companyWebsite &&
        !this.errors.confirmPassword;
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

<template>
  <div class="container auth">
    <div class="row">
      <div class="col-lg-6">
        <h4>CREATE AN ACCOUNT</h4>
        <p>Start shopping for goods and services</p>

        <form @submit.prevent="handleSignup">
          <label for="first_name">First Name</label>
          <input
            type="text"
            v-model="firstName"
            placeholder="Enter your first name"
            required
          />

          <label for="last_name">Last Name</label>
          <input
            type="text"
            v-model="lastName"
            placeholder="Enter your last name"
            required
          />

          <label for="email">Email</label>
          <input
            type="email"
            v-model="email"
            placeholder="Enter your email"
            required
          />

          <label for="password">Password</label>
          <input
            type="password"
            v-model="password"
            placeholder="******"
            required
          />

          <label for="confirm_password">Confirm Password</label>
          <input
            type="password"
            v-model="confirmPassword"
            placeholder="******"
            required
          />

          <p>
            By signing up, you agree to VAULTS
            <span class="green">terms and conditions</span> and
            <span class="green">privacy policy</span>
          </p>

          <button class="gradient__bg" type="submit">SIGN UP</button>

          <div class="d-flex justify-content-between align-items-center or">
            <hr />
            <p>OR</p>
            <hr />
          </div>

          <div
            id="g_id_onload"
            data-client_id="513931588844-2rjk6ukt0gc84gsho7f4epuu90p7o6up.apps.googleusercontent.com"
            data-callback="handleGoogleSignIn"
          ></div>
          <div
            class="g_id_signin"
            data-type="standard"
            data-shape="rectangular"
            data-theme="outline"
            data-text="sign_in_with"
            data-size="large"
            data-logo_alignment="left"
          ></div>
        </form>

        <p class="already">
          Already have an account?
          <NuxtLink class="green" :to="{ name: 'SignIn' }">Log in</NuxtLink>
        </p>
      </div>
      <div class="col-lg-6 col-0">
        <img
          src="../assets/images/sign-in.png"
          class="img-fluid"
          alt="sign in img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  mounted() {
    // Load Google Sign-In script
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Set up Google Sign-In callback
    window.handleGoogleSignIn = this.handleGoogleSignIn;
  },

  methods: {
    async handleSignup() {
      const response = await fetch(
        "https://backend.thevaultldn.com/signup.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
          }),
        }
      );

      const data = await response.json();
      if (data.success) {
        // Redirect to login page on successful signup
        this.$router.push({ name: "SignIn" });
      } else {
        // Handle error, e.g., show a message
        console.log(data.message);
      }
    },
    handleGoogleSignIn(googleUser) {
      const id_token = googleUser.credential;

      fetch("https://backend.thevaultldn.com/getGoogleUser.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: id_token }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // Redirect to login page on successful Google Sign-In
            this.$router.push({ name: "SignIn" });
          } else {
            // Handle error, e.g., show a message
            console.log(data.message);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>

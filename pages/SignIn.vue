<template>
  <div class="container auth">
    <div class="row signin">
      <div class="col-lg-6">
        <h4>LOG INTO YOUR ACCOUNT</h4>
        <p>Start shopping for goods and services</p>

        <form @submit.prevent="handleSignIn">
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

          <button class="gradient__bg" type="submit">SIGN IN</button>

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
          New to the vault?
          <NuxtLink class="green" :to="{ name: 'SignUp' }">Sign Up</NuxtLink>
        </p>
      </div>
      <div class="col-lg-6 col-0">
        <h4 class="crimson-text">
          Curating top-tier value with luxury brands in every box, since 2019.
        </h4>
        <img
          src="../assets/images/login.png"
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
      email: "",
      password: "",
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
    async handleSignIn() {
      try {
        const response = await fetch(
          "https://www.thevaultldn.com/api/signin.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: this.email,
              password: this.password,
            }),
          }
        );

        const data = await response.json();
        if (data.success) {
          // Redirect to the homepage on successful sign-in
          sessionStorage.setItem("first_name", data.first_name);
          this.$router.push("/");
        } else {
          // Handle error, e.g., show a message

          console.log(data.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
    async handleGoogleSignIn(googleUser) {
      const id_token = googleUser.credential;

      try {
        const response = await fetch(
          "https://www.thevaultldn.com/api/getGoogleUser.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: id_token }),
          }
        );

        const data = await response.json();

        if (data.success) {
          // Store Google user data in local storage
          sessionStorage.setItem("first_name", data.first_name);

          // Redirect to the home page
          this.$router.push({ name: "index" });
        } else {
          alert(data.message || "Google Sign-In failed.");
        }
      } catch (error) {
        console.error("Google Sign-In error:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>

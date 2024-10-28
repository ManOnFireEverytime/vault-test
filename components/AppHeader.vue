<template>
  <div>
    <nav :class="navIsOpen ? 'opened' : ''">
      <div class="container-lg container-fluid d-flex justify-content-between">
        <div class="left__nav">
          <img src="../assets/images/logo.png" class="nav__logo" alt="logo" />
          <NuxtLink
            :to="{ name: 'index' }"
            class="nav__link"
            :class="isRoute('index') ? 'active' : ''"
            >Home</NuxtLink
          >
          <NuxtLink
            :to="{ name: 'AboutUs' }"
            class="nav__link"
            :class="isRoute('AboutUs') ? 'active' : ''"
            >About Us</NuxtLink
          >
          <NuxtLink
            :to="{ name: 'Products' }"
            class="nav__link"
            :class="isRoute('Products') ? 'active' : ''"
            >Products</NuxtLink
          >
          <NuxtLink
            :to="{ name: 'Raffle' }"
            class="nav__link"
            :class="isRoute('Raffle') ? 'active' : ''"
            >Raffle</NuxtLink
          >
          <NuxtLink
            :to="{ name: 'ContactUs' }"
            class="nav__link"
            :class="isRoute('ContactUs') ? 'active' : ''"
            >Contact Us</NuxtLink
          >
        </div>
        <div class="right__nav">
          <button class="me-5">Join waitlist</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-handbag"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2m3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6z"
            />
          </svg>
          <NuxtLink
            v-if="!isLoggedIn"
            :to="{ name: 'SignIn' }"
            class="icon-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
              />
            </svg>
          </NuxtLink>

          <!-- User greeting when logged in -->
          <p v-else>Hi, {{ userName }}</p>
        </div>
        <div class="menu" @click.prevent="toggleNav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
            v-if="!navIsOpen"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
            v-else
          >
            <path
              d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
            />
          </svg>
        </div>
      </div>
    </nav>
    <aside :class="navIsOpen ? 'show' : ''">
      <div>
        <NuxtLink
          :to="{ name: 'index' }"
          class="aside__link"
          :class="isRoute('index') ? 'active' : ''"
          @click.prevent="toggleNav"
          >Home</NuxtLink
        >
        <NuxtLink
          :to="{ name: 'AboutUs' }"
          class="aside__link"
          :class="isRoute('AboutUs') ? 'active' : ''"
          @click.prevent="toggleNav"
          >About Us</NuxtLink
        >
        <NuxtLink
          :to="{ name: 'Products' }"
          class="aside__link"
          :class="isRoute('Products') ? 'active' : ''"
          @click.prevent="toggleNav"
          >Products</NuxtLink
        >
        <NuxtLink
          :to="{ name: 'Raffle' }"
          class="aside__link"
          :class="isRoute('Raffle') ? 'active' : ''"
          @click.prevent="toggleNav"
          >Raffle</NuxtLink
        >
        <NuxtLink
          :to="{ name: 'ContactUs' }"
          class="aside__link"
          :class="isRoute('ConactUs') ? 'active' : ''"
          @click.prevent="toggleNav"
          >Contact Us</NuxtLink
        >
      </div>
      <div>
        <button>Join waitlist</button>
      </div>
    </aside>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const route = useRoute();
const navIsOpen = ref(false);
const isLoggedIn = ref(false);
const userName = ref("");

const toggleNav = () => {
  navIsOpen.value = !navIsOpen.value;
};

const isRoute = (current) => {
  return current === route.name;
};

onMounted(() => {
  // Check if user is logged in (e.g., from local storage or an API)
  // Retrieve the first name from sessionStorage
  const firstname = sessionStorage.getItem("first_name");

  console.log(firstname); // Log the retrieved first name

  // Check if the first name exists and update the login state
  if (firstname) {
    isLoggedIn.value = true; // Set login state to true
    userName.value = firstname; // Set the user name to the retrieved first name
  }
});
</script>

<style scoped>
/* Add your styles here */
</style>

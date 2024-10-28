<template>
  <div>
    <NuxtLayout>
      <AppHeader v-if="shouldBeDisplayed()" />
      <NuxtPage />
      <AppFooter v-if="shouldBeDisplayed()" />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import "bootstrap/dist/css/bootstrap.min.css";
const route = useRoute();
console.log(route.name);

const shouldBeDisplayed = () => {
  return route.name !== "SignIn" && route.name !== "SignUp";
};
</script>

<style lang="scss">
@use "~/public/styles/index.scss";
</style>

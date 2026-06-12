<template>
  <div class="flex place-items-center place-content-center bg-gray-50 h-screen">
    <LoginDialog class="w-7/12" />
  </div>
</template>

<script setup lang="ts">
import LoginDialog from "~/components/dialogs/LoginDialog.vue";

definePageMeta({
  layout: "auth",
});
</script>

<style scoped></style>

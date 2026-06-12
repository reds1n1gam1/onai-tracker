<template>
  <div
    class="bg-white rounded-md p-4 shadow-md border-1 border-gray-200 flex flex-row justify-between"
  >
    <img class="w-30" src="/logo.png" alt="" />
    <p class="text-gray-500">
      {{ new Date().getFullYear() }} Onai Time Tracker. All rights reserved
    </p>

    <nav>
      <ul class="text-gray-500 flex flex-row gap-6">
        <RouterLink to="/help">Help</RouterLink>
        <RouterLink to="/privacy">Privacy</RouterLink>
        <RouterLink to="/terms-of-service">Terms of Service</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

<script setup lang="ts">
import AuthInfo from "~/components/auth/AuthInfo.vue";
</script>

<template>
  <div class="w-full h-screen">
    <div class="grid lg:grid-cols-2">
      <div>
        <auth-info />
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

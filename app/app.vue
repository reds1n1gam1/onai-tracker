<script setup lang="ts">
import "vue-sonner/style.css";
import { Toaster } from "vue-sonner";
</script>

<template>
  <div>
    <AppInitializer>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <Toaster />
    </AppInitializer>
  </div>
</template>

<script setup lang="ts">
import "vue-sonner/style.css";
import { Toaster } from "vue-sonner";

useSeoMeta({
  title: "Onai Tracker",
  description: "Simple time tracking and task prioritization app.",

  ogTitle: "Onai Tracker",
  ogDescription: "Simple time tracking and task prioritization app.",
  ogImage: "https://onaitracker.com/og-image.jpg",

  twitterCard: "summary_large_image",
  twitterTitle: "Onai Tracker",
  twitterDescription: "Simple time tracking and task prioritization app.",
  twitterImage: "https://onaitracker.com/og-image.jpg",
});
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

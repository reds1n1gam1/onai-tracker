<template>
  <MainBanner />
  <div class="container mx-auto px-4">
    <Features class="my-12" />
  </div>
  <LandingBanner />
  <div class="container mx-auto px-4">
    <HowItWorks class="my-12" />
    <SpecialBanner class="my-12" />
    <FAQ class="my-12" />
  </div>
</template>

<script setup lang="ts">
import FAQ from "~/components/landing/FAQ.vue";
import Features from "~/components/landing/Features.vue";
import HowItWorks from "~/components/landing/HowItWorks.vue";
import MainBanner from "~/components/landing/MainBanner.vue";
import SpecialBanner from "~/components/landing/SpecialBanner.vue";

definePageMeta({
  layout: "landing",
});
</script>

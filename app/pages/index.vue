<template>
  <MainBanner />
  <div class="container mx-auto px-4">
    <Features id="features" class="my-12" />
  </div>
  <LandingBanner id="banner" />
  <div class="container mx-auto px-4">
    <HowItWorks id="how-it-works" class="my-12" />
    <SpecialBanner class="my-12" />
    <FAQ id="faq" class="my-12" />
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

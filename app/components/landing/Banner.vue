<template>
  <div class="px-8 py-20 lg:px-0 lg:py-36 banner">
    <div class="container grid md:grid-cols-2 sm:grid-cols-1 mx-auto">
      <div class="flex flex-col gap-6 items-start">
        <LandingLabel
          palette="default"
          text="Smarter time tracking. Better priorities"
        >
          <IconSparkles2Filled />
        </LandingLabel>

        <div class="flex gap-2 flex-col">
          <h1 class="text-3xl lg:text-5xl font-bold">Work smarter</h1>
          <h1 class="text-3xl lg:text-5xl font-bold">
            Focus on <span class="accent-text">what matters</span>
          </h1>
        </div>
        <h2 class="text-lg lg:text-xl w-8/12">
          Priority Time Tracker helps you organize tasks, track work sessions,
          and automatically understand what deserves your attention next
        </h2>
        <div class="flex flex-col lg:flex-row gap-4">
          <Button
            @click="openRegistration()"
            size="lg"
            class="cursor-pointer text-lg p-6 font-bold"
            >Start tracking time free</Button
          >
          <Button
            size="lg"
            variant="secondary"
            class="cursor-pointer font-bold p-6 text-lg"
            >See how it works</Button
          >
        </div>

        <div class="flex flex-row gap-2">
          <LandingLabel palette="outline" text="Free 14-day trial">
            <IconCircleCheckFilled />
          </LandingLabel>

          <LandingLabel palette="outline" text="No credit card required">
            <IconCircleCheckFilled />
          </LandingLabel>

          <LandingLabel palette="outline" text="Cancel anytime">
            <IconCircleCheckFilled />
          </LandingLabel>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconSparkles2Filled } from "@tabler/icons-vue";
import LandingLabel from "./ui/LandingLabel.vue";

const router = useRouter();

function openRegistration() {
  router.push("/registration");
}
</script>

<style scoped>
.accent-text {
  color: var(--primary);
}

.banner {
  background-image:
    linear-gradient(to right, #f6f8fd 41%, transparent 70%),
    url("/special-banner.jpg");
  background-size:
    cover,
    auto 140%;
  background-position:
    center,
    right center;
  background-repeat: no-repeat;
}
</style>

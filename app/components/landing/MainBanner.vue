<template>
  <div class="landing-banner">
    <Carousel
      :opts="{
        align: 'start',
        loop: true,
      }"
      :plugins="[
        Autoplay({
          delay: 3000,
        }),
      ]"
    >
      <CarouselContent>
        <CarouselItem v-for="(item, index) in bannerData" :key="index">
          <div
            :class="'px-8 py-20 lg:px-0 lg:py-36 slide slide--' + (index + 1)"
          >
            <div class="container grid md:grid-cols-2 sm:grid-cols-1 mx-auto">
              <div class="flex flex-col gap-6 items-start">
                <LandingLabel
                  palette="default"
                  text="Smarter time tracking. Better priorities"
                >
                  <IconSparklesFilled />
                </LandingLabel>

                <div class="flex gap-2 flex-col">
                  <h1 class="text-3xl lg:text-6xl font-bold">Track you time</h1>
                  <h1 class="text-3xl lg:text-6xl font-bold">
                    {{ item.title }}
                    <span class="accent-text">{{ item.titleAccent }}</span>
                  </h1>
                </div>
                <h2 class="text-lg lg:text-xl">
                  {{ item.text }}
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

                <div class="flex flex-col lg:flex-row gap-2">
                  <LandingLabel palette="outline" text="Free 14-day trial">
                    <IconCircleCheckFilled />
                  </LandingLabel>

                  <LandingLabel
                    palette="outline"
                    text="No credit card required"
                  >
                    <IconCircleCheckFilled />
                  </LandingLabel>

                  <LandingLabel palette="outline" text="Cancel anytime">
                    <IconCircleCheckFilled />
                  </LandingLabel>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import Button from "../ui/button/Button.vue";
import LandingLabel from "./ui/LandingLabel.vue";
import { IconSparklesFilled, IconCircleCheckFilled } from "@tabler/icons-vue";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";

type BannerData = {
  title?: string;
  titleAccent?: string;
  text?: string;
};

const router = useRouter();

const bannerData: Ref<BannerData[]> = ref([
  {
    title: "Focus on",
    titleAccent: "what matters",
    text: "Priority Time Tracker helps you organize tasks, track work sessions, and automatically understand what deserves your attention next",
  },
  {
    title: "Your next task,",
    titleAccent: "automatically prioritized",
    text: "No more guessing what deserves your attention. Let the system recommend the next best task based on your goals and priorities.",
  },
  {
    title: "See exactly where your",
    titleAccent: "time goes",
    text: "From daily sessions to long-term reports, gain complete visibility into your productivity and build better work habits over time.",
  },
]);

import Autoplay from "embla-carousel-autoplay";

function openRegistration() {
  router.push("/registration");
}
</script>

<style scoped lang="scss">
.accent-text {
  color: var(--primary);
}

.slide {
  background-size:
    cover,
    auto 100%;
  background-position:
    center,
    right center;
  background-repeat: no-repeat;

  &--1 {
    background-image:
      linear-gradient(to right, #f6f8fd 54%, transparent 80%),
      url("/banner-1.jpg");
  }

  &--2 {
    background-image:
      linear-gradient(to right, #f6f8fd 54%, transparent 80%),
      url("/banner-2.jpg");
  }

  &--3 {
    background-image:
      linear-gradient(to right, #f6f8fd 54%, transparent 80%),
      url("/banner-3.jpg");
  }
}
</style>

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
        <CarouselItem>
          <div class="py-36 slide slide--1">
            <div class="container grid md:grid-cols-2 sm:grid-cols-1 mx-auto">
              <div class="flex flex-col gap-6 items-start">
                <LandingLabel
                  palette="default"
                  text="Smarter time tracking. Better priorities"
                >
                  <IconSparklesFilled />
                </LandingLabel>

                <div class="flex gap-2 flex-col">
                  <h1 class="text-6xl font-bold">Track you time</h1>
                  <h1 class="text-6xl font-bold">
                    Focus on <span class="accent-text">what matters</span>
                  </h1>
                </div>
                <h2 class="text-xl">
                  Priority Time Tracker helps you organize tasks, track work
                  sessions, and automatically understand what deserves your
                  attention next
                </h2>
                <div class="flex flex-row gap-4">
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
        <CarouselItem>
          <div class="py-36 slide slide--2">
            <div class="container grid md:grid-cols-2 sm:grid-cols-1 mx-auto">
              <div class="flex flex-col gap-6 items-start">
                <LandingLabel
                  palette="default"
                  text="Smarter time tracking. Better priorities"
                >
                  <IconSparklesFilled />
                </LandingLabel>

                <div class="flex gap-2 flex-col">
                  <h1 class="text-6xl font-bold">
                    Your next task,
                    <span class="accent-text">automatically prioritized</span>
                  </h1>
                </div>
                <h2 class="text-xl">
                  No more guessing what deserves your attention. Let the system
                  recommend the next best task based on your goals and
                  priorities.
                </h2>
                <div class="flex flex-row gap-4">
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
        <CarouselItem>
          <div class="py-36 slide slide--3">
            <div class="container grid md:grid-cols-2 sm:grid-cols-1 mx-auto">
              <div class="flex flex-col gap-6 items-start">
                <LandingLabel
                  palette="default"
                  text="Smarter time tracking. Better priorities"
                >
                  <IconSparklesFilled />
                </LandingLabel>

                <div class="flex gap-2 flex-col">
                  <h1 class="text-6xl font-bold">
                    See exactly where your
                    <span class="accent-text">time goes</span>
                  </h1>
                </div>
                <h2 class="text-xl">
                  From daily sessions to long-term reports, gain complete
                  visibility into your productivity and build better work habits
                  over time.
                </h2>
                <div class="flex flex-row gap-4">
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

const router = useRouter();

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

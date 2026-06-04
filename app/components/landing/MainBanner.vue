<template>
    <div class="landing-banner grid md:grid-cols-2 sm:grid-cols-1">
        <div class="flex flex-col gap-6 items-start">
            <LandingLabel palette="default" text="Smarter time tracking. Better priorities">
                <IconSparklesFilled></IconSparklesFilled>
            </LandingLabel>

            <div class="flex gap-2 flex-col">
                <h1 class="text-6xl font-bold">Track you time</h1>
                <h1 class="text-6xl font-bold">Focus on <span class="accent-text">what matters</span></h1>
            </div>
            <h2 class="text-xl">Priority Time Tracker helps you organize tasks, track work sessions, and
                automatically understand what deserves your attention next</h2>
            <div class="flex flex-row gap-4">
                <Button size="lg" class=" text-lg p-6 font-bold">Start tracking time free</Button>
                <Button size="lg" variant="secondary" class=" font-bold p-6 text-lg">See how it works</Button>
            </div>
        </div>

        <div>
            <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                alt="Photo by Drew Beamer" fill
                class="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale">
        </div>


    </div>
</template>

<script setup lang="ts">
import Button from '../ui/button/Button.vue';
import LandingLabel from './ui/LandingLabel.vue';
import { IconSparklesFilled } from '@tabler/icons-vue';
</script>

<style scoped>
.accent-text {
    color: var(--primary);
}
</style>
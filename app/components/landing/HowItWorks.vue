<template>
  <div>
    <div class="flex flex-col gap-6 items-center text-center lg:text-left">
      <LandingLabel text="How it works" palette="default">
        <IconRocket />
      </LandingLabel>

      <p class="text-2xl lg:text-5xl font-bold">
        A simple process for real progres
      </p>
      <p class="text-lg lg:text-xl">
        Three easy steps to plan your work, track your time and achieve more
      </p>
    </div>

    <div class="flex flex-col lg:flex-row gap-4 items-center">
      <LandingStep
        :number="1"
        title="Add tasks"
        text="Create tasks with priorities, deadlines, and time estimates to organize everything you need to work on."
      >
        <IconListCheck size="40" />
      </LandingStep>
      <IconArrowNarrowRightDashed size="48" class="step-arrow" />
      <LandingStep
        :number="2"
        title="Track time"
        text="Start a focus session, track your progress, and keep your work connected to the right task"
      >
        <IconStopwatch size="40" />
      </LandingStep>
      <IconArrowNarrowRightDashed size="48" class="step-arrow" />
      <LandingStep
        :number="3"
        title="Work on the top priority"
        text="Follow the recommended task and focus on the work that matters most right now"
      >
        <IconTrendingUp size="40" />
      </LandingStep>
    </div>
  </div>
</template>

<script setup lang="ts">
import LandingLabel from "./ui/LandingLabel.vue";
import {
  IconRocket,
  IconListCheck,
  IconStopwatch,
  IconTrendingUp,
  IconArrowNarrowRightDashed,
} from "@tabler/icons-vue";
import LandingStep from "./ui/LandingStep.vue";
</script>

<style scoped lang="scss">
.step-arrow {
  color: var(--primary);
}
</style>

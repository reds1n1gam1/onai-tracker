<template>
  <div>
    <div class="flex flex-col gap-6 items-center">
      <LandingLabel text="Pricing" palette="default">
        <IconReceiptFilled />
      </LandingLabel>

      <p class="text-5xl font-bold">Simple pricing for every stage</p>
      <p class="text-xl">
        Choose the plan that fits your workflow and helps you stay focused
      </p>
    </div>

    <div class="grid grid-cols-3 items-start justify-start gap-6 mt-12">
      <PriceCard
        v-for="sub in subscriptions"
        :price-item="sub"
        :key="sub.type"
      ></PriceCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconReceiptFilled } from "@tabler/icons-vue";
import LandingLabel from "./ui/LandingLabel.vue";
import PriceCard from "./ui/PriceCard.vue";

const subscriptions: Ref<PriceItem[]> = ref([
  {
    type: SubscriptionTypes.FREE,
    title: "Free",
    price: 0,
    description:
      "A simple plan for personal task tracking, focus sessions, and basic prioritization",
    buttonText: "Get started free",
    features: [
      "Basic task management",
      "Built-in focus timer",
      "Smart priority scoring",
      "Recommended next task",
      "Daily time summary",
      "Up to 3 active projects",
    ],
  },
  {
    type: SubscriptionTypes.PRO,
    title: "PRO",
    price: 12,
    description:
      "Advanced tools for managing priorities, tracking deep work, and understanding where your time goes",
    buttonText: "Start 14-day trial",
    hintText: "No credit card required",
    features: [
      "Unlimited tasks",
      "Unlimited projects",
      "Advanced priority scoring",
      "Daily and weekly reports",
      "Task history and time insights",
      "Custom workday settings",
      "Priority calculation preferences",
    ],
  },
  {
    type: SubscriptionTypes.TEAM,
    title: "Team",
    price: 29,
    description:
      "A shared workspace for teams that want to align priorities, track progress, and stay focused together",
    buttonText: "Start 14-day trial",
    hintText: "No credit card required",
    features: [
      "Everything in Pro",
      "Shared team workspace",
      "Team task management",
      "Member activity overview",
      "Shared reports",
      "Role-based access",
      "Priority visibility across the team",
    ],
  },
]);
</script>

<style scoped></style>

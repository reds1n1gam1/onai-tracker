<template>
  <div class="grid gap-6">
    <!-- <div class="test">
            <ul v-if="users?.length">
                <li v-for="user in users" :key="user.id">{{ user.name }} ({{ user.email }})</li>
            </ul>
        </div> -->

    <DashboardTimer />

    <DashboardQuickTaskAdd />

    <div class="grid lg:grid-cols-4 gap-6">
      <DashboardTodayTasksList class="lg:col-span-3" />

      <DashboardRecommendedTask />
    </div>

    <Alert>
      <IconInfoCircle />
      <AlertTitle>Stay focused on your most important work</AlertTitle>
      <AlertDescription>
        Track active tasks, monitor time spent, and quickly see what deserves
        your attention next.
      </AlertDescription>
    </Alert>
  </div>
</template>

<script setup lang="ts">
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";

definePageMeta({
  middleware: ["authenticated"],
});

useSeoMeta({
  title: "Dashboard | Onai Tracker",
  description: "Track your tasks and focus sessions.",
});
</script>

<style lang="scss" scoped></style>

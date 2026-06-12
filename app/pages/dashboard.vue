<template>
  <div class="grid gap-6">
    <!-- <div class="test">
            <ul v-if="users?.length">
                <li v-for="user in users" :key="user.id">{{ user.name }} ({{ user.email }})</li>
            </ul>
        </div> -->

    <DashboardTimer />

    <DashboardQuickTaskAdd />

    <div class="grid grid-cols-4 gap-6">
      <DashboardTodayTasksList class="col-span-3" />

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
// const { data: users } = await useFetch('/api/users')

definePageMeta({
  middleware: ["authenticated"],
});
</script>

<style lang="scss" scoped></style>

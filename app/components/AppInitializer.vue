<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { useTasksStore } from "~/store/useTaskStore";
import { useTimerStore } from "~/store/useTimerStore";

const timerStore = useTimerStore();
const tasksStore = useTasksStore();

const { loggedIn } = useUserSession();

onMounted(async () => {
  if (!loggedIn.value) return;

  await Promise.all([
    timerStore.fetchActiveSession(),
    tasksStore.fetchAllTasks(),
  ]);
});
</script>

<style scoped></style>

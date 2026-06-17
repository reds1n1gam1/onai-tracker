<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { useIntervalFn } from "@vueuse/core";
import { useProjectsStore } from "~/store/useProjectStore";
import { useTasksStore } from "~/store/useTaskStore";
import { useTimerStore } from "~/store/useTimerStore";

const clearIntervalFn: Ref<Function | undefined> = ref();

const timerStore = useTimerStore();
const tasksStore = useTasksStore();
const projectsStore = useProjectsStore();

const { loggedIn } = useUserSession();

onMounted(async () => {
  if (!loggedIn.value) return;

  startTimer();

  await Promise.all([
    timerStore.fetchActiveSession(),
    tasksStore.fetchAllTasks(),
    projectsStore.fetchAllProjects(),
  ]);
});

function startTimer() {
  const { pause } = useIntervalFn(() => {
    if (timerStore.currentState === "running") {
      if (timerStore.startedAt) {
        const nowDate = new Date();

        const elapsedTime =
          (nowDate.getTime() - timerStore.startedAt.getTime()) / 1000;
        timerStore.setElapsedTimeInSeconds(elapsedTime);
      }
    }
  }, 1000);

  clearIntervalFn.value = pause;
}

watch(
  () => timerStore.currentState,
  async (curr) => {
    if (curr === "pause" && clearIntervalFn.value) {
      clearIntervalFn.value();
    }
  },
);
</script>

<style scoped></style>

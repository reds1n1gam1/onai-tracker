<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { useTimerStore } from "~/store/useTimerStore";

const timerStore = useTimerStore();

const { loggedIn } = useUserSession();

onMounted(async () => {
  if (!loggedIn.value) return;

  await Promise.all([timerStore.fetchActiveSession()]);
});
</script>

<style scoped></style>

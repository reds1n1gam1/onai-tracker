<template>
  <div
    class="flex flex-row justify-center items-center py-2 px-3 bg-blue-100 text-blue-500 rounded-md gap-2 font-semibold"
  >
    <template v-if="state.toLowerCase() === TimerState.RUNNING">
      <IconLoader class="animate-spin" />
      <p>Timer is running</p>
    </template>
    <template v-else-if="state.toLowerCase() === TimerState.PAUSED">
      <IconPlayerPauseFilled />
      <p>Timer is paused</p>
    </template>
    <template v-else-if="state.toLowerCase() === TimerState.NOT_STARTED">
      <IconClockStop />
      <p>Timer is not started</p>
    </template>
  </div>
</template>

<script setup lang="ts">
import {
  IconLoader,
  IconPlayerPauseFilled,
  IconClockStop,
} from "@tabler/icons-vue";

defineProps<{
  state: string;
}>();
</script>

<style scoped></style>

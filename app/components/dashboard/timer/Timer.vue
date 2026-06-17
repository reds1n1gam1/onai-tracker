<template>
  <div
    class="bg-white rounded-md p-4 shadow-md border-1 border-gray-200 flex flex-col justify-start items-center gap-4"
  >
    <State :state="currentTimerState" />

    <div class="flex flex-row justify-center items-start">
      <div class="flex flex-col justify-start items-center w-20">
        <p
          class="text-center text-7xl font-semibold"
          :class="{
            'text-blue-500': store.currentState === 'running',
            'text-gray-500': store.currentState !== 'paused',
          }"
        >
          {{ secondsToDate(elapsedTime) || "00:00:00" }}
        </p>
        <div
          class="flex flex-row justify-between items-center gap-22 font-medium text-gray-400"
        >
          <p>HRS</p>
          <p>MINS</p>
          <p>SECS</p>
        </div>
      </div>
    </div>

    <div class="info flex flex-col justify-start items-center">
      <p class="text-center text-xl font-semibold text-gray-700">
        {{ store.taskTitle || "Title" }}
      </p>

      <div class="flex flex-row gap-1 text-lg text-gray-400 text-center">
        <p>{{ store.taskDescription || "Description" }}</p>
        <!-- <p>/</p>
        <p>Hell hot</p> -->
      </div>
    </div>

    <hr class="w-6/12" />

    <div class="grid grid-cols-3 gap-6">
      <ControlButton :type="TimerButtonStates.PLAY" />
      <ControlButton :type="TimerButtonStates.PAUSE" />
      <ControlButton @click="stopTimer" :type="TimerButtonStates.STOP" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTimerStore } from "~/store/useTimerStore.js";
import ControlButton from "./ControlButton.vue";
import State from "./State.vue";
import { useIntervalFn } from "@vueuse/core";

const store = useTimerStore();

const currentTimerState = ref("not_started");
const timerPause: Ref<Function | undefined> = ref();
const taskStartedAt: Ref<Date | undefined> = ref();

const elapsedTime: Ref<number> = ref(0);

function startTimer() {
  const { pause } = useIntervalFn(() => {
    if (currentTimerState.value === "running") {
      if (taskStartedAt.value) {
        const nowDate = new Date();

        elapsedTime.value =
          (nowDate.getTime() - taskStartedAt.value.getTime()) / 1000;
      }
    }
  }, 1000);

  timerPause.value = pause;
}

onMounted(() => {
  startTimer();
});

watch(
  () => store.currentState,
  async (curr) => {
    currentTimerState.value = store.getCurrentState;

    if (curr === "pause" && timerPause.value) {
      timerPause.value();
    } else if (curr === "running") {
      taskStartedAt.value = store.getStartedAt;
    }
  },
);

async function stopTimer() {
  await store.stopActiveSession();

  elapsedTime.value = 0;
}
</script>

<style scoped></style>

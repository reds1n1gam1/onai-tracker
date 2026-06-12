<template>
  <div
    class="bg-white rounded-md p-4 shadow-md border-1 border-gray-200 flex flex-col justify-start items-center gap-4"
  >
    <State :state="TimerState.PAUSED" />

    <div class="flex flex-row justify-center items-start">
      <div class="flex flex-col justify-start items-center w-20">
        <p class="text-center text-7xl text-blue-500 font-semibold">
          {{ new Date().getHours() }}
        </p>
        <p
          class="flex flex-row justify-between items-center gap-22 font-medium text-gray-400"
        >
          HRS
        </p>
      </div>

      <div class="text-center text-7xl text-blue-500 font-semibold">:</div>

      <div class="flex flex-col justify-start items-center w-20">
        <p class="text-center text-7xl text-blue-500 font-semibold">
          {{ new Date().getMinutes() }}
        </p>
        <p
          class="flex flex-row justify-between items-center gap-22 font-medium text-gray-400"
        >
          MINS
        </p>
      </div>

      <div class="text-center text-7xl text-blue-500 font-semibold">:</div>

      <div class="flex flex-col justify-start items-center w-20">
        <p class="text-center text-7xl text-blue-500 font-semibold">
          {{ new Date().getSeconds() }}
        </p>
        <p
          class="flex flex-row justify-between items-center gap-22 font-medium text-gray-400"
        >
          SECS
        </p>
      </div>
    </div>

    <div class="info">
      <p class="text-center text-xl font-semibold text-gray-700">
        Design system updates
      </p>

      <div class="flex flex-row gap-1 text-lg text-gray-400">
        <p>Product design project</p>
        <p>/</p>
        <p>Hell hot</p>
      </div>
    </div>

    <hr class="w-6/12" />

    <div class="grid grid-cols-3 gap-6">
      <ControlButton :active="true" :type="TimerButtonStates.PLAY" />
      <ControlButton :type="TimerButtonStates.PAUSE" />
      <ControlButton :type="TimerButtonStates.RESET" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ControlButton from "./ControlButton.vue";
import State from "./State.vue";
</script>

<style scoped></style>

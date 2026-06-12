<template>
  <div
    class="py-4 px-10 border-1 border-grey-300 rounded-md flex flex-col gap-2 justify-start items-center cursor-pointer"
    :class="{
      'bg-white text-gray-500': !active,
      'bg-blue-500 text-white': active,
    }"
  >
    <component :is="buttonsData.get(type)?.icon" size="28" />
    <p>{{ buttonsData.get(type)?.text }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Icon } from "@tabler/icons-vue";
import {
  IconPlayerPlayFilled,
  IconPlayerPauseFilled,
  IconReload,
} from "@tabler/icons-vue";

type ButtonData = {
  text: string;
  icon: Icon;
};

defineProps<{
  type: TimerButtonStates;
  active?: boolean;
}>();

const buttonsData: Ref<Map<TimerButtonStates, ButtonData>> = ref(new Map());

buttonsData.value.set(TimerButtonStates.PLAY, {
  text: "Play",
  icon: IconPlayerPlayFilled,
});
buttonsData.value.set(TimerButtonStates.PAUSE, {
  text: "Pause",
  icon: IconPlayerPauseFilled,
});
buttonsData.value.set(TimerButtonStates.RESET, {
  text: "Reset",
  icon: IconReload,
});
</script>

<style scoped></style>

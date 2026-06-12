<template>
  <div
    class="px-4 py-6 bg-white rounded-md border-1 border-gray-200 shadow-md flex flex-row justify-start items-center gap-4"
  >
    <div
      :class="'rounded-full bg-' + color + '-200 text-' + color + '-600 p-2'"
    >
      <slot name="icon"></slot>
    </div>
    <div>
      <p class="text-sm text-gray-400">
        <slot name="title"></slot>
      </p>
      <p class="text-xl font-semibold">
        <slot name="value"></slot>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  color?: string;
}>();
</script>

<style scoped></style>

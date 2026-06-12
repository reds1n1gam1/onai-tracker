<template>
  <div
    class="status capitalize rounded-md p-1 text-center text-xs"
    :class="{
      'bg-green-200 text-green-900': priority === Priority.LOW,
      'bg-yellow-200 text-yellow-900': priority === Priority.MEDIUM,
      'bg-orange-200 text-orange-900': priority === Priority.HIGH,
      'bg-red-200 text-red-900': priority === Priority.CRITICAL,
    }"
  >
    {{ priority }}
  </div>
</template>

<script setup lang="ts">
defineProps<{ priority?: string }>();
</script>

<style scoped></style>

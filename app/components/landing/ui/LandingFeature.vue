<template>
  <div
    class="feature flex flex-row shadow-md p-6 rounded-lg items-center gap-2"
  >
    <div
      class="feature__icon flex-shrink-0 rounded-full flex items-center justify-center w-20 h-20"
    >
      <slot></slot>
    </div>
    <div
      class="feature__content flex flex-col justify-center items-start gap-2"
    >
      <p class="font-bold text-lg">{{ title }}</p>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  text: string;
}>();
</script>

<style scoped lang="scss">
.feature {
  --icon-bg-color: oklch(0.97 0.01 264.72);

  &__icon {
    color: var(--primary);
    background-color: var(--icon-bg-color);
  }
}
</style>

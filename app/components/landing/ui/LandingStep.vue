<template>
  <div
    class="step flex flex-row p-6 pl-10 rounded-lg items-center gap-2 relative"
  >
    <div
      class="step__index absolute left-2 top-5 w-8 h-8 flex items-center justify-center rounded-full font-semibold"
    >
      {{ number }}
    </div>

    <div
      class="step__icon flex-shrink-0 rounded-full flex items-center justify-center w-20 h-20"
    >
      <slot></slot>
    </div>

    <div class="step__content flex flex-col justify-center items-start gap-2">
      <p class="font-bold text-lg">{{ title }}</p>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  number?: number;
  title?: string;
  text?: string;
}>();
</script>

<style scoped lang="scss">
.step {
  --icon-bg-color: oklch(0.97 0.01 264.72);

  &__index {
    background-color: var(--primary);
    color: #fff;
  }

  &__icon {
    color: var(--primary);
    background-color: var(--icon-bg-color);
  }
}
</style>

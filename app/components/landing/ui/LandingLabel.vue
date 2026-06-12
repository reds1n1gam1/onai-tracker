<template>
  <div
    :class="
      'label label--' + palette + ' flex flex-row gap-3 py-2 px-4 rounded-full'
    "
  >
    <div class="label__icon">
      <slot></slot>
    </div>
    <p class="label__text">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
type LabelPallete = "default" | "outline";

defineProps<{
  text: string;
  palette?: LabelPallete;
}>();
</script>

<style scoped lang="scss">
.label {
  background-color: var(--label-background-color);
  font-weight: var(--label-font-weight);

  &__icon {
    color: var(--label-icon-color);
  }

  &__text {
    color: var(--label-color);
  }

  &--default {
    --label-color: var(--primary);
    --label-icon-color: var(--primary);
    --label-background-color: var(--primary-foreground);
    --label-font-weight: 600;
  }

  &--outline {
    --label-color: var(--primary-text-color);
    --label-icon-color: var(--primary);
    --label-background-color: initial;
    --label-font-weight: 300;
  }
}
</style>

<template>
    <div :class="'label label--' + palette + ' flex flex-row gap-3 py-2 px-4 rounded-full'">
        <div class="label__icon">
            <slot></slot>
        </div>
        <p class="label__text font-semibold"> {{ text }} </p>
    </div>
</template>

<script setup lang="ts">
type LabelPallete = "default" | 'outline';

defineProps<{
    text: string
    palette?: LabelPallete
}>()
</script>

<style scoped lang="scss">
.label {
    &--default {
        color: var(--primary);
        background-color: var(--primary-foreground);
    }
}
</style>
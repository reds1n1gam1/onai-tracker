<template>
    <div
        class="special-banner rounded-md bg-gradient-to-r from-blue-500 via-blue-600 to-blue-400 px-40 py-4 flex flex-row items-center justify-between">
        <div class="special-banner__content">
            <p class="text-2xl font-semibold">Ready to take control of your time ?</p>
            <p class="text-lg">Start tracking, get smarter recommendations, and achieve more every day</p>
        </div>
        <div class="special-banner__actions flex flex-col items-center gap-2">
            <Button size="lg" variant="secondary" class="special-banner__button text-lg font-bold">Start your free trial
                <IconArrowNarrowRight size="24" />
            </Button>
            <p class="special-banner__hint text-sm">No credit card required</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '../ui/button/Button.vue';
import { IconArrowNarrowRight } from '@tabler/icons-vue';

</script>

<style scoped lang="scss">
.special-banner {
    &__content {
        color: var(--border)
    }

    &__button {
        color: var(--primary)
    }

    &__hint {
        color: var(--input)
    }
}
</style>
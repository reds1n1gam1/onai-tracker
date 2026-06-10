<template>
    <div class="flex flex-row justify-center items-center py-2 px-3 bg-blue-100 text-blue-500 rounded-md gap-2 font-semibold">
        <template v-if="state === TimerState.RUNNING">
            <IconLoader class="animate-spin"/>
            <p>Timer is running</p>
        </template>
        <template v-else-if="state === TimerState.PAUSED">
            <IconPlayerPauseFilled/>
            <p>Timer is paused</p>
        </template>
    </div>
</template>

<script setup lang="ts">
import { IconLoader, IconPlayerPauseFilled } from '@tabler/icons-vue';

defineProps<{
    state: TimerState
}>()
</script>

<style scoped></style>
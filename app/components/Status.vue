<template>
    <div class="status capitalize rounded-md p-1 text-center text-xs" :class="{
        'bg-gray-200 text-gray-900': status === TaskStatus.TODO,
        'bg-blue-200 text-blue-900': status === TaskStatus.IN_PROGRESS,
        'bg-green-200 text-green-900': status === TaskStatus.DONE,
    }">
        {{status}}
    </div>
</template>

<script setup lang="ts">
defineProps<{ status?: string }>()
</script>

<style scoped></style>
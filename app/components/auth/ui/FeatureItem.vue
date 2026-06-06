<template>
    <div class="feature flex flex-row gap-6 items-start justify-content-start">
        <div class="feature__icon w-12 h-12 bg-blue-100 rounded-md text-blue-500 flex place-items-center place-content-center">
            <slot></slot>
        </div>
        <div class="feature__content">
            <p class="font-semibold"> {{  title  }} </p>
            <p class="text-gray-500"> {{  text }} </p>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        title?: string, 
        text?: string,
    }>()
</script>

<style scoped lang="scss">

</style>
<script setup lang="ts">
</script>

<template>

    <div class="flex w-full">
        <div>
            <app-sidebar />
        </div>

        <div class="flex-1 bg-gray-100">
            <app-header />

            <div class="container mx-auto p-6 flex-1 grid gap-6">
                <slot />
                <app-footer />
            </div>
        </div>

    </div>
</template>
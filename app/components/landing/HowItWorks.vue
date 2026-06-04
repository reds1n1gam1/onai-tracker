<template>
    <div>
        <div class="flex flex-col gap-4 items-center">
            <LandingLabel text="How it works" palette="default">
                <IconRocket />
            </LandingLabel>

            <p class="text-5xl font-bold">A simple process for real progres</p>
            <p class="text-xl ">Three easy steps to plan your work, track your time and achieve more</p>

        </div>
    </div>
</template>

<script setup lang="ts">
import LandingLabel from './ui/LandingLabel.vue';
import { IconRocket } from '@tabler/icons-vue';
</script>

<style scoped></style>
<template>
    <div>

        <div class="flex flex-col gap-6 items-center">
            <LandingLabel text="FAQ" palette="default">
                <IconHelpOctagonFilled />
            </LandingLabel>

            <p class="text-5xl font-bold">Frequently asked questions</p>
            <p class="text-xl ">Answers to the most common question from Priority Time Tracker users</p>

        </div>
    </div>
</template>

<script setup lang="ts">
import { IconHelpOctagonFilled } from '@tabler/icons-vue';
import LandingLabel from './ui/LandingLabel.vue';
</script>

<style scoped></style>
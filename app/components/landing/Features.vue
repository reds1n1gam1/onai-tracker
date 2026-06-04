<template>
    <div class="features">
        <div class="features__header flex flex-col gap-4 items-center">
            <LandingLabel text="Features" palette="default">
                <IconStarFilled />
            </LandingLabel>

            <p class="text-5xl font-bold">Everything you need to stay focused</p>
            <p class="text-xl ">Powerfull features designed to help you prioritize, track, and make consistent progress on the work that
                matters most</p>

        </div>

        <div class="features__item">Track time</div>
        <div class="features__item">Prioritize tasks</div>
        <div class="features__item">Check statistics</div>
    </div>
</template>

<script setup lang="ts">
import LandingLabel from './ui/LandingLabel.vue';
import { IconStarFilled } from '@tabler/icons-vue';

</script>

<style scoped></style>
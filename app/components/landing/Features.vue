<template>
    <div class="features">
        <div class="features__header flex flex-col gap-4 items-center">
            <LandingLabel text="Features" palette="default">
                <IconStarFilled />
            </LandingLabel>

            <p class="text-5xl font-bold">Everything you need to stay focused</p>
            <p class="text-xl ">Powerfull features designed to help you prioritize, track, and make consistent progress
                on the work that
                matters most</p>

        </div>

        <div class="features__list grid grid-cols-4 gap-4 mt-12">
            <LandingFeature title="Smart prioritization"
                text="Automatically score tasks based on priority, urgency, effort, and progress, so you always know what deserves your attention first.">
                <IconCurrentLocation size="40" />
            </LandingFeature>
            <LandingFeature title="Built-in Timer"
                text="Track focused work sessions directly from your tasks without switching between different tools or losing context.">
                <IconStopwatch size="40" />
            </LandingFeature>
            <LandingFeature title="Recommended Next Task"
                text="Get a clear suggestion for what to work on next based on deadlines, workload, priority, and unfinished progress.">

                <IconSparkles size="40" />
            </LandingFeature>
            <LandingFeature title="Daily reports"
                text="See how your time was spent, what you completed, and where your focus went throughout the day.">
                <IconChartBar size="40" />

            </LandingFeature>
        </div>

    </div>
</template>

<script setup lang="ts">
import LandingFeature from './ui/LandingFeature.vue';
import LandingLabel from './ui/LandingLabel.vue';
import { IconStarFilled, IconCurrentLocation, IconStopwatch, IconSparkles, IconChartBar } from '@tabler/icons-vue';

</script>

<style scoped></style>
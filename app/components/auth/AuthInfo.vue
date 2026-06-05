<template>
    <div class="info w-full h-screen p-16">
            <img class="footer__logotype w-80 mb-12" src="/logo.png" alt="">

            <div class="info__content flex flex-col gap-8 justify-items-start content-start">
                <p class="w-7/12 text-5xl font-bold">Focus on what matters. <span class="text-blue-500">Get more done.</span></p>
                <p class="w-8/12 text-lg text-gray-500">Intelligent time tracking and priority management that helps you focus deeply and achieve your goals
                </p>

                <div class="info__features flex flex-col gap-6">
                    <FeatureItem title="Prioritize with Confidence"
                        text="Smart scoring helps you focus on high-impact tasks.">
                        <IconTargetArrow stroke={2} />
                    </FeatureItem>

                    <FeatureItem title="Track Time Effortlessly"
                        text="Built-in timer and analytics to understand your focus.">
                        <IconClockHour10 />
                    </FeatureItem>

                    <FeatureItem title="Make Progress Visible"
                        text="Beautiful reports that help you improve every day.">
                        <IconChartDots2Filled />
                    </FeatureItem>
                </div>
            </div>
    </div>
</template>

<script setup lang="ts">
import FeatureItem from './ui/FeatureItem.vue';
import { IconTargetArrow, IconClockHour10, IconChartDots2Filled } from '@tabler/icons-vue';

</script>

<style scoped lang="scss">
.info {
    background-image: url('/auth-background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
}
</style>
<template>
    <div class="container mx-auto px-4">
        <MainBanner />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <span> {{ randomEntry([1, 2, 3]) }} </span>
    </div>
</template>

<script setup lang="ts">
import FAQ from '~/components/landing/FAQ.vue';
import Features from '~/components/landing/Features.vue';
import HowItWorks from '~/components/landing/HowItWorks.vue';
import MainBanner from '~/components/landing/MainBanner.vue';
import Pricing from '~/components/landing/Pricing.vue';

definePageMeta({
    layout: 'landing',
})</script>
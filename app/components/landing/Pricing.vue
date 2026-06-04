<template>
    <div>

        <div class="flex flex-col gap-6 items-center">
            <LandingLabel text="Pricing" palette="default">
                <IconReceiptFilled />
            </LandingLabel>

            <p class="text-5xl font-bold">Simple pricing for every stage</p>
            <p class="text-xl ">Choose the plan that fits your workflow and helps you stay focused</p>

        </div>
    </div>
</template>

<script setup lang="ts">
import { IconReceiptFilled } from '@tabler/icons-vue';
import LandingLabel from './ui/LandingLabel.vue';
</script>

<style scoped></style>
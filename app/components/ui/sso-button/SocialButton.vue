<template>
    <div class="social-button w-full flex flex-row justify-center align-items-center gap-4 border-2 border-gray-300 rounded-md p-2">
        <div class="social-button_icon">
            <IconBrandGoogle v-if="type === Socials.GOOGLE"/>
            <IconBrandGithubFilled  v-if="type === Socials.GITHUB"/>
        </div>
        <p class="social-button__text text-lg">Continue with <span class="capitalize">{{ type }}</span></p>
    </div>
</template>

<script setup lang="ts">
import { IconBrandGoogle, IconBrandGithubFilled } from '@tabler/icons-vue';

    defineProps<{
        type: Socials
    }>()
</script>

<style scoped>
    
</style>
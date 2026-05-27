<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue';

</script>

<template>
    <app-header />
    <p>Some default layout content shared across all pages</p>
    <slot />
    <app-footer />
</template>
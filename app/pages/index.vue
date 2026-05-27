<template>
    <div class="container mx-auto px-4">
        <landing-banner />
        <landing-features />
        <landing-benefits />
        <landing-action />
        <span> {{ randomEntry([1, 2, 3]) }} </span>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'landing',
})</script>
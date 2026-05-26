<template>
    <div>
        <h1>Index page</h1>
        <span> {{ randomEntry([1, 2, 3]) }} </span>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'landing',
})</script>
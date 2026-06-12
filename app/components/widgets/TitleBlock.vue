<template>
  <div class="flex flex-col items-start gap-3">
    <p class="text-2xl font-bold">
      <slot name="title"></slot>
    </p>

    <p class="text-lg text-gray-500">
      <slot name="description"></slot>
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

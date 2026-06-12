<template>
  <div class="flex flex-row items-start justify-between gap-3">
    <div class="flex flex-col items-start gap-3">
      <p class="text-2xl font-bold">
        <slot name="title"></slot>
      </p>

      <p class="text-lg text-gray-500">
        <slot name="description"></slot>
      </p>
    </div>

    <div class="flex flex-row">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

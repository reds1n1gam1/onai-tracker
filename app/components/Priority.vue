<template>
  <div>
    <Badge
      class="capitalize"
      v-if="priority === Priority.LOW"
      variant="outline"
      >{{ priority }}</Badge
    >

    <Badge
      class="capitalize"
      v-if="priority === Priority.MEDIUM"
      variant="secondary"
    >
      {{ priority }}
    </Badge>

    <Badge
      class="capitalize"
      v-if="priority === Priority.CRITICAL"
      variant="destructive"
    >
      {{ priority }}
    </Badge>

    <Badge class="capitalize" v-if="priority === Priority.HIGH">
      {{ priority }}
    </Badge>
  </div>
</template>

<script setup lang="ts">
import Badge from "./ui/badge/Badge.vue";

defineProps<{ priority?: string }>();
</script>

<style scoped></style>

<template>
  <div>
    <Badge class="capitalize" v-if="status === TaskStatus.TODO">{{
      status
    }}</Badge>

    <Badge
      class="capitalize"
      v-if="status === TaskStatus.IN_PROGRESS"
      variant="destructive"
    >
      {{ status }}
    </Badge>

    <Badge
      class="capitalize"
      v-if="status === TaskStatus.DONE"
      variant="secondary"
    >
      {{ status }}
    </Badge>
  </div>
</template>

<script setup lang="ts">
import Badge from "./ui/badge/Badge.vue";

defineProps<{ status?: string }>();
</script>

<style scoped></style>

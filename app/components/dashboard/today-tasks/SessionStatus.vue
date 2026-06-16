<template>
  <div>
    <Badge class="capitalize" v-if="status === TimerState.COMPLETED">{{
      status
    }}</Badge>

    <Badge
      class="capitalize"
      v-if="status === TimerState.RUNNING"
      variant="destructive"
    >
      {{ status }}
    </Badge>

    <Badge
      class="capitalize"
      v-if="status === TimerState.PAUSED"
      variant="secondary"
    >
      {{ status }}
    </Badge>
  </div>
</template>

<script setup lang="ts">
import Badge from "~/components/ui/badge/Badge.vue";

defineProps<{ status?: string }>();
</script>

<style scoped></style>

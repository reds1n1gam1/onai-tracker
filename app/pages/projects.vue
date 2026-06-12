<template>
  <div class="container bg-white rounded-md px-4 py-6 grid gap-4">
    <WidgetsTitleBlock>
      <template v-slot:title>Projects</template>
      <template v-slot:description
        >Create projects to group related tasks, track progress, and understand
        where your time is being spent.</template
      >
    </WidgetsTitleBlock>

    <Alert>
      <IconInfoCircle />
      <AlertTitle>How projects work</AlertTitle>
      <AlertDescription>
        Projects group related tasks together. Track time, monitor progress, and
        organize work by client, team, or personal goal.
      </AlertDescription>
    </Alert>
  </div>
</template>

<script setup lang="ts">
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { IconInfoCircle } from "@tabler/icons-vue";
</script>

<style scoped></style>

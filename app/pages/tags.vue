<template>
  <div class="container bg-white rounded-md px-4 py-6 grid gap-4">
    <WidgetsTitleBlock>
      <template v-slot:title>Tags</template>
      <template v-slot:description
        >Group and categorize tasks using tags to improve filtering, reporting,
        and project visibility.</template
      >
    </WidgetsTitleBlock>

    <Alert>
      <IconInfoCircle />
      <AlertTitle>How tags work</AlertTitle>
      <AlertDescription>
        Tags help categorize tasks across different projects. A single task can
        have multiple tags, making it easier to filter and analyze your work.
      </AlertDescription>
    </Alert>
  </div>
</template>

<script setup lang="ts">
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
</script>

<style scoped></style>

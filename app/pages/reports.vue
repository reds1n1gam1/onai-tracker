<template>
  <div class="container bg-white rounded-md px-4 py-6 grid gap-4">
    <WidgetsTitleBlock>
      <template v-slot:title>Reports</template>
      <template v-slot:description
        >Analyze tracked time, productivity trends, and project activity with
        detailed reports and insights</template
      >
    </WidgetsTitleBlock>

    <Alert>
      <IconInfoCircle />
      <AlertTitle>How reports work</AlertTitle>
      <AlertDescription>
        Reports are generated from your tracked time entries. Use filters to
        analyze productivity, compare projects, and review activity over custom
        periods.
      </AlertDescription>
    </Alert>
  </div>
</template>

<script setup lang="ts">
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
</script>

<style scoped></style>

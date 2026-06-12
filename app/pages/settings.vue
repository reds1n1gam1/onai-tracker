<template>
  <div class="container bg-white rounded-md px-4 py-6 grid gap-4">
    <WidgetsTitleBlock>
      <template v-slot:title>Settings</template>
      <template v-slot:description
        >Manage your account, preferences, and application settings to tailor
        the experience to your workflow</template
      >
    </WidgetsTitleBlock>

    <Alert>
      <IconInfoCircle />
      <AlertTitle>How settings work</AlertTitle>
      <AlertDescription>
        Changes are saved automatically and applied across your workspace.
        Update preferences, notifications, and account details at any time.
      </AlertDescription>
    </Alert>
  </div>
</template>

<script setup lang="ts">
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
</script>

<style scoped></style>

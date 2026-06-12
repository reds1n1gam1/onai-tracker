<template>
  <div
    class="bg-white rounded-md p-4 shadow-md border-1 border-gray-200 grid gap-4"
  >
    <div class="flex flex-row justify-between">
      <p class="text-lg font-semibold">Recommended task</p>
      <IconSparklesFilled class="text-blue-500" />
    </div>

    <div
      class="flex flex-col gap-4 justify-start items-start border-1 border-blue-300 bg-blue-50 rounded-md p-4"
    >
      <div class="p-4 bg-blue-500 text-white rounded-full">
        <IconClipboardData size="24" />
      </div>

      <p class="text-xl font-bold">{{ task.title }}</p>

      <div class="flex flex-row items-center justify-start gap-2">
        <div
          class="bg-red-200 rounded-md px-2 py-1 text-red-500 font-medium text-sm capitalize"
        >
          {{ task.priority }}
        </div>
        <div
          class="bg-blue-200 rounded-md px-2 py-1 text-blue-500 font-medium text-sm capitalize"
        >
          {{ task.project }}
        </div>
      </div>

      <p class="text-base text-gray-700">{{ task.shortDescription }}</p>

      <div class="flex flex-col gap-4 w-full">
        <Button size="lg" class="text-lg">Start task</Button>
        <Button
          size="lg"
          class="text-lg border-2 border-gray-300"
          variant="secondary"
          >View task details</Button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconSparklesFilled, IconClipboardData } from "@tabler/icons-vue";

interface Props {
  task: Task;
}

const props = withDefaults(defineProps<Props>(), {
  task: () => ({
    title: "Prepare sprint planning desk",
    priority: Priority.LOW,
    project: "Tracker",
    shortDescription:
      "High priority task with upcoming deadline. Estimated time 1h 30m",
  }),
});
</script>

<style scoped></style>

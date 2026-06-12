<template>
  <div class="container bg-white rounded-md px-4 py-6 grid gap-4">
    <WidgetsTitleBlock>
      <template v-slot:title>Tasks</template>
      <template v-slot:description
        >Organize your work and focus on what matters most</template
      >
    </WidgetsTitleBlock>

    <div class="task-stats"></div>

    <div class="task-filter"></div>

    <div class="tasks-table">
      <Table>
        <TableCaption>All tasks list</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead class="w-[30px]"> </TableHead>
            <TableHead>Task</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Due date</TableHead>
            <TableHead>Est. Time</TableHead>
            <TableHead>Tracked time</TableHead>
            <TableHead>Project</TableHead>
            <TableHead class="text-right"> </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="(task, index) in tasks" :key="index">
            <TableCell class="font-medium"> </TableCell>
            <TableCell> {{ task.title }} </TableCell>
            <TableCell>
              <Priority :priority="task.priority" />
            </TableCell>
            <TableCell>
              <Status :status="task.status" />
            </TableCell>
            <TableCell>
              {{ toDate(task.dueDate as unknown as string) }}
            </TableCell>
            <TableCell> {{ task.estimatedMinutes }} </TableCell>
            <TableCell> {{ task.trackedSeconds }} </TableCell>
            <TableCell> {{ task.project?.name }} </TableCell>
            <TableCell class="text-right"> </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colspan="9"> Showing 6 of {{ tasks.length }} </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

import { toast } from "vue-sonner";

const tasks: Ref<Task[]> = ref([]);

onMounted(() => {
  loadTasks();
});

async function loadTasks() {
  try {
    const fetchedTasks: Task[] = await $fetch("/api/tasks/", {
      method: "GET",
    });

    tasks.value = fetchedTasks;
  } catch {
    toast.error("Load error");
  }
}
</script>

<style scoped></style>

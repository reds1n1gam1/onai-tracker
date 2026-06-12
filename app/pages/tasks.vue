<template>
  <div class="container bg-white rounded-md px-4 py-6 grid gap-4">
    <WidgetsTitleBlock>
      <template v-slot:title>Tasks</template>
      <template v-slot:description
        >Organize your work and focus on what matters most</template
      >
    </WidgetsTitleBlock>

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
            <TableHead> </TableHead>
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
            <TableCell>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>
                    <IconDotsVertical />
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      View details <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>Open</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Edit</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Remove</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colspan="9"> Showing 6 of {{ tasks.length }} </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>

    <Alert>
      <IconInfoCircle />
      <AlertTitle>Manage your daily work</AlertTitle>
      <AlertDescription>
        Create, prioritize, and track tasks to stay focused on what matters most
      </AlertDescription>
    </Alert>
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
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "~/components/ui/menubar";

import { toast } from "vue-sonner";
import { IconDotsVertical } from "@tabler/icons-vue";

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

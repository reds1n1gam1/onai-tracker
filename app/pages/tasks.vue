<template>
  <div class="container bg-white rounded-md px-4 py-6 grid gap-4">
    <WidgetsTitleBlock>
      <template v-slot:title>Tasks</template>
      <template v-slot:description
        >Organize your work and focus on what matters most</template
      >
      <template v-slot:actions>
        <TasksCreate @new-task-added="updateTasks" />
      </template>
    </WidgetsTitleBlock>

    <div class="flex justify-start gap-4">
      <StatItem color="gray">
        <template v-slot:icon><IconList /></template>
        <template v-slot:title>All Tasks</template>
        <template v-slot:value>{{ store.tasks.length }}</template>
      </StatItem>
    </div>

    <div class="flex flex-row justify-between gap-2">
      <InputGroup class="w-2/12">
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <IconSearch />
        </InputGroupAddon>
      </InputGroup>

      <Select>
        <SelectTrigger class="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple"> Recent </SelectItem>
            <SelectItem value="banana"> Tasks </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>

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
          <TableRow v-for="(task, index) in store.tasks" :key="index">
            <TableCell class="font-medium"> </TableCell>
            <TableCell>
              <p class="text-base font-semibold">{{ task.title }}</p>
              <p class="text-sm text-gray-400">{{ task.shortDescription }}</p>
            </TableCell>
            <TableCell>
              <Priority :priority="task.priority" />
            </TableCell>
            <TableCell>
              <Status :status="task.status" />
            </TableCell>
            <TableCell class="text-base">
              {{ toDate(task.dueDate as unknown as string) }}
            </TableCell>
            <TableCell class="text-base text-gray-500">
              {{ task.estimatedMinutes }}
            </TableCell>
            <TableCell class="text-base text-gray-500">
              {{ secondsToDate(task.trackedSeconds) }}
            </TableCell>
            <!-- <TableCell class="text-base font-semibold">
              {{ task.project?.name }}
            </TableCell> -->
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
                    <MenubarItem>Edit</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem @click="removeTask(task.id)"
                      >Remove</MenubarItem
                    >
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colspan="9">
              Showing 6 of {{ store.tasks.length }}
            </TableCell>
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

import { IconDotsVertical, IconList } from "@tabler/icons-vue";
import { useTasksStore } from "~/store/useTaskStore";
import { toast } from "vue-sonner";

const store = useTasksStore();

async function updateTasks() {
  try {
    await store.fetchAllTasks();
  } catch {
    toast.error("Server error");
  }
}

async function removeTask(taskId: string) {
  try {
    const removedLine = await $fetch("/api/tasks/remove", {
      method: "POST",
      body: {
        taskId,
      },
    });

    if (removedLine) {
      toast.success("Task was removed");
      await store.fetchAllTasks();
    }
  } catch {
    toast.error("Error on server. Task was not removed");
  }
}
</script>

<style scoped></style>

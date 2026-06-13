<template>
  <div
    class="grid gap-4 bg-white rounded-md p-4 shadow-md border-1 border-gray-200"
  >
    <div class="flex flex-row justify-between">
      <div class="flex flex-col gap-2 justify-start items-start">
        <p class="text-lg font-semibold">Today tasks list</p>
        <p class="text-base text-gray-500">
          Total tracked time:
          <span class="text-blue-500 font-semibold">06:20:00</span>
        </p>
      </div>
      <Button size="lg" variant="secondary">View all tasks</Button>
    </div>

    <div>
      <Table>
        <TableCaption>Detaild table for todays tasks list</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead> </TableHead>
            <TableHead class="w-[100px]"> Task </TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Status</TableHead>
            <TableHead> Tracked time </TableHead>
            <TableHead> </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="(session, index) in timeSessions" :key="index">
            <TableCell></TableCell>
            <TableCell class="font-medium">
              {{ session.task.title }}
            </TableCell>
            <TableCell>{{ session.task.project?.name }}</TableCell>
            <TableCell>
              <Priority :priority="session.task.priority" />
            </TableCell>
            <TableCell>
              {{ session.status }}
            </TableCell>
            <TableCell>
              <div class="flex flex-row justify-start items-center gap-2">
                <p>{{ secondsToDate(session.durationSeconds) }}</p>

                <div class="rounded-full p-2 bg-blue-200 text-blue-600">
                  <IconPlayerPlay />
                </div></div
            ></TableCell>
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
            <TableCell></TableCell>
            <TableCell colspan="3">
              Showing 6 of {{ timeSessions.length }}
            </TableCell>
            <TableCell colspan="1"> Total </TableCell>
            <TableCell colspan="1"> 06:20:00 </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "~/components/ui/button/Button.vue";
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
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "~/components/ui/menubar";
import { IconDotsVertical, IconPlayerPlay } from "@tabler/icons-vue";
import { toast } from "vue-sonner";

const timeSessions: Ref<TimeSession[]> = ref([]);

onMounted(() => {
  loadTimeSessions();
});

async function loadTimeSessions() {
  try {
    const sessions: TimeSession[] = await $fetch("/api/time-sessions/active/", {
      method: "GET",
    });

    timeSessions.value = sessions;
  } catch {
    toast.error("Load error");
  }
}
</script>

<style scoped></style>

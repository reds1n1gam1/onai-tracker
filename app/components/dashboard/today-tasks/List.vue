<template>
  <div
    class="grid gap-4 bg-white rounded-md p-4 shadow-md border-1 border-gray-200"
  >
    <div class="flex flex-row justify-between">
      <div class="flex flex-col gap-2 justify-start items-start">
        <p class="text-lg font-semibold">Today tasks list</p>
        <p class="text-base text-gray-500">
          Total tracked time:
          <span class="text-blue-500 font-semibold">{{
            secondsToDate(totalTrackedTime)
          }}</span>
        </p>
      </div>
      <Button size="lg" variant="secondary">View all tasks</Button>
    </div>

    <div class="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
      <Table>
        <TableCaption>Detaild table for todays tasks list</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead> </TableHead>
            <TableHead class="lg:w-[100px]"> Task </TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Status</TableHead>
            <TableHead> Tracked time </TableHead>
            <TableHead> </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TransitionGroup name="list">
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
                <SessionStatus :status="session.status" />
              </TableCell>
              <TableCell>
                <div class="flex flex-row justify-start items-center gap-2">
                  <p>{{ secondsToDate(session.durationSeconds) }}</p>

                  <div
                    @click="startTimer(session.taskId)"
                    class="rounded-full p-2 bg-blue-200 text-blue-600"
                  >
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
                      <MenubarItem>Open</MenubarItem>
                      <MenubarItem>Edit</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem @click="removeTimeSession(session.id)"
                        >Remove</MenubarItem
                      >
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </TableCell>
            </TableRow>
          </TransitionGroup>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell></TableCell>
            <TableCell colspan="3">
              Showing 6 of {{ timeSessions.length }}
            </TableCell>
            <TableCell colspan="1"> Total </TableCell>
            <TableCell colspan="1">
              {{ secondsToDate(totalTrackedTime) }}
            </TableCell>
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
  MenubarTrigger,
} from "~/components/ui/menubar";
import { IconDotsVertical, IconPlayerPlay } from "@tabler/icons-vue";
import { toast } from "vue-sonner";
import { useTimerStore } from "~/store/useTimerStore";
import SessionStatus from "./SessionStatus.vue";

const store = useTimerStore();

const timeSessions: Ref<TimeSession[]> = ref([]);

const totalTrackedTime = computed(() => {
  return timeSessions.value.reduce((acc, curr) => {
    return acc + curr.durationSeconds;
  }, 0);
});

onMounted(() => {
  updatedTimeSessions();
});

async function updatedTimeSessions() {
  try {
    const sessions: TimeSession[] = await $fetch("/api/time-sessions/", {
      method: "GET",
    });

    timeSessions.value = sessions;
  } catch {
    toast.error("Load error");
  }
}

async function startTimer(taskId: string) {
  try {
    await store.startTimeSession(taskId);
    toast.success("Time session started");
  } catch {
    toast.error("Time session start error");
  }
}

async function removeTimeSession(sessionId: string) {
  try {
    const removedLine = await $fetch("/api/time-sessions/remove", {
      method: "POST",
      body: {
        sessionId,
      },
    });

    if (removedLine) {
      toast.success("Time session removed");
    }

    updatedTimeSessions();
  } catch {
    toast.error("Error on server. Time session was not removed");
  }
}

watch(
  () => store.currentState,
  async (curr, prev) => {
    if (prev !== curr) {
      updatedTimeSessions();
    }
  },
);
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>

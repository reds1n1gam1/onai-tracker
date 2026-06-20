<template>
  <div class="container bg-white rounded-md px-4 py-6 grid gap-4">
    <WidgetsTitleBlock>
      <template v-slot:title>Projects</template>
      <template v-slot:description
        >Create projects to group related tasks, track progress, and understand
        where your time is being spent.</template
      >
      <template v-slot:actions>
        <ProjectsCreate @new-project-added="projectsStore.fetchAllProjects()" />
      </template>
    </WidgetsTitleBlock>

    <div class="flex flex-col lg:flex-row justify-start gap-4">
      <StatItem color="blue">
        <template v-slot:icon><IconFolder /></template>
        <template v-slot:title>Total Projects</template>
        <template v-slot:value>{{ totalProjects }}</template>
      </StatItem>

      <StatItem color="green">
        <template v-slot:icon><IconClockHour1 /></template>
        <template v-slot:title>Total Time</template>
        <template v-slot:value>{{ secondsToDate(totalTime) }}</template>
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

    <Table class="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
      <TableCaption>A list of your recent projects</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead> Project </TableHead>
          <TableHead>Time Tracked</TableHead>
          <TableHead>Tasks</TableHead>
          <TableHead> Actions </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow
          v-for="(project, index) in projectsStore.getProjects"
          :key="index"
        >
          <TableCell class="flex flex-col justify-center items-start">
            <p class="text-base font-semibold">{{ project.name }}</p>
            <p class="text-sm text-gray-500">{{ project.description }}</p>
          </TableCell>
          <TableCell class="text-gray-500 text-base">{{
            secondsToDate(getTotalSpendTime(project.tasks))
          }}</TableCell>
          <TableCell class="text-gray-500 text-base">{{
            project.tasks.length
          }}</TableCell>
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
                  <MenubarItem @click="removeProject(project.id)"
                    >Remove</MenubarItem
                  >
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>

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
import {
  IconDotsVertical,
  IconInfoCircle,
  IconSearch,
} from "@tabler/icons-vue";
import { toast } from "vue-sonner";
import { IconFolder, IconClockHour1 } from "@tabler/icons-vue";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
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
import { useProjectsStore } from "~/store/useProjectStore";

const projectsStore = useProjectsStore();

const totalProjects = computed(() => {
  if (!projectsStore.getProjects) {
    return;
  }

  return projectsStore.getProjects.length;
});

const totalTime = computed(() => {
  if (!projectsStore.getProjects) {
    return;
  }

  let sumOfTime = 0;
  projectsStore.getProjects.forEach((project) => {
    const tasks = project.tasks;

    if (tasks) {
      sumOfTime += tasks.reduce((acc, currTask) => {
        return acc + currTask.trackedSeconds;
      }, 0);
    }
  });

  return sumOfTime;
});

function getTotalSpendTime(tasks: Task[]): number {
  return tasks.reduce((acc, currTask) => {
    return acc + currTask.trackedSeconds;
  }, 0);
}

async function removeProject(projectId: string) {
  try {
    const removedLine = await $fetch("/api/projects/remove", {
      method: "POST",
      body: {
        projectId,
      },
    });

    if (removedLine) {
      await projectsStore.fetchAllProjects();
      toast.success("Project was removed");
    }
  } catch {
    toast.error("Error on server. Project was not removed");
  }
}
</script>

<style scoped></style>

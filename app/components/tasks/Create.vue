<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button size="lg"> Add task </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Create New Task</SheetTitle>
        <SheetDescription>
          Add a new task to stay ogranized and focused
        </SheetDescription>
      </SheetHeader>
      <div class="grid flex-1 auto-rows-min gap-6 px-4">
        <div class="grid gap-3">
          <Select v-model="taskForm.project">
            <SelectTrigger>
              <SelectValue placeholder="Select a project" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Project</SelectLabel>
                <SelectItem
                  v-for="(project, index) in projects"
                  :key="index"
                  :value="project.id"
                >
                  {{ project.name }}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div class="grid gap-3">
          <Label for="sheet-demo-username">Title</Label>
          <Input
            id="sheet-demo-username"
            v-model="taskForm.title"
            default-value="New task"
          />
        </div>

        <div class="grid gap-3">
          <Label for="sheet-demo-username">Short description</Label>
          <Input
            id="sheet-demo-username"
            v-model="taskForm.shortDescription"
            default-value="Some description"
          />
        </div>

        <div class="grid gap-3">
          <Select v-model="taskForm.priority">
            <SelectTrigger>
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Priority</SelectLabel>
                <SelectItem
                  v-for="(priority, index) in priorities"
                  :key="index"
                  :value="priority"
                >
                  {{ priority }}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div class="grid gap-3">
          <Select v-model="taskForm.status">
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem
                  v-for="(priority, index) in statusList"
                  :key="index"
                  :value="priority"
                >
                  {{ priority }}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div class="grid gap-3">
          <Label for="sheet-demo-username">Estimed minutes</Label>
          <Input
            id="sheet-demo-username"
            type="number"
            v-model="taskForm.estimatedMinutes"
            default-value="0"
          />
        </div>

        <div class="grid gap-3">
          <Popover v-slot="{ close }">
            <PopoverTrigger as-child>
              <Button
                variant="outline"
                :class="
                  cn(
                    'w-[240px] justify-start text-left font-normal',
                    !date && 'text-muted-foreground',
                  )
                "
              >
                <IconCalendar />
                {{
                  date
                    ? df.format(date.toDate(getLocalTimeZone()))
                    : "Pick a date"
                }}
              </Button>
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0" align="start">
              <Calendar
                v-model="taskForm.dueDate"
                layout="month-and-year"
                initial-focus
                @update:model-value="close"
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <SheetFooter>
        <Button @click="createNewTask"> Save changes </Button>
        <SheetClose as-child>
          <Button variant="outline"> Close </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "~/components/ui/sheet";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "../ui/select/index.js";
import Button from "../ui/button/Button.vue";
import { toast } from "vue-sonner";
import { Calendar } from "~/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { IconCalendar } from "@tabler/icons-vue";
import {
  DateFormatter,
  today,
  getLocalTimeZone,
  CalendarDate,
} from "@internationalized/date";
import type { DateValue } from "reka-ui";

const emit = defineEmits<{
  newTaskAdded: [];
}>();

const projects: Ref<Project[]> = ref([]);
const priorities: Ref<Priority[]> = ref(Object.values(Priority));
const statusList: Ref<TaskStatus[]> = ref(Object.values(TaskStatus));
const date = ref() as Ref<DateValue>;

const df = new DateFormatter("en-US", {
  dateStyle: "long",
});
const taskForm = reactive({
  project: "",
  title: undefined,
  shortDescription: undefined,
  priority: "",
  status: "",
  estimatedMinutes: 0,
  dueDate: undefined as DateValue | undefined,
});

async function loadProjects() {
  try {
    const fetchedProjects: Project[] = await $fetch("/api/projects", {
      method: "GET",
    });

    projects.value = fetchedProjects;
  } catch {
    toast.error("Load error");
  }
}

async function createNewTask() {
  try {
    const newTask = await $fetch("/api/tasks/create", {
      method: "POST",
      body: {
        ...taskForm,
        dueDate: taskForm.dueDate
          ? taskForm.dueDate.toDate(getLocalTimeZone()).toISOString()
          : null,
      },
    });

    if (newTask) {
      clearForm(taskForm);
      toast.error("New task created");
      emit("newTaskAdded");
    }
  } catch {
    toast.error("Invalid data");
  }
}

onMounted(() => {
  loadProjects();
});
</script>

<style scoped></style>

<template>
    <div class="bg-white rounded-md p-4 shadow-md border-1 border-gray-200 grid gap-2">
        <p class="text-lg font-semibold">Quick add task</p>

        <form @submit.prevent="addTask" class="flex flex-row justify-center items-center gap-4">
            <Input v-model="form.title" class="col-span-2" placeholder="What are you working on" />

            <Select v-model="form.priority">
                <SelectTrigger class="w-[180px]">
                    <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Priority</SelectLabel>
                        <SelectItem v-for="(priority, index) in priorities" :key="index" :value="priority">
                            {{ priority }}
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Select v-model="form.project">
                <SelectTrigger class="w-[180px]">
                    <SelectValue placeholder="Select a project" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Project</SelectLabel>
                        <SelectItem v-for="(project, index) in projects" :key="index" :value="project.id">
                            {{ project.name }}
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Button type="submit" size="lg">Add task</Button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { toast } from 'vue-sonner';
import Input from '../ui/input/Input.vue';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem, SelectLabel } from '../ui/select/index.js';

const projects: Ref<Project[]> = ref([])
const priorities: Ref<Priority[]> = ref(Object.values(Priority))

const form = reactive({
    title: '',
    priority: '',
    project: '',
});

async function loadProjects() {
    try {
        const userProjects: Project[] = await $fetch('/api/projects/', {
            method: 'GET'
        })

        projects.value = userProjects

    } catch {
        toast.error("Load error")
    }
}

async function addTask() {
    console.log(form)

    try {
        await $fetch('/api/tasks/create', {
            method: 'POST',
            body: form,
        })

        clearForm(form)
    }
    catch {
        toast.error('Invalid data')
    }
}

onMounted(() => {
    loadProjects()
})

</script>

<style scoped></style>
<template>
    <div class="bg-white rounded-md p-4 shadow-md border-1 border-gray-200 grid gap-2">
        <p class="text-lg font-semibold">Quick add task</p>

        <div class="flex flex-row justify-center items-center gap-4">
            <Input class="col-span-2" placeholder="What are you working on" />

            <Select>
                <SelectTrigger class="w-[180px]">
                    <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Priority</SelectLabel>
                        <SelectItem value="Medium">
                            Medium
                        </SelectItem>
                        <SelectItem value="Urgent">
                            Urgent
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Select>
                <SelectTrigger class="w-[180px]">
                    <SelectValue placeholder="Select a project" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Project</SelectLabel>
                        <SelectItem value="tracker">
                            Tracker
                        </SelectItem>
                        <SelectItem value="pet-project">
                            Pet project
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Button size="lg">Add task</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import Input from '../ui/input/Input.vue';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem, SelectLabel } from '../ui/select/index.js';


</script>

<style scoped></style>
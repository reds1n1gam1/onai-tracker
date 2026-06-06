<template>
    <div class="grid gap-4 bg-white rounded-md p-4 shadow-md border-1 border-gray-200">
        <div class="flex flex-row justify-between">
            <div class="flex flex-col gap-2 justify-start items-start">
                <p class="text-lg font-semibold">Today tasks list</p>
                <p class="text-base text-gray-500">Total tracked time: <span
                        class="text-blue-500 font-semibold">06:20:00</span></p>

            </div>
            <Button size="lg" variant="secondary">View all tasks</Button>
        </div>

        <div>
            <Table>
                <TableCaption>Detaild table for todays tasks list</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>

                        </TableHead>
                        <TableHead class="w-[100px]">
                            Task
                        </TableHead>
                        <TableHead>Project</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>
                            Tracked time
                        </TableHead>
                        <TableHead>

                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="(task, index) in mockTasks" :key="index">
                        <TableCell></TableCell>
                        <TableCell class="font-medium">
                            {{ task.title }}
                        </TableCell>
                        <TableCell>{{ task.project }}</TableCell>
                        <TableCell>{{ task.priority }}</TableCell>
                        <TableCell>
                            {{ task.status }}
                        </TableCell>
                        <TableCell> {{ task.trackedTime }} </TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell colspan="3">
                            Showing 6 of {{ mockTasks.length }}
                        </TableCell>
                        <TableCell colspan="1">
                            Total
                        </TableCell>
                        <TableCell colspan="1">
                            06:20:00
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>

    </div>
</template>

<script setup lang="ts">
import Button from '~/components/ui/button/Button.vue';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '~/components/ui/table'
import { Status } from '~~/shared/types/task';

const mockTasks: Task[] = [
    {
        title: 'Design dashboard timer block',
        priority: Priority.URGENT,
        project: 'Priority Time Tracker',
        shortDescription: 'Create the main timer section with task context and controls.',
        trackedTime: '01:35:00',
        status: Status.IN_PROGRESS,
    },
    {
        title: 'Implement quick task input',
        priority: Priority.MEDIUM,
        project: 'Priority Time Tracker',
        shortDescription: 'Add a form for creating tasks with priority, text, and project selection.',
        trackedTime: '00:45:00',
        status: Status.DONE,
    },
    {
        title: 'Create today tasks list',
        priority: Priority.LOW,
        project: 'Dashboard',
        shortDescription: 'Show tasks planned for today with tracked time and current status.',
        trackedTime: '02:10:00',
        status: Status.TODO,
    },
    {
        title: 'Build recommended task card',
        priority: Priority.URGENT,
        project: 'Smart Priority',
        shortDescription: 'Display the task with the highest priority score.',
        trackedTime: '00:25:00',
        status: Status.TODO,
    },
    {
        title: 'Prepare landing page FAQ',
        priority: Priority.MEDIUM,
        project: 'Marketing Website',
        shortDescription: 'Write FAQ content for the public landing page.',
        trackedTime: '00:30:00',
        status: Status.TODO,
    },
]
</script>

<style scoped></style>
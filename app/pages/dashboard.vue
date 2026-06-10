<template>
    <div class="grid gap-6">
        <ul v-if="users?.length">
            <li v-for="user in users" :key="user.id">{{ user.name }} ({{ user.email }})</li>
        </ul>

        <DashboardTimer />

        <DashboardQuickTaskAdd />

        <div class="grid grid-cols-4 gap-6">
            <DashboardTodayTasksList class="col-span-3" />

            <DashboardRecommendedTask />
        </div>

    </div>
</template>

<script setup>
const { data: users } = await useFetch('/api/users')
</script>

<style lang="scss" scoped></style>
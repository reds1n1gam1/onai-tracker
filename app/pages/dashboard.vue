<template>
    <div class="grid gap-6">
        <DashboardTimer />

        <DashboardQuickTaskAdd />

        <div class="grid grid-cols-3 gap-6">
            <DashboardTodayTasksList class="col-span-2" />

            <DashboardRecommendedTask  />
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
<template>
  <div
    class="sidebar flex flex-col justify-between items-start h-screen py-6 px-8 border-r-2 border-gray-200"
  >
    <div class="sidebar__top">
      <img class="w-48" src="/logo.png" alt="" />

      <nav class="mt-6">
        <ul class="grid gap-2">
          <li v-for="item in menuItems" :key="item.title" class="text-gray-500">
            <RouterLink
              :to="item.route"
              activeClass="bg-blue-100 text-blue-500"
              exactActiveClass="bg-blue-100 text-blue-500"
              class="text-lg font-medium flex flex-row gap-2 p-4 rounded-md items-center hover:bg-blue-100 hover:text-blue-500"
            >
              <component :is="item.icon" :size="30" />
              <p>{{ item.title }}</p>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="sidebar__bottom">
      <button class="flex flex-row gap-2">
        <IconHelpCircle class="text-gray-400" />
        <p class="text-normal text-gray-400">Help & Support</p>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Icon } from "@tabler/icons-vue";
import {
  IconLayoutDashboard,
  IconListCheck,
  IconReportAnalytics,
  IconFolder,
  IconTag,
  IconSettings,
  IconHelpCircle,
} from "@tabler/icons-vue";

type MenuItem = {
  title: string;
  icon: Icon;
  route: string;
};

const menuItems: Ref<MenuItem[]> = ref([
  {
    title: "Dashboard",
    icon: IconLayoutDashboard,
    route: "/dashboard",
  },
  {
    title: "Tasks",
    icon: IconListCheck,
    route: "/tasks",
  },
  {
    title: "Reports",
    icon: IconReportAnalytics,
    route: "/reports",
  },
  {
    title: "Projects",
    icon: IconFolder,
    route: "/projects",
  },
  {
    title: "Settings",
    icon: IconSettings,
    route: "/settings",
  },
]);
</script>

<style scoped></style>

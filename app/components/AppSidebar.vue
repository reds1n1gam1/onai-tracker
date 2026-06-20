<template>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in menuItems" :key="item.title">
              <SidebarMenuButton as-child>
                <a :href="item.url">
                  <component :is="item.icon" />
                  <span>{{ item.title }}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarFooter>
        <SidebarGroup>
          <button class="flex flex-row gap-2">
            <IconHelpCircle class="text-gray-400" />
            <p class="text-normal text-gray-400">Help & Support</p>
          </button>
        </SidebarGroup>
      </SidebarFooter>
    </SidebarContent>
  </Sidebar>
</template>

<script setup lang="ts">
import type { Icon } from "@tabler/icons-vue";
import {
  IconLayoutDashboard,
  IconListCheck,
  IconFolder,
  IconSettings,
  IconHelpCircle,
} from "@tabler/icons-vue";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";

type MenuItem = {
  title: string;
  icon: Icon;
  url: string;
};

const menuItems: Ref<MenuItem[]> = ref([
  {
    title: "Dashboard",
    icon: IconLayoutDashboard,
    url: "/dashboard",
  },
  {
    title: "Tasks",
    icon: IconListCheck,
    url: "/tasks",
  },
  {
    title: "Projects",
    icon: IconFolder,
    url: "/projects",
  },
  {
    title: "Settings",
    icon: IconSettings,
    url: "/settings",
  },
]);
</script>

<style scoped></style>

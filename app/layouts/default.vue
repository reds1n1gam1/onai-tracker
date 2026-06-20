<script setup lang="ts">
import SidebarProvider from "~/components/ui/sidebar/SidebarProvider.vue";
</script>

<template>
  <SidebarProvider>
    <div class="flex w-full">
      <app-sidebar class="flex-shrink-0" />

      <div class="flex-1 bg-gray-100">
        <app-header />

        <div class="container mx-auto p-6 flex-1 grid gap-6">
          <slot />
          <app-footer />
        </div>
      </div>
    </div>
  </SidebarProvider>
</template>

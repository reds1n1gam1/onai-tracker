<template>
  <div class="shadow-md bg-white flex flex-row justify-between p-6">
    <SidebarTrigger />

    <p class="text-gray-700 text-lg font-medium">Dashboard</p>

    <div class="flex flex-row gap-2">
      <button>
        <IconBell />
      </button>

      <p class="font-semibold">{{}}</p>

      <Avatar>
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>

      <Button @click="logout">Log out</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconBell } from "@tabler/icons-vue";
import Avatar from "./ui/avatar/Avatar.vue";
import AvatarImage from "./ui/avatar/AvatarImage.vue";
import AvatarFallback from "./ui/avatar/AvatarFallback.vue";
import Button from "./ui/button/Button.vue";
import SidebarTrigger from "./ui/sidebar/SidebarTrigger.vue";

const {
  loggedIn,
  user,
  session,
  fetch,
  clear: clearSession,
  openInPopup,
} = useUserSession();

async function logout() {
  await clearSession();
  await navigateTo("/");
}
</script>

<style scoped></style>

<template>
    <div class="shadow-md bg-white flex flex-row justify-between p-6">
        <p class="text-gray-700 text-lg font-medium">Dashboard</p>

        <div class="flex flex-row gap-2">
            <button>
                <IconBell />
            </button>

            <Avatar>
                <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                <AvatarFallback>ER</AvatarFallback>
            </Avatar>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IconBell } from '@tabler/icons-vue';
import Avatar from './ui/avatar/Avatar.vue';
import AvatarImage from './ui/avatar/AvatarImage.vue';
import AvatarFallback from './ui/avatar/AvatarFallback.vue';
</script>

<style scoped></style>
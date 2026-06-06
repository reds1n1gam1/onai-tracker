<template>
    <div class="flex place-items-center place-content-center bg-gray-50 h-screen">
        <RegistrationDialog  class="w-7/12"/>
    </div>
</template>

<script setup>
import RegistrationDialog from '~/components/dialogs/RegistrationDialog.vue';

definePageMeta({
    layout: 'auth',
})
</script>

<style lang="scss" scoped></style>
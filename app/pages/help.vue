<template>
  <div class="container mx-auto text-gray-500 grid gap-6 py-6">
    <div class="grid gap-4">
      <h1 class="text-4xl text-black font-semibold">Help</h1>
      <p class="font-semibold">
        Find answers, learn how things work, and get the most out of your time.
      </p>
    </div>
    <div
      class="rounded-md flex flex-row items-center justify-between bg-blue-100 p-4"
    >
      <div class="flex flex-row justify-start items-center gap-4">
        <div
          class="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-blue-200 text-blue-500"
        >
          <IconMail size="36" />
        </div>

        <div>
          <h2 class="text-lg font-semibold text-black">
            Questions About Project?
          </h2>

          <p>
            If you have questions regarding these Terms of Service, please
            contact our support team.
          </p>
        </div>
      </div>

      <a href="mailto:madisaginaliyev@gmail.com">
        <strong>Contact Support</strong>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconMail } from "@tabler/icons-vue";

definePageMeta({
  layout: "empty",
});
</script>

<style scoped></style>

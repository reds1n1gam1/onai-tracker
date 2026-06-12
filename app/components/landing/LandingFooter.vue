<template>
  <div class="footer container mx-auto px-4">
    <div class="footer__top flex flex-row gap-4 py-6">
      <div class="footer_col flex flex-col gap-4 max-w-md">
        <img class="footer__logotype w-80" src="/logo.png" alt="" />
        <p class="text-lg text-gray-600">
          Smart time tracking for focused teams and individuals. Prioritize what
          matters, track your time, and achieve more every day
        </p>
        <div class="footer__socials flex flex-row justify-start gap-4">
          <div
            class="social-item w-12 h-12 bg-blue-200 rounded-md flex place-items-center justify-center"
          >
            <IconBrandTelegram size="24" class="text-blue-500" />
          </div>
          <div
            class="social-item w-12 h-12 bg-blue-200 rounded-md flex place-items-center justify-center"
          >
            <IconMail size="24" class="text-blue-500" />
          </div>
        </div>
      </div>
      <nav
        class="footer_col flex flex-col gap-4 justify-start items-start flex-grow"
      >
        <p class="font-bold text-2xl">Product</p>
        <a
          class="text-lg text-gray-600 flex flex-row gap-2 items-center"
          href=""
        >
          <IconLinkFilled class="text-blue-500" size="16" />Features
        </a>
        <a
          class="text-lg text-gray-600 flex flex-row gap-2 items-center"
          href=""
        >
          <IconLinkFilled class="text-blue-500" size="16" />How it works
        </a>
        <a
          class="text-lg text-gray-600 flex flex-row gap-2 items-center"
          href=""
        >
          <IconLinkFilled class="text-blue-500" size="16" />Pricing
        </a>
        <a
          class="text-lg text-gray-600 flex flex-row gap-2 items-center"
          href=""
        >
          <IconLinkFilled class="text-blue-500" size="16" />FAQ
        </a>
      </nav>

      <nav
        class="footer_col flex flex-col gap-4 justify-start items-start flex-grow"
      >
        <p class="font-bold text-2xl">App</p>
        <a
          class="text-lg text-gray-600 flex flex-row gap-2 items-center"
          href=""
        >
          <IconLinkFilled class="text-blue-500" size="16" />Dashboard
        </a>
        <a
          class="text-lg text-gray-600 flex flex-row gap-2 items-center"
          href=""
        >
          <IconLinkFilled class="text-blue-500" size="16" />Tasks
        </a>
        <a
          class="text-lg text-gray-600 flex flex-row gap-2 items-center"
          href=""
        >
          <IconLinkFilled class="text-blue-500" size="16" />Time
        </a>
        <a
          class="text-lg text-gray-600 flex flex-row gap-2 items-center"
          href=""
        >
          <IconLinkFilled class="text-blue-500" size="16" />Reports
        </a>
      </nav>

      <nav
        class="footer_col flex flex-col gap-4 justify-start items-start flex-grow"
      >
        <p class="font-bold text-2xl">Resources</p>
        <a
          class="text-lg text-gray-600 flex flex-row gap-2 items-center"
          href=""
        >
          <IconLinkFilled class="text-blue-500" size="16" />Contact
        </a>
        <a
          class="text-lg text-gray-600 flex flex-row gap-2 items-center"
          href=""
        >
          <IconLinkFilled class="text-blue-500" size="16" />Privacy Policy
        </a>
        <a
          class="text-lg text-gray-600 flex flex-row gap-2 items-center"
          href=""
        >
          <IconLinkFilled class="text-blue-500" size="16" />Terms of Service
        </a>
      </nav>
    </div>
    <hr />
    <div class="footer__bottom flex justify-between text-gray-600 py-6">
      <p>
        @{{ new Date().getFullYear() }} Onai Time Tracker. All rights reserved
      </p>
      <div class="footer__links flex flex-row gap-4">
        <a href="">Privacy policy</a>
        <a href="">Terms of Service</a>
        <a href="">Cookies</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconBrandTelegram, IconMail, IconLinkFilled } from "@tabler/icons-vue";
</script>

<style scoped></style>

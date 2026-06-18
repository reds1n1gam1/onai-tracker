<template>
  <div class="container mx-auto text-gray-500 grid gap-6 py-6">
    <div class="grid gap-4">
      <h1 class="text-4xl text-black font-semibold">Privacy</h1>
      <p class="font-semibold">
        Your privacy is important to us. This page explains how we collect, use,
        and protect your data.
      </p>

      <div class="flex flex-row justify-start items-center gap-2">
        <IconCalendar size="24" />
        <p><strong>Last updated:</strong> June 13, 2026</p>
      </div>
    </div>

    <div class="bg-white rounded-md shadow-sm p-4 grid gap-4">
      <h2 class="text-black text-xl font-semibold">Privacy at a Glance</h2>

      <p clas="text-lg font-semibold">
        We are committed to keeping your data secure and being transparent about
        how it is used.
      </p>

      <div class="grid grid-cols-4 gap-4">
        <div class="flex flex-col gap-4 justify-start items-start">
          <div
            class="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-blue-200 text-blue-500"
          >
            <IconLock size="36" />
          </div>
          <h3 class="text-xl font-semibold text-black">We protect your data</h3>
          <p>We aim to provide a stable and secure experience.</p>
        </div>

        <div class="flex flex-col gap-4 justify-start items-start">
          <div
            class="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-blue-200 text-blue-500"
          >
            <IconUser size="36" />
          </div>
          <h3 class="text-xl font-semibold text-black">You own your data</h3>
          <p>We protect your data and respect your privacy.</p>
        </div>

        <div class="flex flex-col gap-4 justify-start items-start">
          <div
            class="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-blue-200 text-blue-500"
          >
            <IconEye size="36" />
          </div>
          <h3 class="text-xl font-semibold text-black">We don't sell data</h3>
          <p>You have control over your account and your data.</p>
        </div>

        <div class="flex flex-col gap-4 justify-start items-start">
          <div
            class="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-blue-200 text-blue-500"
          >
            <IconDatabase size="36" />
          </div>
          <h3 class="text-xl font-semibold text-black">
            We use data to improve the product
          </h3>
          <p>
            We're constantly improving the platform to support your workflow.
          </p>
        </div>
      </div>
    </div>

    <div class="p-4 bg-white shadow-sm border-gray-200 grid gap-2">
      <div>
        <h2 class="text-lg text-black font-semibold">
          1. Information We Collect
        </h2>

        <p>
          We collect only the information necessary to provide and improve the
          service.
        </p>

        <h3>Account Information</h3>

        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Authentication provider information</li>
        </ul>
      </div>

      <div>
        <h2 class="text-lg text-black font-semibold">Workspace Data</h2>

        <ul>
          <li>Projects</li>
          <li>Tasks</li>
          <li>Tags</li>
          <li>Time tracking records</li>
          <li>Settings and preferences</li>
        </ul>

        <h3>Usage Information</h3>

        <ul>
          <li>Device and browser information</li>
          <li>Feature usage statistics</li>
          <li>Error and performance logs</li>
        </ul>
      </div>

      <div>
        <h2 class="text-lg text-black font-semibold">
          2. How We Use Your Information
        </h2>

        <p>We use your information to:</p>

        <ul>
          <li>Provide and maintain the service</li>
          <li>Synchronize your data across devices</li>
          <li>Generate reports and productivity insights</li>
          <li>Improve performance and reliability</li>
          <li>Send important service notifications</li>
          <li>Protect against abuse and unauthorized access</li>
        </ul>
      </div>

      <div>
        <h2 class="text-lg text-black font-semibold">
          3. How We Protect Your Information
        </h2>

        <p>
          We implement technical and organizational measures to safeguard your
          data.
        </p>

        <ul>
          <li>Encrypted communication using HTTPS</li>
          <li>Secure password storage</li>
          <li>Regular backups</li>
          <li>Access controls and monitoring</li>
          <li>Protection against unauthorized access</li>
        </ul>
      </div>

      <div>
        <h2 class="text-lg text-black font-semibold">4. Data Sharing</h2>

        <p>We do not sell your personal information.</p>

        <p>We may share data only when necessary:</p>

        <ul>
          <li>
            With infrastructure and service providers operating the platform
          </li>
          <li>To comply with legal obligations</li>
          <li>To protect our rights, users, or the security of the service</li>
        </ul>
      </div>

      <div>
        <h2 class="text-lg text-black font-semibold">5. Your Rights</h2>

        <p>You have control over your information.</p>

        <p>You can:</p>

        <ul>
          <li>Access your data</li>
          <li>Update your account information</li>
          <li>Export your data</li>
          <li>Delete your account</li>
          <li>Request removal of personal information</li>
        </ul>
      </div>

      <div>
        <h2 class="text-lg text-black font-semibold">6. Data Retention</h2>

        <p>We retain your data while your account remains active.</p>

        <p>
          If you delete your account, your personal information and workspace
          data will be removed according to our data retention policies.
        </p>
      </div>

      <div>
        <h2 class="text-lg text-black font-semibold">
          7. International Data Transfers
        </h2>

        <p>
          Your data may be processed and stored in different countries depending
          on the infrastructure used to operate the service.
        </p>

        <p>
          We take appropriate measures to ensure your information remains
          protected.
        </p>
      </div>

      <div>
        <h2 class="text-lg text-black font-semibold">
          8. Changes to This Privacy Policy
        </h2>

        <p>We may update this Privacy Policy from time to time.</p>

        <p>
          If significant changes are made, we will notify you through the
          application or via email.
        </p>
      </div>
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
            Questions About Privacy?
          </h2>

          <p>
            If you have any questions or concerns regarding your privacy or data
            usage, please contact our support team.
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
import {
  IconCalendar,
  IconDatabase,
  IconEye,
  IconLock,
  IconMail,
  IconUser,
} from "@tabler/icons-vue";

definePageMeta({
  layout: "empty",
});
</script>

<style scoped></style>

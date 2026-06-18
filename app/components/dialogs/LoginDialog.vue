<template>
  <div
    class="login bg-white rounded-md py-12 px-10 shadow-lg flex flex-col justify-items-stretch gap-6"
  >
    <div class="login__header flex flex-col items-center">
      <p class="text-3xl font-bold">Welcome back!</p>
      <p class="text-lg text-gray-500">
        Sign in to continue to Onai Time Tracker
      </p>
    </div>

    <hr />

    <div class="login__sso grid gap-2">
      <SocialButton :type="Socials.GOOGLE" />
      <SocialButton :type="Socials.GITHUB" />
    </div>

    <hr />

    <form
      @submit.prevent="login"
      class="login__form flex flex-col justify-items-stretch gap-4"
    >
      <FieldGroup>
        <Field class="grid gap-2">
          <FieldLabel class="text-lg" for="email">Email</FieldLabel>
          <InputGroup class="p-2 h-auto">
            <InputGroupInput
              v-model="credentials.email"
              class="text-lg"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
            <InputGroupAddon>
              <IconMail size="48" stroke="{2}" />
            </InputGroupAddon>
          </InputGroup>
        </Field>

        <Field class="grid gap-2">
          <FieldLabel class="text-lg" for="password">Password</FieldLabel>
          <InputGroup class="p-2 h-auto">
            <InputGroupInput
              v-model="credentials.password"
              class="text-lg"
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
            <InputGroupAddon>
              <IconLockPassword size="48" />
            </InputGroupAddon>
          </InputGroup>
        </Field>

        <Field>
          <div class="flex flex-row gap-2 justify-items-start items-center">
            <Checkbox id="remember-me" />
            <FieldLabel for="remember-me" class="text-base font-normal"
              >Remember me</FieldLabel
            >
          </div>
        </Field>
        <Button type="submit" class="text-lg p-6">Sign in</Button>
      </FieldGroup>
    </form>

    <div class="login__signup text-center w-8/12 mx-auto">
      Do not have account?
      <RouterLink class="text-blue-500 font-semibold" to="/registration"
        >Sign up</RouterLink
      >
    </div>

    <hr />

    <div class="login__policy text-center w-8/12 mx-auto">
      By signing in, you agree to our
      <a href="" class="text-blue-500 font-semibold">Terms of Service</a> and
      <a href="" class="text-blue-500 font-semibold">Privacy Policy</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";
import Button from "../ui/button/Button.vue";
import Checkbox from "../ui/checkbox/Checkbox.vue";
import { InputGroupInput } from "../ui/input-group/index.js";
import InputGroup from "../ui/input-group/InputGroup.vue";
import InputGroupAddon from "../ui/input-group/InputGroupAddon.vue";
import SocialButton from "../ui/sso-button/SocialButton.vue";
import { IconMail, IconLockPassword } from "@tabler/icons-vue";

import { Field, FieldGroup, FieldLabel } from "~/components/ui/field";

const { loggedIn, user, fetch: refreshSession } = useUserSession();

const credentials = reactive({
  email: "",
  password: "",
});

async function login() {
  try {
    await $fetch("/api/auth/login", {
      method: "POST",
      body: credentials,
    });

    // Refresh the session on client-side and redirect to the home page
    await refreshSession();
    await navigateTo("/dashboard");
  } catch {
    toast.error("Invalid credentials");
  }
}
</script>

<style scoped></style>

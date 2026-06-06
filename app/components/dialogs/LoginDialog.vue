<template>
    <div class="login bg-white rounded-md py-12 px-10 shadow-lg flex flex-col justify-items-stretch gap-6">
        <div class="login__header flex flex-col items-center">
            <p class="text-3xl font-bold">Welcome back!</p>
            <p class="text-lg text-gray-500">Sign in to continue to Onai Time Tracker</p>
        </div>

        <hr>

        <div class="login__sso grid gap-2">
            <SocialButton :type="Socials.GOOGLE" />
            <SocialButton :type="Socials.GITHUB" />
        </div>

        <hr>

        <div class="login__form flex flex-col justify-items-stretch gap-4">
            <div class="grid gap-2">
                <Label class="text-lg" for="email">Email</Label>
                <InputGroup class="p-2 h-auto">
                    <InputGroupInput class="text-lg" id="email" type="email" placeholder="Enter your email" />
                    <InputGroupAddon>
                        <IconMail size="48" stroke={2} />
                    </InputGroupAddon>
                </InputGroup>
            </div>

            <div class="grid gap-2">
                <Label class="text-lg" for="password">Password</Label>
                <InputGroup class="p-2 h-auto">
                    <InputGroupInput class="text-lg" id="password" type="password" placeholder="Enter your password" />
                    <InputGroupAddon>
                        <IconLockPassword size="48" />
                    </InputGroupAddon>
                </InputGroup>
            </div>

            <div class="flex flex-row gap-2 justify-items-start items-center">
                <Checkbox id="remember-me" />
                <Label for="remember-me" class="text-base font-normal">Remember me</Label>

            </div>
            <Button class="text-lg p-6">Sign in</Button>
        </div>

        <div class="login__policy text-center w-8/12 mx-auto">
            By signing in, you agree to our <a href="" class="text-blue-500 font-semibold">Terms of Service</a> and <a
                href="" class="text-blue-500 font-semibold">Privacy Policy</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '../ui/button/Button.vue';
import Checkbox from '../ui/checkbox/Checkbox.vue';
import { InputGroupInput } from '../ui/input-group/index.js';
import InputGroup from '../ui/input-group/InputGroup.vue';
import InputGroupAddon from '../ui/input-group/InputGroupAddon.vue';
import Label from '../ui/label/Label.vue';
import SocialButton from '../ui/sso-button/SocialButton.vue';
import { IconMail, IconLockPassword } from '@tabler/icons-vue';

</script>

<style scoped></style>
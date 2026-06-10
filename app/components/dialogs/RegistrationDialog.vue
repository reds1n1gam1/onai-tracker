<template>
    <div class="registration bg-white rounded-md py-12 px-10 shadow-lg flex flex-col justify-items-stretch gap-6">
        <div class="registration__header flex flex-col items-center">
            <p class="text-3xl font-bold">Create your account!</p>
            <p class="text-lg text-gray-500">Join thousands of focused professionals</p>
        </div>

        <hr>

        <div class="registration__sso grid gap-2">
            <SocialButton :type="Socials.GOOGLE" />
            <SocialButton :type="Socials.GITHUB" />
        </div>

        <hr>

        <form @submit.prevent="register" class="registration__form flex flex-col justify-items-stretch gap-4">
            <div class="grid gap-2">
                <Label class="text-lg" for="name">Full name </Label>
                <InputGroup class="p-2 h-auto">
                    <InputGroupInput v-model="credentials.name" class="text-lg" id="name" type="text"
                        placeholder="Enter your name" />
                    <InputGroupAddon>
                        <IconUserCircle size="48" stroke={2} />
                    </InputGroupAddon>
                </InputGroup>
            </div>

            <div class="grid gap-2">
                <Label class="text-lg" for="email">Email</Label>
                <InputGroup class="p-2 h-auto">
                    <InputGroupInput v-model="credentials.email" class="text-lg" id="email" type="email"
                        placeholder="Enter your email" />
                    <InputGroupAddon>
                        <IconMail size="48" stroke={2} />
                    </InputGroupAddon>
                </InputGroup>
            </div>

            <div class="grid gap-2">
                <Label class="text-lg" for="password">Password</Label>
                <InputGroup class="p-2 h-auto">
                    <InputGroupInput v-model="credentials.password" class="text-lg" id="password" type="password"
                        placeholder="Enter your password" />
                    <InputGroupAddon>
                        <IconLockPassword size="48" />
                    </InputGroupAddon>
                </InputGroup>
            </div>

            <div class="grid gap-2">
                <Label class="text-lg" for="confirm-password">Confirm pasword</Label>
                <InputGroup class="p-2 h-auto">
                    <InputGroupInput v-model="credentials.confirmPassword" class="text-lg" id="confirm-password"
                        type="password" placeholder="Confirm your password" />
                    <InputGroupAddon>
                        <IconLockPassword size="48" />
                    </InputGroupAddon>
                </InputGroup>
            </div>

            <div class="flex flex-row gap-2 justify-items-start items-center">
                <Checkbox v-model="credentials.accept" id="accept" />
                <Label for="accept" class="text-base font-normal">I agree to <a href=""
                        class="text-blue-500 font-semibold">Terms of Service</a> and <a href=""
                        class="text-blue-500 font-semibold">Privacy Policy</a></Label>

            </div>
            <Button type="submit" class="text-lg p-6">Create account</Button>
        </form>

        <div class="registration__have-account text-center w-8/12 mx-auto">
            Already have an account <RouterLink to="/login" class="text-blue-500 font-semibold">Sign in</RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { toast } from 'vue-sonner';
import Button from '../ui/button/Button.vue';
import Checkbox from '../ui/checkbox/Checkbox.vue';
import { InputGroupInput } from '../ui/input-group/index.js';
import InputGroup from '../ui/input-group/InputGroup.vue';
import InputGroupAddon from '../ui/input-group/InputGroupAddon.vue';
import Label from '../ui/label/Label.vue';
import SocialButton from '../ui/sso-button/SocialButton.vue';
import { IconMail, IconLockPassword, IconUserCircle } from '@tabler/icons-vue';



const { fetch: refreshSession } = useUserSession();

const credentials = reactive({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    accept: false,
});

async function register() {
    try {
        await $fetch('/api/registration', {
            method: 'POST',
            body: credentials,
        })

        await refreshSession()
        await navigateTo('/dashboard')
    }
    catch {
        toast.error('Invalid data')
    }
}

</script>

<style scoped></style>
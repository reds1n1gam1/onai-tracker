<template>
  <div class="container bg-white rounded-md px-4 py-6 grid gap-4">
    <WidgetsTitleBlock>
      <template v-slot:title>Settings</template>
      <template v-slot:description
        >Manage your account, preferences, and application settings to tailor
        the experience to your workflow</template
      >
      <template v-slot:actions>
        <Button @click="updateProfileData" size="lg">Save changes</Button>
      </template>
    </WidgetsTitleBlock>

    <div
      class="grid gap-5 px-4 py-6 rounded-md shadow-sm border-1 border-gray-200"
    >
      <p class="text-base font-semibold">Profile information</p>

      <div class="flex flex-row gap-4">
        <div class="flex flex-col justify-start items-start gap-2">
          <Label for="name">Full name</Label>
          <InputGroup>
            <InputGroupInput
              v-model="form.name"
              id="name"
              placeholder="Full name"
            />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div class="flex flex-col justify-start items-start gap-2">
          <Label for="email">Email</Label>
          <InputGroup>
            <InputGroupInput
              v-model="form.email"
              id="email"
              placeholder="Email"
            />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </div>

    <Alert>
      <IconInfoCircle />
      <AlertTitle>How settings work</AlertTitle>
      <AlertDescription>
        Changes are saved automatically and applied across your workspace.
        Update preferences, notifications, and account details at any time.
      </AlertDescription>
    </Alert>
  </div>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import Button from "~/components/ui/button/Button.vue";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "~/components/ui/input-group";

const form = reactive({
  name: "",
  email: "",
});

async function loadProfileData() {
  const profileData: User = await $fetch("/api/profile", {
    method: "GET",
  });

  form.email = profileData.email;
  form.name = profileData.name || "";
}

async function updateProfileData() {
  try {
    const updatedUser = await $fetch("/api/profile/update", {
      method: "POST",
      body: form,
    });

    if (updatedUser) {
      toast.success("User data updated");
    }
  } catch {
    toast.error("Update error");
  }
}

onMounted(() => {
  loadProfileData();
});
</script>

<style scoped></style>

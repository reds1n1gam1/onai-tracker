<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button size="lg"> Add project </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
      <form
        @submit.prevent="createNewProject"
        class="grid flex-1 auto-rows-min gap-6 px-4"
      >
        <div class="grid gap-3">
          <Label for="sheet-project-name">Name</Label>
          <Input
            v-model="projectForm.name"
            id="sheet-project-name"
            default-value="Test project"
          />
        </div>
        <div class="grid gap-3">
          <Label for="sheet-project-color">Color</Label>
          <Input
            v-model="projectForm.color"
            id="sheet-project-color"
            default-value="Blue"
          />
        </div>
        <div class="grid gap-3">
          <Label for="sheet-project-description">Description</Label>
          <Input
            v-model="projectForm.description"
            id="sheet-project-description"
            default-value="Some project description"
          />
        </div>
      </form>
      <SheetFooter>
        <Button @click="createNewProject"> Save changes </Button>
        <SheetClose as-child>
          <Button variant="outline"> Close </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "~/components/ui/sheet";
import Button from "../ui/button/Button.vue";
import { toast } from "vue-sonner";

const projectForm = reactive({
  name: "",
  color: "",
  description: "",
});

async function createNewProject() {
  try {
    const project = await $fetch("/api/projects/create", {
      method: "POST",
      body: projectForm,
    });

    if (project) {
      clearForm(projectForm);
      toast.error("New Project information added");
    }
  } catch {
    toast.error("Invalid data");
  }
}
</script>

<style scoped></style>

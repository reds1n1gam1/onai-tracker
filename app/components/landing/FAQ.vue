<template>
  <div>
    <div class="flex flex-col gap-6 items-center">
      <LandingLabel text="FAQ" palette="default">
        <IconHelpOctagonFilled />
      </LandingLabel>

      <p class="text-2xl lg:text-5xl font-bold">Frequently asked questions</p>
      <p class="text-lg lg:text-xl">
        Answers to the most common question from Priority Time Tracker users
      </p>
    </div>

    <div class="rounded-md border-2 border-gray-200 p-4 mt-12">
      <Accordion
        type="single"
        collapsible
        class="w-full"
        default-value="item-1"
      >
        <AccordionItem
          v-for="(question, index) in questions"
          :key="question.title"
          :value="'item-' + index"
        >
          <AccordionTrigger class="text-2xl font-bold">{{
            question.title
          }}</AccordionTrigger>
          <AccordionContent>
            <p class="text-lg">{{ question.content }}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconHelpOctagonFilled } from "@tabler/icons-vue";
import LandingLabel from "./ui/LandingLabel.vue";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions: Ref<QuestionItem[]> = ref([
  {
    title: "How does prioritization work?",
    content:
      "Tasks are scored by priority, urgency, effort, and progress to suggest what to focus on next.",
  },
  {
    title: "Can I change priorities manually?",
    content:
      "Yes. You can update task priority anytime as your plans or deadlines change.",
  },
  {
    title: "Is this only a time tracker?",
    content:
      "No. It combines time tracking, task management, and smart recommendations.",
  },
  {
    title: "Can I use it alone?",
    content:
      "Yes. It works great for personal productivity, freelance work, study, or solo projects.",
  },
  {
    title: "Will there be reports?",
    content:
      "Yes. Daily reports show tracked time, completed tasks, and focus progress.",
  },
]);
</script>

<style scoped></style>

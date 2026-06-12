<template>
  <div
    class="card flex flex-col rounded-md border-2 border-gray-100 py-6 px-12"
    :class="{ 'card-suggested': isSuggested }"
  >
    <div class="card__header py-4 flex flex-row gap-4">
      <div
        class="card__icon w-20 h-20 bg-blue-100 rounded-md flex-shrink-0 flex items-center justify-center"
      >
        <IconUserFilled
          size="40"
          class="text-blue-500"
          v-if="priceItem.type === SubscriptionTypes.FREE"
        />
        <IconBolt
          size="40"
          class="text-blue-500"
          v-if="priceItem.type === SubscriptionTypes.PRO"
        />
        <IconUsers
          size="40"
          class="text-blue-500"
          v-if="priceItem.type === SubscriptionTypes.TEAM"
        />
      </div>
      <div class="card__description flex flex-col content-start gap-2">
        <div class="card__type text-4xl font-semibold capitalize">
          {{ priceItem.type }}
        </div>
        <div class="card__price text-4xl font-semibold">
          $ {{ priceItem.price }}
          <span class="text-sm text-gray-500 font-light">/mo</span>
        </div>
        <div class="card__description text-gray-500 font-semibold">
          {{ priceItem.description }}
        </div>
      </div>
    </div>
    <hr />
    <div class="card__features flex flex-col gap-2 py-4">
      <div
        class="card__item flex flex-row justify-start gap-2"
        v-for="feature in priceItem.features"
      >
        <IconCircleCheck class="text-blue-500" />
        <p class="card__text font-meduim">{{ feature }}</p>
      </div>
    </div>

    <div
      class="card__action flex flex-col gap-2 justify-items-stretch content-start"
    >
      <Button class="cursor-pointer" @click="openRegistration()">{{
        priceItem.buttonText
      }}</Button>
      <div
        class="card__hint text-center text-gray-500 font-normal"
        v-if="priceItem.hintText"
      >
        {{ priceItem.hintText }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  IconCircleCheck,
  IconUserFilled,
  IconBolt,
  IconUsers,
} from "@tabler/icons-vue";
import Button from "~/components/ui/button/Button.vue";

defineProps<{
  isSuggested?: boolean;
  priceItem: PriceItem;
}>();

const router = useRouter();

const openRegistration = () => {
  router.push("/registration");
};
</script>

<style scoped></style>

<template>
  <div
    class="header container mx-auto px-4 grid gap-4 grid-cols-3 px-10 items-center"
  >
    <div class="header__logo">
      <img class="header__logotype" src="/logo.png" alt="" />
    </div>
    <nav class="header__navigation">
      <NavigationMenu :viewport="false">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
              <a class="text-lg" href="#features">Features</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
              <a class="text-lg" href="#how-it-works">How it works</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
              <a class="text-lg" href="#banner">Join</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
              <a class="text-lg" href="#faq">FAQ</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>

    <div class="header__auth grid gap-5 grid-cols-2">
      <Button
        @click="openLogin()"
        size="lg"
        variant="secondary"
        class="text-lg cursor-pointer"
        >Sign in</Button
      >
      <Button
        @click="openRegistration()"
        size="lg"
        class="text-lg cursor-pointer"
        >Get started</Button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "../ui/button/Button.vue";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const router = useRouter();

function openLogin() {
  router.push("/login");
}

function openRegistration() {
  router.push("/registration");
}
</script>

<style lang="scss" scoped>
.header {
  --ot-logo-height: 70px;

  &__logotype {
    width: var(--ot-logo-width);
    height: var(--ot-logo-height);
  }
}
</style>

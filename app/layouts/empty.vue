<template>
  <div>
    <div
      class="header container mx-auto px-4 flex flex-row gap-4 justify-between px-10 items-center"
    >
      <div class="header__logo">
        <a href="/">
          <img class="header__logotype" src="/logo.png" alt="" />
        </a>
      </div>

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
    <slot></slot>
    <landing-footer />
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();

function openLogin() {
  router.push("/login");
}

function openRegistration() {
  router.push("/registration");
}
</script>

<style lang="scss" scoped>
.header__logotype {
  height: 70px;
}
</style>

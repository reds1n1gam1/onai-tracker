<template>
    <div class="header grid gap-4 grid-cols-3 py-10 px-10 items-center">
        <div class="header__logo">
            <img class="header__logotype" src="/logo.png" alt="">
        </div>
        <nav class="header__navigation">
            <NavigationMenu :viewport="false">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
                            <a href="features">Features</a>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
                            <a href="/how-it-works">How it works</a>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
                            <a href="/pricing">Pricing</a>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
                            <a href="/faq">FAQ</a>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>

        <div class="header__auth grid gap-5 grid-cols-2">
            <Button size="lg" variant="secondary">Sign in</Button>
            <Button size="lg">Get started</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '../ui/button/Button.vue';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

</script>

<style lang="scss" scoped>
.header {
    --ot-logo-width: 280px;
    --ot-logo-height: 70px;

    &__logotype {
        width: var(--ot-logo-width);
        height: var(--ot-logo-height);
    }
}
</style>
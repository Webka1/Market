<template>
     <div class="navigation">
        <router-link class="router-link-nav" to="/"><h1 class="navigation_logo">Market<span>.Place</span></h1></router-link>
        <div class="navigation_menu">
            <router-link to="/" class="navigation_menu__item">
                <p><i class="fa-solid fa-magnifying-glass"></i>&emsp;Главная</p>
            </router-link>
            <router-link to="/catalog" class="navigation_menu__item">
                <p><i class="fa-solid fa-bars"></i>&emsp;Каталог</p>
            </router-link>
            <router-link to="/about" class="navigation_menu__item">
                <p><i class="fa-solid fa-circle-info"></i>&emsp;О нас</p>
            </router-link>
            <router-link to="/contacts" class="navigation_menu__item">
                <p><i class="fa-solid fa-phone"></i>&emsp;Контакты</p>
            </router-link>
        </div>
    </div>
</template>
<script setup></script>
<style scoped>
    .navigation_menu__item {
        text-decoration: none;
    }
    .router-link-nav {
        text-decoration: none;
    }
</style>
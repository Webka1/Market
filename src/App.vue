<script setup>
import { RouterView } from 'vue-router';
import Navigation from './components/Navigation.vue';

</script>

<template>
     <main>
        <Navigation />
        <div class="container">
           <RouterView />
        </div>
    </main>
</template>

<style scoped>
</style>

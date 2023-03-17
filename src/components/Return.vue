<script setup>
    // define props
    const props = defineProps({
        return_title: {
            type: String,
            required: true,
        },
        return_subtitle: {
            type: String,
            required: true
        },
        return_url: {
            type: String,
            required: true
        }
    })
</script>
<template>
    <router-link class="return_link" :to="return_url">
        <div class="return_block">
            <div class="_">
                <span class="return_arrow">➜</span>
            </div>
            <div>
                <p class="return_title">{{ return_title }}</p>
                <p class="return_subtitle">{{ return_subtitle }}</p>
            </div>
        </div>
    </router-link>
</template>
<style scoped>  
    .return_link {
        text-decoration: none;
        color: #000;
        transition: 100ms;
    }
    .return_link:hover {
        color: #1453fe;
    }
</style>
<script setup>
    // define class props
    const props = defineProps({
        alert_type: {
            type: String,
            required: true
        },
        alert_text: {
            type: String,
            required: true
        }
    })

</script>
<template>
    <div :class="'alert ' + alert_type ">
        {{ alert_text }}
    </div>
</template>
<style scoped>
    .alert {
        border-radius: 7px;
        padding-top: 1em;
        padding-bottom: 1em;
        width: 100%;
        text-align: center;
        font-weight: bold;
        font-size: 18px;
        color: #fff;
        margin-bottom: 1em;
    }
    .info {
        background: #f2f4f7;
        color: gray;
    }
    .success {
        background: rgb(65, 194, 65);
    }
    .warning {
        background: rgb(255, 193, 7);
    }
    .error {
        background: rgb(220, 53, 69);
    }
</style>
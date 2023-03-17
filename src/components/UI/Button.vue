<script setup>
    // define class props
    const props = defineProps({
        button_type: {
            type: String,
            required: true
        },
        button_text: {
            type: String,
            required: true
        },
        button_size: {
            type: String,
            required: false,
            default: 'normal'
        }
    })

</script>
<template>
    <div :class="'button ' + button_type + ' ' + button_size ">
        {{ button_text }}
    </div>
</template>
<style scoped>
    .button {
        transition: 100ms;
        cursor: pointer;
        width: auto;
        border: none;
        border-radius: 7px;
        background-color: #1453fe;
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        padding: 1em;
        text-align: center;
    }
    .small {
        font-size: 14px;
        padding: 0.5em;
    }
    .info {
        background: #1453fe;
        color: #fff;
    }
    .info:hover {
        background: #1453fe;
        opacity: 0.8;
    }
    .success {
        background: rgb(65, 194, 65);
    }
    .success:hover {
        background: rgb(65, 194, 65);
        opacity: 0.8;
    }
    .warning {
        background: rgb(255, 193, 7);
    }
    .warning:hover {
        background: rgb(255, 193, 7);
        opacity: 0.8;
    }
    .error {
        background: rgb(220, 53, 69);
    }
    .error:hover {
        background: rgb(220, 53, 69);
        opacity: 0.8;
    }
</style>
<!-- notfound page  -->
<template>
    <div class="notfound">
        <div class="notfound_emoji">
            🙈
        </div>
        <h2 class="notfound_title">
            Страница не найдена
        </h2>
        <p class="notfound_text">
            Возможно, вы ошиблись при вводе адреса или страница была удалена.
        </p>
        <div class="notfound_return">
            <router-link to="/">
                <p>Вернуться на главную</p>
            </router-link>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>

    /* class nofound align center vertically */
    .notfound {
        width: fit-content;

        
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    .notfound_return a {
        text-decoration: none;
    }
    .notfound_return p {
        color: white;
        padding: 1em;
        background: #1453fe;
        border-radius: 7px;
        font-weight: bold;
        transition: 100ms;
        font-size: 16px;
    }
    .notfound_return p:hover {
        background: #0e3fca;
    }
    .notfound_text {
        margin-top: 1em;
        margin-bottom: 2em;
    }
    .notfound_emoji {
        font-size: 40px;
    }
    .notfound_title {
        margin-top: 1em;
    }
</style>

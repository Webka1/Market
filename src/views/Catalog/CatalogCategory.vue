<script setup>
    import { useRoute } from 'vue-router';
    import STORE_DB from '../../db';

    import Alert from '../../components/UI/Alert.vue';
    import CatalogItem from '../../components/CatalogItem.vue'
    import Return from '../../components/Return.vue'

    const route = useRoute();
    const request_category = route.params.category

    const category = STORE_DB[0].categories.filter((category) => category.db_name === request_category)
    // const category = STORE_DB[0].categories.filter((category) => category.db_name === request_category)[0].name
    console.log(category.length)
</script>
<template>
    <div v-if="category.length === 0">
        <div style="margin-bottom: 2em;">
            <Return return_subtitle="Весь каталог" return_title="Все товары" return_url="/catalog" />
        </div>
        <Alert alert_type="error" alert_text="Категория не найдена"/>
    </div>
    <div v-else>
        <div style="margin-bottom: 2em">
            <Return return_subtitle="Весь каталог" return_title="Все товары" return_url="/catalog" />
        </div>
        <div class="catalog_cover" :style="[
            category[0].cover == null ? {
                'background': 'rgb(2,0,36)',
                'background': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)'
            } : {
                'background': 'url('+ category[0].cover +') center center no-repeat',
                'background-size': 'cover'
            }
        ]">
            <div class="catalog_categories__title">
                <h2>{{ category[0].name }}</h2>
            </div>
        </div>
        <div class="catalog_categories">
            <div class="catalog_categories__grid">
                <Alert v-if="STORE_DB[0].items.filter((item) => item.category === request_category).length === 0" alert_type="info" alert_text="Товаров в данной категории нет"/>
                <CatalogItem v-for="item in STORE_DB[0].items.filter((item) => item.category === request_category)" :item="item"/>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .catalog_categories__grid {
        margin-top: 2em;
        display: flex;
        grid-gap: 1em;
        flex-wrap: wrap;
        /* make auto height cards */
        align-items: flex-start;
    }
    .catalog_cover {
        border-radius: 10px;
        width: 100%;
        height: 300px;
        margin-bottom: 2em;
        position: relative;
    }
    .catalog_categories__title {
        padding: 1.5em;

        color: #fff;
        position: absolute;
        bottom: 0;
    }
</style>
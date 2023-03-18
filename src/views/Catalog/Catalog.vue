<template lang="">
    <div class="catalog_categroies__prikol" v-if="sale_items ||  reviews_items">
        <router-link to="/sale" class="categories_category with_sale" v-if="sale_items">
            <h1>🔥 Скидки 🔥</h1>
            <p>Посмотрите товары со скидкой</p>
        </router-link>
        <router-link to="/sale" class="categories_category with_reviews" v-if="reviews_items">
            <h1>⭐ С отзывами ⭐ </h1>
            <p>Посмотрите товары с отзывами</p>
        </router-link>
    </div>
    <div>
        <div class="catalog_categories" v-for="category in STORE_DB[0].categories">
            <div class="catalog_categories__title">
                <h2>{{ category.name }} <router-link class="show-more" v-if="STORE_DB[0].items.filter((item) => item.category === category.db_name).length > 4" :to='"/catalog/" + category.db_name'>Посмотреть все</router-link></h2>
            </div>
            <div class="catalog_categories__grid">
                <Alert v-if="STORE_DB[0].items.filter((item) => item.category === category.db_name).length === 0" alert_type="info" alert_text="Товаров в данной категории нет"/>
                <CatalogItem v-for="item in STORE_DB[0].items.filter((item) => item.category === category.db_name).slice(0, 4)" :item="item"/>
            </div>
        </div>
    </div>
</template>
<script setup>
    import STORE_DB from '../../db'
    import Button from '../../components/UI/Button.vue';
    import Alert from '../../components/UI/Alert.vue';
    import CatalogItem from '../../components/CatalogItem.vue'

    // if items with is_sale
    const sale_items = STORE_DB[0].items.filter((item) => item.is_sale === true)
    console.log(sale_items)

    // if  items  with reviews
    const reviews_items = STORE_DB[0].items.filter((item) => STORE_DB[0].reviews.find((review) => review.item === item.id))
    console.log(reviews_items)
</script>
<style scoped>
    .catalog_categories__grid {
        margin-top: 2em;
        display: flex;
        grid-gap: 1em;
        flex-wrap: wrap;
        /* make auto height cards */
        align-items: flex-start;
        justify-content: space-between;
    }
    .catalog_categories {
        margin-bottom: 4em;
    }
    .catalog_categories__link {
        text-decoration: none;
        color: #000;
    }
    .catalog_categories__link:hover .categories_item__title {
        color: #1453fe;
    }
    .catalog_categories__link:hover .categories_item__price {
        color: #1453fe;
    }
    .catalog_categories__item {
        width: 350px;
    }
    .categories_item__image img {
        border-radius: 7px;
    }
    .categories_item__price {
        margin-top: .5em;
        margin-bottom: .5em;
    }
    .categories_item__rating {
        margin-top: .5em;
        color: #1453fe;
    }
    .categories_item__title {
        font-size: 18px;
    }
    .sale_badge {
        color: #fff;
        font-size: 12px;
        padding: 3px  10px;
        border-radius: 100px;
        background: #ff1a4f;
    }


    .show-more {
        font-size: 14px;
        color: #1453fe;
        text-decoration: none;
    }
    .show-more:hover {
        text-decoration: underline;
    }


    .catalog_categroies__prikol {
        margin-bottom: 2em;
        display: flex;
        grid-gap: 1em;
        overflow-x: auto;
    }

    .categories_category {
        text-decoration: none;
        color: #fff;
        text-align: center;
        padding: 5em;
        border-radius: 7px;
        background: #000;
        width: 100%;
        font-weight: bold;
    }
    .with_sale {
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,82,122,1) 0%, rgba(255,0,59,1) 100%);
    }
    .with_sale:hover {
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,0,59,1) 0%, rgba(255,82,122,1) 100%);
    }
    .with_reviews {
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(90,135,255,1) 0%, rgba(20,83,254,1) 100%);
    }
    .with_reviews:hover {
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(20,83,254,1) 0%, rgba(90,135,255,1) 100%);
    }
</style>
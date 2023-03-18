<template>
    <router-link class="catalog_categories__link" :to="'/item/' + item.id">
        <div class="catalog_categories__item">
            <div class="categories_item__image">
                <img width='350' height="235" :src="item.image" alt="">
            </div>
            <div class="categories_item__price">
                <h3 :style='{color: item.is_sale ? "#ff1a4f" : "black"}' v-if="item.is_sale">
                    {{ Math.floor(item.price - (item.price * item.sale_amount)).toLocaleString(item.currency_locale, {
                        style: 'currency',
                        currency: item.currency,
                    }) }} <span class="sale_badge">Скидка</span>
                </h3>
                <h3 v-else>
                    {{ item.price.toLocaleString(item.currency_locale, {
                        style: 'currency',
                        currency: item.currency,
                    }) }}
                </h3>
            </div>
            <div class="categories_item__title">
                <p>{{ item.name }}</p>
            </div>
        </div>
    </router-link>
</template>
<script setup>
    // define props
    const props = defineProps({
        item: {
            type: Object,
            required: true
        },
    })
    

    const test = (res) => {
        console.log(res)
    }
</script>
<style scoped>
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
        margin: auto;
        display: block;
        width: 100%;
        height: 100%;
        max-width: 350px;
        max-height: 235px;
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
</style>
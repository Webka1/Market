<script setup>
    import { useRoute } from 'vue-router';
    import STORE_DB from '../../db';
    import { ref, computed } from 'vue';

    import Alert from '../../components/UI/Alert.vue';
    import CatalogItem from '../../components/CatalogItem.vue'
    import Return from '../../components/Return.vue'
    import Button from '../../components/UI/Button.vue';

    const route = useRoute();
    const request_category = route.params.category

    const items = ref(STORE_DB[0].items.filter((item) => item.category === request_category).sort((a, b) => b.id - a.id))
    const category = STORE_DB[0].categories.filter((category) => category.db_name === request_category)

    const current_filter = ref(null)
    const filters = ref({
        price: {
            price_up: {
                name: 'price_up',
                icon: 'fa-arrow-up',
                type: 'price',
                sort: (a, b) => a.price - b.price
            },
            price_down: {
                name: 'price_down',
                icon: 'fa-arrow-down',
                type: 'price',
                sort: (a, b) => b.price - a.price
            },
        },
        date: {
            date_newest: {
                name: 'date_newest',
                icon: 'fa-arrow-up',
                type: 'date',
                sort: (a, b) => a.added - b.added
            },
            date_oldest: {
                name: 'date_oldest',
                icon: 'fa-arrow-down',
                type: 'date',
                sort: (a, b) => b.added - a.added
            }
        },
        default: {
            name: 'default',
            sort: (a, b) => b.id - a.id
        }
    })

    const set_price_filter = computed(() => {
        if (current_filter.value === filters.value.price.price_up) {
            return filters.value.price.price_down
        } else {
            return filters.value.price.price_up
        }
    })

    const set_date_filter = computed(() => {
        if (current_filter.value === filters.value.date.date_newest) {
            return filters.value.date.date_oldest
        } else {
            return filters.value.date.date_newest
        }
    })

    const setFilter = (filter) => {
        current_filter.value = filter

        if(current_filter.value === null) {
            current_filter.value = filters.value.default
            items.value = items.value.sort((a, b) => b.id - a.id)
        } else if(current_filter.value === filters.value.price.price_up) {
            items.value = items.value.sort((a, b) => a.price - b.price)
        } else if(current_filter.value === filters.value.price.price_down) {
            items.value = items.value.sort((a, b) => b.price - a.price)
        } else if(current_filter.value === filters.value.date.date_newest) {
            items.value = items.value.sort((a, b) => new Date(a.added) - new Date(b.added))
        } else if(current_filter.value === filters.value.date.date_oldest) {
            items.value = items.value.sort((a, b) => new Date(b.added) - new Date(a.added))
        }

        console.log(current_filter.value)
    }
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
        <div v-if="items.length > 1" class="catalog_filter">
            <div @click="setFilter(set_price_filter)" class="catalog_filter__item" :class='[
                current_filter === null 
                    ? "" : current_filter.type === "price" ? "filter_active" : ""
                ]'>
                По цене <i class="fa-solid" :class='[
                    current_filter === null 
                        ? "" : current_filter.type === "price" ? current_filter.icon : ""
                ]'></i>
            </div>
            <div @click="setFilter(set_date_filter)" class="catalog_filter__item" :class='[
                current_filter === null 
                    ? "" : current_filter.type === "date" ? "filter_active" : ""
                ]'>
                По дате <i class="fa-solid" :class='[
                    current_filter === null 
                        ? "" : current_filter.type === "date" ? current_filter.icon : ""
                ]'></i>
            </div>
            <div v-if="current_filter" class="catalog_filter__item">
                <Button v-if="current_filter.name !== 'default'" @click="setFilter(null)" button_type="error" button_text="Сбросить" button_size="small"/>
            </div>
        </div>
        <div class="catalog_categories">
            <div class="catalog_categories__grid">
                <Alert v-if="items.length === 0" alert_type="info" alert_text="Товаров в данной категории нет"/>
                <CatalogItem v-for="item in items" :item="item"/>
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
        justify-content: space-between;
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


    .catalog_filter__item {
        color: #666;
        cursor: pointer;
        font-weight: bold;
    }
    .catalog_filter__item:hover {
        color: #000;
    }
    .filter_active {
        color: #000;
    }
    .catalog_filter {
        transition: 100ms;
        display: flex;
        align-items: center;
        grid-gap: 1em;
        margin-bottom: 2em;
    }
</style>
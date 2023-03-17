<script setup>
import Alert from './UI/Alert.vue';

    // define props
    const props = defineProps({
        reviews: {
            type: Object,
            required: true
        }
    })
</script>
<template>
    <div class="product_reviews">
        <h2>Отзывы о товаре</h2>
        <div class="reviews">
            <Alert v-if="reviews.length === 0" alert_text="Отзыв еще никто не оставил :(" alert_type="info"/>
            <div v-else class="reviews_item" v-for="review in reviews">
                <div class="reviews_item__top">
                    <div class="reviews_item__user">
                        <div class="reviews_item__avatar">
                            <img width="35" :src="review.avatar" alt="">
                        </div>
                        <div class="reviews_item__name">
                            {{ review.name }}
                            <p>Ретинг: {{ review.rating }}</p>
                        </div>
                    </div>
                    <div class="reviews_item__date">
                        {{ review.date }}
                    </div>
                </div>
                <div class="reviews_item__bottom">
                    <p>{{ review.text }}</p>
                </div>
            </div>
        </div>
        <div v-if="reviews.length > 0" class="reviews_notify">Все отзывы оставлены после покупки</div>
    </div>
</template>
<style scoped>
.reviews {
        margin-top: 2em;
        display: flex;
        grid-gap: 2em;
    }
    .reviews_item {
        padding: 1em;
        border-radius: 7px;
        background: #f2f4f7;
        width: 300px;
    }
    .reviews_item__user {
        display: flex;
        align-items: center;
        justify-content: start;
        grid-gap: 1em;
    }
    .reviews_item__name {
        font-weight: bold;
    }
    .reviews_item__name p {
        font-size: 14px;
        color: #1453fe;
    }
    .reviews_item__top {
        display: flex;
        grid-gap: 1em;
        justify-content: space-between;
    }
    .reviews_item__date {
        color: gray;
    }
    .reviews_item__bottom {
        margin-top: 4em;
    }
    .reviews_notify {
        margin-top: 2em;
        color: gray;
    }
</style>
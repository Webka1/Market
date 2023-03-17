<script setup>
    import Return from '../../components/Return.vue';
    import BUTTON from '../../components/UI/Button.vue';
    import Alert from '../../components/UI/Alert.vue';
    import STORE_DB from '../../db'

    import { useRoute } from 'vue-router';
    import ReviewsItem from '../../components/ReviewsItem.vue';
    const route = useRoute();

    const id = route.params.id;

    const item = STORE_DB[0].items.find(item => item.id == id);
    if(!item) {
        alert("Товар не найден");
        window.location.href = "/catalog";
    }
    const reviews = STORE_DB[0].reviews.filter(review => review.item == id);
    const seller = STORE_DB[0].sellers.find(seller => seller.id == STORE_DB[0].items.find(item => item.id == id).seller);
    const category = STORE_DB[0].categories.filter((category) => category.db_name === item.category)[0]


    const getRating = (numbers) => {
        const sum = numbers.reduce((acc, number) => acc + number, 0);
        const length = numbers.length;
        return sum / length;
    }
    const reviews_rating = STORE_DB[0].reviews.filter(review => review.item == id).map(review => review.rating);
    console.log(getRating(reviews_rating));
    console.log(reviews_rating);
</script>
<template>
    <div v-if="item">
        <Return return_title="Назад" :return_subtitle="category.name" :return_url='"/catalog/" + category.db_name   ' />
        <div class="product">
            <div class="product_main">
                <div class="product_image">
                    <img :src="item.image" alt="">
                </div>
                <div class="product_info">
                    <h1 v-if="!item.is_sale" class="product_info__price">
                        {{item.price.toLocaleString(item.currency_locale, {
                            style: 'currency',
                            currency: item.currency,
                        })}}
                    </h1>
                    <h1 v-else class="product_info__price sale">
                        {{Math.floor(item.price - (item.price * item.sale_amount)).toLocaleString(item.currency_locale, {
                            style: 'currency',
                            currency: item.currency,
                        })}}
                    </h1>
                    <h2 class="product_info__title">
                        {{item.name}}
                    </h2>
                    <div class="product_info__rating">
                        <p>Рейтинг: <span :style="[
                            reviews_rating.length !== 0 
                            ? getRating(reviews_rating) >= 4
                                ? 'color: #2ECC40'
                                : getRating(reviews_rating) >= 3
                                    ? 'color: #f7b500'
                                    : 'color: red'
                            : 'color: #c9cbd1'
                        ]">{{ reviews_rating.length !== 0 ? getRating(reviews_rating) : 'нет' }}</span>&nbsp;</p>
                        <p style="font-size: 14px; margin-top: 5px;">&nbsp;(Отзывов: {{ reviews.length }})</p>
                    </div>
                    <div class="product_info__purchase">
                        <BUTTON button_type="info" :button_text='"Купить за $" + item.price + " USD"'/>
                    </div>
                </div>
            </div>
            <div class="product_second">
                <div class="product_description">
                    <h2>Описание</h2>
                    <p>
                        {{ item.description }}
                    </p>
                </div>
            </div>
            <div class="product_second">
                <div class="product_seller">
                    <h2>Продавец</h2>
                    <div class="seller_information">
                        <div class="seller_avatar">
                            <img width="50" :src="seller.avatar" alt="">
                        </div>
                        <div class="seller_info">
                            <h3>{{ seller.name }}</h3>
                            <p>★★★★<span style="color: #c9cbd1">★</span><span style="color: lightslategray; margin-left: .5em; font-size: 14px;">{{ seller.sales }} продаж</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ReviewsItem :reviews="reviews" />
    </div>
    <div v-else>
        <Alert alert_type="error" alert_text="Товар не найден"/>
    </div>
</template>
<style scoped>
    .seller_information {
        display: flex;
        align-items: center;
        grid-gap: 1em;
    }
    .product_seller .seller_information {
        margin-top: 1em;
    }
    .seller_info {
        font-size: 18px;
    }
    .seller_info p {
        color: #1453fe;
    }
    .product_reviews {
        margin-top: 4em;
        margin-left: -4em;
        border-top: 1px solid #e2e2e2;
        padding: 4em;
    }
    .product_info__purchase {
        margin-top: 4em;
    }
    .sale {
        color: #ff1a4f;
    }
</style>
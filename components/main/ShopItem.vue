<template>
    <div class="shop_item">
        <div class="item_sex">
            {{product.sex}}
        </div>
        <div class="item_image">
            <img :src="product.img" :alt="product.name">
        </div>
        <div class="item_header">{{product.name}}</div>
        
        <div class="show_description">Посмотреть описание</div>
        <div class="item_description">{{product.description}}</div>
        <div class="item_price">{{product.price}}</div>
        <div class="shop_button">
            <div 
                class="item_button btn btn_red">
                Заказать
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        product:{
            type: Object,
            required: true
        }
        
    }
}
</script>
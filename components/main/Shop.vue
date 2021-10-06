<template>
    <section class="shop">
        <div class="shop_header">Лучшие ароматы SParfum</div>
        <div class="shop_wrapper">
            <shopItem
                v-for="(i, index) in products" 
                :key="index"
                :product="i"
            />
        </div>
    </section>
</template>

<script>
import shopItem from '@/components/main/ShopItem'
export default {
    components: {
        shopItem
    },

    props:{
        products:{
            type: Array,
            required: true
        }
        
    }

}
</script>
<template>

    <div class="carousels">
        <div class="first_carousel">
            <client-only>
                <carousel 
                    :perPage="1"
                    :autoplay="true"
                    paginationActiveColor='#30061ae0'
                    :paginationPadding="4">
                    <slide v-for="img in images" :key="img">
                        <div class="first_carousel_slide">
                            <img 
                                class="first_carousel_img"
                                :src="img" 
                                :alt="img"/>
                        </div>
                    </slide>
                </carousel>
            </client-only>
        </div>
        <div class="second_carousel">
            <client-only>
                <carousel 
                    :perPage="1"
                    :navigationEnabled="true"
                    :paginationEnabled="false"
                >
                    <slide v-for="i in items" :key="i.name">
                        <div class="second_carousel_slide">
                            <div class="item_name">{{i.name}}</div>
                            <div class="item_description">{{i.description}}</div>
                            <img 
                                class="second_carousel_img"
                                :src="i.image" 
                                :alt="i.name"/>
                                
                            <div 
                                class="item_button btn btn_red">
                                Заказать
                            </div>
                        </div>
                    </slide>
                </carousel>
            </client-only>
        </div>
    </div>

</template>


<script>
export default {
    mounted(){
        setTimeout(()=>{
            document.querySelector('.VueCarousel-navigation-next').innerHTML = '<span class="material-icons">arrow_forward_ios</span>'
            document.querySelector('.VueCarousel-navigation-prev').innerHTML = '<span class="material-icons">arrow_back_ios</span>'
        }, 1)
    },
    props:{
        images:{
            type: Array,
            required: true,
        },
        items:{
            type: Array,
            required: true,
        }
    }
}
</script>
<template>
    <div class="comments">
        <div class="comments_header">
            Отзывы
        </div>
        <div class="comments_container">
            <div class="comments_body">
                <div class="buttons_blocks">
                    <div @click="$emit('show_modal')" class="block_button">Бесплатная консультация при выборе аромата</div>
                </div>
                <div class="comments_social">
                    <img src="img/TG.svg" alt="" class="comments_social_img">
                    <img src="img/wa.svg" alt="" class="comments_social_img">
                    <img src="img/inst.svg" alt="" class="comments_social_img">
                </div>
            </div>
            <div class="comments_carousel">
                <client-only>
                    <carousel :perPage="1">
                        <slide v-for="a in comments" :key="a.name" class="comments_slide">
                            <div class="author_info">
                                <img :src="a.image" :alt="a.name" class="author_img">
                                <div class="author_name">{{a.name}}</div>
                            </div>
                            <div class="comments_slide_txt">
                                {{a.txt}}
                            </div>
                        </slide>
                    </carousel>
                </client-only>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props:{
        comments:{
            type: Array,
            required: true
        }
    }
}
</script>
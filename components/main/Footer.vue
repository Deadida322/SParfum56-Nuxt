<template>
    <footer class="footer">
        <div class="footer_header">
            Наши контакты
        </div>
        <div class="footer_container">
            <Form/>
            <div class="footer_adresses">
                <div class="adresses_txt">
                    Медногорск, улица Гайдара, 14
                </div>
                <div class="adresses_txt">
                    Новотроицк, улица Название, 2
                </div>
                <div class="comments_body">
                    <div class="comments_social">
                        <img src="img/TG.svg" alt="" class="comments_social_img">
                        <img src="img/wa.svg" alt="" class="comments_social_img">
                        <img src="img/inst.svg" alt="" class="comments_social_img">
                    </div>
                </div>
                
            </div>
        </div>
    </footer>
</template>

<script>

import Form from '@/components/UI/Form.vue'
export default {
    components: {
        Form
    }
}
</script>
<template>
    <transition name="home">
        <div class="modal">
            <div class="form_container">
                <Form/>
            </div>
            <div
                class="modal_background"
                @click="$emit('showModal')"></div>
        </div>
    </transition>
</template>

<script>
import Form from '@/components/UI/Form.vue'

export default {
    transition: 'home',
    components:{
        Form
    }
}
</script>

<style>
    .home-enter-active, .home-leave-active { transition: all .2s; }
    .home-enter, .home-leave-active { 
        opacity: 0;
        transform: scale(1.1);
         }
</style>
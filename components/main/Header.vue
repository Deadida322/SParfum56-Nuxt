<template>
    <div class="header">
        <header>
            <div class="container">
                <div class="logo">
                    <img src="img/logo.png"  alt="Sparfum">
                </div>
                <div class="header_links">
                        <nuxt-link 
                            v-for="item in items" 
                            :key='item.name' 
                            class="header_link"
                            :to="item.link">
                            <div class="line"></div>
                            {{item.name}}
                        </nuxt-link>
                    </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return{
            items:[
                {
                    name: 'Каталог',
                    link: '/catalog'
                },
                {
                    name: 'Заказать',
                    link: '/order'
                },
                {
                    name: 'Консультация',
                    link: '/consult'
                },
            ]
        }
    }

}
</script>

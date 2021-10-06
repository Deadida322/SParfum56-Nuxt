<template>
  <div class="page">
    <Modal
      v-show="show_modal"
      @showModal="showModal()"/>
    <div>
      <Carousels :items="items" :images="images"/>
    </div>
    <Comments @show_modal="showModal()" :comments="comments"/>
    <Shop :products="products"/>
    <OrderInfo/>
    <Map/>
    <Footer/>
  </div>
</template> 

<script>

import Carousels from '@/components/main/Carousels'
import Comments from '@/components/main/Comments'
import Shop from '@/components/main/Shop'
import OrderInfo from  '@/components/main/OrderInfo'
import Map from '@/components/main/Map'
import Footer from '@/components/main/Footer'
import Modal from '@/components/UI/Modal'

export default {
  components:{
    Carousels,
    Comments, 
    Shop, 
    OrderInfo,
    Map,
    Footer,
    Modal
  },
  methods:{
    showModal(){
      this.show_modal=!this.show_modal
    }
  },
  data(){
    return{
      show_modal: true,
      images:[
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
      ],
      items:[
        {
          name: 'J-001',
          description: 'some description of J-001',
          image: 'img/p2.png'
        },
        {
          name: 'C-007',
          description: 'some description of C-007',
          image: 'img/p3.png'
        },
        {
          name: 'K-252',
          description: 'some description of k252',
          image: 'img/p2.png'
        },
      ],
      comments:[
        {
          name: 'Анастасия Базанова',
          image: 'img/a1.jpg',
          txt: `Любимый sparfum 😻такие стойкие ароматы, что никаких сомнений при покупке быть не может 
          ❤ Не стоит расстраиваться, когда твой аромат снимают с производства😩 на помощь приходит sparfum и предлагает его по отличной ц
          ене и качеству😛`
        },
        {
          name: 'Катерина Улькина',
          image: 'img/a2.jpg',
          txt: `Я приобрела для себя новый аромат от sparfum✨Так порадовал 
          доброжелательный персонал, однозначно помогут верно определиться с выбором🤗
           Поэтому мой новый аромат Byredo BAL D'AFRIQUE
          Ведь с первых нот аромат вызывает необъяснимое чувство восторга💫💕`
        }
      ],
      products:[
        {
          name: 'Px-39',
          sex: 'woman',
          description: 'for woman its a zaebis',
          price: 1890,
          img: 'img/p2.png'
        },
        {
          name: 'Px-34',
          sex: 'woman',
          description: 'for woman its a zaebis',
          price: 1890,
          img:'img/p3.png'
        },
        {
          name: 'sD0-49',
          sex: 'man',
          description: 'for man its a zaebis',
          price: 2400,
          img:'img/p2.png'
        },
        {
          name: 'Px-39',
          sex: 'woman',
          description: 'for woman its a zaebis',
          price: 1890,
          img:'img/p3.png'
        },
        {
          name: 'Px-39',
          sex: 'woman',
          description: 'for woman its a zaebis',
          price: 1890,
          img:'img/p2.png'
        },
        {
          name: 'Px-39',
          sex: 'woman',
          description: 'for woman its a zaebis',
          price: 1890,
          img:'img/p3.png'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
  
</style>
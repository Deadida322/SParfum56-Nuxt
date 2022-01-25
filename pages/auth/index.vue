<template>
    <div class="page">
        <div class="auth_container">
            <AuthForm @onSubmit="onSubmit"/>
        </div>
    </div>
</template>


<script>
import AuthForm from '@/components/UI/Auth_form.vue'
import axios from 'axios'


export default {
    data(){
        return{
            apiKey: 'AIzaSyAXCm0bACeTjCFpg4tvDmovNgYBsbREaok',
            user:{},
            idToken: ''
        }
    },
    components:{
        AuthForm
    },
    methods: {
        onSubmit(user){
            axios.post(
                `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`,
                 {
                    email: user.email,
                    password: user.password,
                    returnSecureToken: true
                })
                .then((res)=>{
                    this.idToken=res.data.idToken
                    this.$store.dispatch('setToken', this.idToken),
                    this.$cookies.set('idToken', this.idToken)
                    this.$router.push('/admin')
                    console.log(this.$cookies.get('idToken'))
                })
        }
    }
}
</script>
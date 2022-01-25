<template>
    <form @submit.prevent="onSubmit()" action="" class="main_form">
        <div class="form_header">Вход в админ панель</div>
        <input 
            v-model.trim="email" 
            type="text" 
            placeholder="Логин" 
            :class="{invalid:($v.email.$anyError)}"
            class="form_input"/>
        <input 
            v-model="password" 
            type="password" 
            placeholder="Пароль"
            :class="{invalid:($v.password.$anyError)}" 
            class="form_input"/>
        <button type="submit">Отправить</button>
    </form>
</template>


<script>
import {email, required, minLength} from 'vuelidate/lib/validators'
export default {
    data(){
        return {
            email: '',
            password: ''
        }
    },
    validations:{
        email:{email, required},
        password:{required, minLength: minLength(6)}
    },
    methods:{
        onSubmit(){
            if(this.$v.$invalid){
                this.$v.$touch()
                console.log(this.$v.email.$anyError)
                return
            }
            
            let [email, password] = [this.email, this.password]

            
            this.$emit('onSubmit', {
                email,
                password
            })
        }
    }
}
</script>
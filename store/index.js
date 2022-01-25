export const state = () =>{
    token: null
}

export const mutations = {
    setToken(state, token){
        state.token = token        
    }
}

export const actions = {
    setToken(context,token){
        console.log(localStorage.getItem('lol'))
        context.commit('setToken', token);
    }
}

export const getters = {
    getToken(state){
        return state.token
    }
}
export default(context)=>{
    context.$cookies.get('idToken')
    if(!context.$cookies.get('idToken')){
       context.redirect('/')
    }
}
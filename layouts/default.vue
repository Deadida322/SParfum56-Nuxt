<template>
    <client-only>
        <div>
            <Nuxt/>
            <Header/>
        </div>
    </client-only>
    
</template>

<script>
import Header from '@/components/main/Header'
export default {
    components:{ Header},
}
</script>
<template>
    <div class="my-content">
        <hello-component />
        <router-link to="/list">Go to List</router-link>
    </div>
</template>

<script>
    import HelloComponent from '@/components/Hello.vue'

    export default {
        components: {
            HelloComponent,
        }
    }
</script>


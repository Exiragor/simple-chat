<template>
    <div class="my-content">
        <incr-component />
        <router-link to="/list">Go to List</router-link>
    </div>
</template>

<script>
    import IncrComponent from '@/components/Increment.vue'

    export default {
        components: {
            IncrComponent,
        }
    }
</script>


<template>
    <div class="my-content">
        <list-component v-bind:items="['cat', 'dog']" />
        <router-link to="/">Go to Home</router-link>
    </div>
</template>

<script>
    import ListComponent from '@/components/List.vue'

    export default {
        components: {
            ListComponent,
        }
    }
</script>
<template>
    <div class="my-content">
        <hello-component />
        <list-component v-bind:items="['cat', 'dog']" />
    </div>
</template>

<script>
    import HelloComponent from '@/components/Hello.vue'
    import ListComponent from '@/components/List.vue'

    export default {
        components: {
            HelloComponent,
            ListComponent
        }
    }
</script>


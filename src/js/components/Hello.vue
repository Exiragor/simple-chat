<template>
    <div class="row">
        <div class="col-md-12">
            <h2>{{ increm }}</h2>
            <button @click="increment">+1</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'hello',

        data() {
            return {
                increm: 0
            }
        },

        methods: {
            increment() {
                this.increm++;
            }
        }
    }
</script>


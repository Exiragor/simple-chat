<template>
    <div class="row">
        <div class="col-md-12">
            <h2>{{test}}</h2>
            <button @click="plusCounter">+1</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                test: 0
            }
        },

        methods: {
            plusCounter() {
                this.test += 1;
            }
        }
    }
</script>


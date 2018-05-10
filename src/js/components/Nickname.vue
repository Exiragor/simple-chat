<template>
    <div class="row">
        <div class="col-md-12">
            <div class="form-group">
                <label for="nick">Никнейм</label>
                <input v-model="nickname" id="nick" type="text" class="form-control">
                <label for="color">Цвет(hex: 6c757d)</label>
                <input v-model="nameColor" id="color" type="text" class="form-control">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'nickname',

        computed: {
            nickname: {
                get() {
                    return this.$store.getters.nickname.name
                },
                set(value) {
                    this.$store.dispatch('changeNickName', {name: value})
                },
            },
            nameColor: {
                get() {
                    return this.$store.getters.nickname.color
                },
                set(value) {
                    this.$store.dispatch('changeNickName', {color: value})
                },
            }
        }
    }
</script>
<template>
    <div class="wrapper">
        <header-component />
        <div class="container center-content">
            <router-view />
        </div>
    </div>
</template>

<script>
    import io from 'socket.io-client';
    import { bus } from './bus'

    import HeaderComponent from "@/components/Header.vue";

    const socket = io('http://localhost:4050');

    bus.$on('sendMessage', (msg) => {
        socket.emit('message', msg);
    });

    export default {
        components: { HeaderComponent },

        mounted() {
            let that = this;
            let nickname = this.$store.getters.nickname;

            if (nickname.name === '') {
                let name = 'Guest' + Date.now()
                let color = '#6c757d'

                this.$store.dispatch('changeNickName', { name, color });
            }

            // socket on message
            socket.on('message', function(msg){
                that.$store.dispatch('addMessage', msg)
            });
        }
    }
</script>

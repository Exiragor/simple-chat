<template>
    <div class="row">
            <div class="panel panel-default">
                <div class="panel-heading">Chat</div>
                <div class="panel-body">
                    <div class="container">
                        <div class="row message-bubble" v-for="msg in messages">
                            <p class="text-muted"><span :style="{color: msg.color}">{{ msg.author }}</span></p>
                            <span>{{ msg.text }}</span>
                        </div>
                    </div>
                    <div class="panel-footer">
                        <div class="input-group">
                            <input type="text" class="form-control" v-model="text" @keypress.enter="sendMessage">
                            <span class="input-group-btn">
                                <button @click="sendMessage" class="btn btn-default" type="button">Send</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    import { bus } from '@/bus'

    export default {
        name: 'chat',

        data() {
            return {
                text: '',
            }
        },

        methods: {
            sendMessage() {
                let msg = { text: this.text, author: this.nickname.name, color: this.nickname.color }

                bus.$emit('sendMessage', msg)
                this.$store.dispatch("addMessage", msg)

                this.text = ""
            }
        },

        computed: {
            messages() {
                return this.$store.getters.messages
            },
            nickname() {
                return this.$store.getters.nickname
            },
        },
    }
</script>
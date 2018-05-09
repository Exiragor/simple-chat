<template>
    <div class="row">
            <div class="panel panel-default">
                <div class="panel-heading">Panel heading without title</div>
                <div class="panel-body">
                    <div class="container">
                        <div class="row message-bubble" v-for="msg in messages">
                            <p class="text-muted">Alex</p>
                            <span>{{ msg }}</span>
                        </div>
                    </div>
                    <div class="panel-footer">
                        <div class="input-group">
                            <input type="text" class="form-control" v-model="message">
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
    import io from 'socket.io-client';

    const socket = io('http://localhost:4050');

    export default {
        name: 'chat',

        data() {
            return {
                messages: [],
                message: "",
            }
        },

        methods: {
            sendMessage() {
                socket.emit('message', this.message);
                this.message = "";
            }
        },

        mounted() {
            let that = this;
            socket.on('message', function(msg){
                that.messages.push(msg);
            });
        }
    }
</script>
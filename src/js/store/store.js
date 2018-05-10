import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        messages: [],
        nickname: {name: '', color: ''},
    },
    actions: {
        changeNickName({commit}, nickname) {
            commit('CHANGE_NICKNAME', nickname)
        },
        addMessage({commit}, msg) {
            commit('ADD_MESSAGE', msg)
        },
    },
    mutations: {
        CHANGE_NICKNAME(state, nickname) {
            let name = (nickname.name !== undefined) ? nickname.name : state.nickname.name
            let color = (nickname.color !== undefined) ? nickname.color : state.nickname.color
            state.nickname.name = name;
            state.nickname.color = color;
        },
        ADD_MESSAGE(state, message) {
            state.messages.push(message)
        },
    },
    getters: {
        messages(state) {
            return state.messages
        },
        nickname(state) {
            return state.nickname
        }
    }
});

export default store;

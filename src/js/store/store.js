import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const state = {
    messages: [],
    nickname: {name: '', color: ''},
}

export const actions = {
    changeNickName({commit, state}, nickname) {
        let name = (nickname.name !== undefined) ? nickname.name : state.nickname.name
        let color = (nickname.color !== undefined) ? nickname.color : state.nickname.color
        commit('CHANGE_NICKNAME', { name, color })
    },
    addMessage({commit}, msg) {
        commit('ADD_MESSAGE', msg)
    },
}

export const mutations = {
    CHANGE_NICKNAME(state, nickname) {
        state.nickname.name = nickname.name;
        state.nickname.color = nickname.color;
    },
    ADD_MESSAGE(state, message) {
        state.messages.push(message)
    },
}

export const getters = {
    messages(state) {
        return state.messages
    },
    nickname(state) {
        return state.nickname
    }
}


export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
});

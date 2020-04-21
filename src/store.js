import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import moduleA from './moduleA/index'

export default new Vuex.Store({
    modules: {
        a: moduleA
    }
    //五大将
    // state: {
    //     count: 111,
    //     msg: 'hahaha vuex',

    // },
    // getters: {
    //     musicData(state) {
    //         return state.musicData
    //     }
    // },
    // mutations: {
    //     // addCount(state, num) {
    //     //     return state.count += num
    //     // }
    //     // addCount(state, num) {
    //     //     return state.count += payload.num
    //     // }
    //     addCount(state, num) {
    //         return state.count += num
    //     }
    // },
    // actions: {
    //     addCount({ commit }, payload) {
    //         console.log(payload)
    //         setTimeout(() => {
    //             commit('addCount', payload.num)
    //         }, 2000)
    //     }
    // }
})
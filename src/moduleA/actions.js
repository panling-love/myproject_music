export default {
    addCount({ commit }, payload) {
        console.log(payload)
        setTimeout(() => {
            commit('addCount', payload.num)
        }, 2000)
    }
}
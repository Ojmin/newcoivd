import Vue from 'vue'
import Vuex from 'vuex'
const state = {
    data: []
}
const getters = {

    getChangedData(state) {  //方法名随意,主要是用来承载变化的getChangedDate的值
        return state.data
    }
}
const mutations = {

    newData(state, data) { //同上，这里面的参数除了state之外还传了需要增加的值date
        state.data = data;
    }
};
const actions = {
     //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性      
    setNewData(context, data) {   
        context.commit('newData', data)
    }
};
Vue.use(Vuex)
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions

})
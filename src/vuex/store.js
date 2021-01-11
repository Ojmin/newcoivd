import Vue from 'vue'
import Vuex from 'vuex'
import { globalDailyHistory } from '@/commonfun/data.js'
const state = {
    data: globalDailyHistory.slice(0, 15),
    tableData: [],
    currentPage: 1,
    filterDate: ''

}
const getters = {
    getTableData(state) {
        return state.tableData
    },
    getCurrentPage(state) {
        return state.currentPage
    },
    getFilterDate(state) {
        return state.filterDate
    },
    getChangedData(state) { //方法名随意,主要是用来承载变化的getChangedDate的值
        return state.data
    }
}
const mutations = {
    newTableData(state, data) {
        state.tableData = data
    },
    newCurrentPage(state, currentPage) {
        state.currentPage = currentPage
    },
    newFilterDate(state, filterDate) {
        state.filterDate = filterDate
    },
    newData(state, data) { //同上，这里面的参数除了state之外还传了需要增加的值date
        state.data = data;
    }
};
const actions = {
    //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性    
    setNewTableData(context, data) {
        context.commit('newTableData', data)
    },
    setNewCurrentPage(context, currentPage) {
        context.commit('newCurrentPage', currentPage)
    },
    setNewFilterDate(context, filterDate) {
        context.commit('newFilterDate', filterDate)
    },
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
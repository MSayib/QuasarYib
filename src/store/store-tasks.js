import Vue from 'vue'
import { uid } from 'quasar'

const state = {
    tasks: {
        // 'ID1': {
        //     name: "Sarapan",
        //     completed: false,
        //     dueDate: "2020/04/03",
        //     dueTime: "08:30"
        // },
        // 'ID2': {
        //     name: "Mandi",
        //     completed: false,
        //     dueDate: "2020/04/03",
        //     dueTime: "09:00"
        // },
        // 'ID3': {
        //     name: "Belajar",
        //     completed: false,
        //     dueDate: "2020/04/03",
        //     dueTime: "09:30"
        // },
        // 'ID4': {
        //     name: "Main",
        //     completed: false,
        //     dueDate: "2020/04/03",
        //     dueTime: "13:00"
        // },
    }
    // tasks: [
    //     {
    //         id: 1,
    // name: "Sarapan",
    // completed: false,
    // dueDate: "2020/04/03",
    // dueTime: "08:30"
    //     },
    //     {
    //         id: 2,
    //         name: "Mandi",
    //         completed: false,
    //         dueDate: "2020/04/03",
    //         dueTime: "09:00"
    //     },
    //     {
    //         id: 3,
    //         name: "Belajar",
    //         completed: false,
    //         dueDate: "2020/04/03",
    //         dueTime: "10:00"
    //     }
    // ]
}

const mutations = {
    updateToDo(state, payload) {
        Object.assign(state.tasks[payload.id], payload.updates)
    },
    deleteToDo(state, id) {
        // console.log('hapus id: ', id)
        // delete state.tasks[id]
        Vue.delete(state.tasks, id)
    },
    addToDo(state, payload) {
        Vue.set(state.tasks, payload.id, payload.todo)
    }
}

const actions = {
    updateToDo({ commit }, payload) {
        commit('updateToDo', payload)
    },
    deleteToDo({ commit }, id) {
        commit('deleteToDo', id)
    },
    addToDo({ commit }, todo) {
        let todoId = uid()
        let payload = {
            id: todoId,
            todo: todo
        }
        commit('addToDo', payload)
    }
}

const getters = {
    dataToDo: (state) => {
        return state.tasks
    }
}

export default {
    namespaced: true,
    //namespaced berfungsi untuk meng-allow project menggunakan lebih dari 1 store module,
    //misalkan saat ini menggunakan store-tasks.js, dan ingin menggunakan store-tasks2.js
    state,
    mutations,
    actions,
    getters
}
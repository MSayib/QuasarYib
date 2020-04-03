const state = {
    tasks: {
        'ID1': {
            name: "Sarapan",
            completed: false,
            dueDate: "2020/04/03",
            dueTime: "08:30"
        },
        'ID2': {
            name: "Mandi",
            completed: false,
            dueDate: "2020/04/03",
            dueTime: "09:00"
        },
        'ID3': {
            name: "Belajar",
            completed: false,
            dueDate: "2020/04/03",
            dueTime: "09:30"
        },
        'ID4': {
            name: "Main",
            completed: false,
            dueDate: "2020/04/03",
            dueTime: "13:00"
        },
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
        console.log('Payload: ', payload);
        Object.assign(state.tasks[payload.id], payload.updates)
    }
}

const actions = {
    updateToDo({ commit }, payload) {
        commit('updateToDo', payload)
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
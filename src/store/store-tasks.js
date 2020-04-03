const state = {
    tasks: [
        {
            id: 1,
            name: "Sarapan",
            completed: false,
            dueDate: "2020/04/03",
            dueTime: "08:30"
        },
        {
            id: 2,
            name: "Mandi",
            completed: false,
            dueDate: "2020/04/03",
            dueTime: "09:00"
        },
        {
            id: 3,
            name: "Belajar",
            completed: false,
            dueDate: "2020/04/03",
            dueTime: "10:00"
        }
    ]
}

const mutations = {

}

const actions = {

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
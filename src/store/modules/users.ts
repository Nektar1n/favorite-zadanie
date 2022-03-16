import axios from "axios";

export default {
    state: {
        users:[]
    },
    getters: {
        allUsers(state:any){
            return state.users
        },
        allCount(state:any){
            return state.users.length
        },
    },
    mutations: {
        updateUsers(state:any,users:any){
            state.users=users
        }
    },
    actions: {
        async fetchUsers(ctx:any, page=1){

            const res=axios.get(
                'https://reqres.in/api/users?page='+page
            )
            const users=(await res).data.data

            ctx.commit('updateUsers',users)

        }
    },
}

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
            // localStorage.setItem('UsersList',JSON.stringify(users))
        }
    },
    actions: {
        async fetchUsers(ctx:any, page=1){
            // const res = await fetch(
            //     'https://jsonplaceholder.typicode.com/users?_limit='+limit
            // )
            // const users = await res.json()
            const res=axios.get(
                'https://reqres.in/api/users?page='+page
            )
            const users=(await res).data.data
            // then(res=>{
            //     users=res.data
            // })
            ctx.commit('updateUsers',users)
            // dispatch('sayHello')
            //
            // commit('updateUsers', users)
        }
    },
}

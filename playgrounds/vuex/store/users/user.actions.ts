export default{
    fetchUsers({commit}){
        const users = [{id:1,fullName:'Evan You'},{id:2,fullName:'Misko'}];
        commit('setUsers',users)
    }    
}
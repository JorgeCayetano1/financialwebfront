/* eslint-disable */

import financialApi from 'axios'

class userService {
    async searchUsers(){
        return await financialApi.get('https://localhost:8081/api/search-users')
    }

    async saveUsers(params){
        return await financialApi.post(`https://localhost:8081/api/save-user/`, params)
    }

    async editUsers(id, params){
        return await financialApi.put(`https://localhost:8081/api/edit-user/${id}`, params)
    }

    async getUser(id){
        return await financialApi.get(`https://localhost:8081/api/get-user/${id}`)
    }

    async deleteUser(id){
        return await financialApi.delete(`https://localhost:8081/api/delete-user/${id}`)
    }
}
export default new userService()
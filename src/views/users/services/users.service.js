/* eslint-disable */

import financialApi from 'axios'

class userService {
    async searchUsers(){
        return await financialApi.get('https://localhost:8081/api/search-users')
    }
}
export default new userService()
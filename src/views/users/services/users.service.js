/* eslint-disable */

import { financialApi } from 'axios'

async function searchUsers(){
    const data = await financialApi.get('​/api​/search-users')
    return data
}
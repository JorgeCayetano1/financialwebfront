<template>
  <div>
    <b-table striped hover ></b-table>
  </div>
</template>

<script>
import { financialApi } from 'axios'

export default {
    data(){
        return{
            item: []
        }
    },
    async created(){
        await this.searchUsers()
    },
    methods: {
        async searchUsers(){
            const data = await financialApi.get('​/api​/search-users')
            this.item = data
        }
    }
}
</script>
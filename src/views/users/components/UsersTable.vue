<template>
  <div>
    <b-table striped hover ></b-table>
  </div>
</template>

<script>
import FinancialApi from '@/views/users/services/users.service'

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
          this.item = await FinancialApi.searchUsers()
        }
    }
}
</script>
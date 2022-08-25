<template>
  <div>
    <br>
    <b-button
        v-b-modal.AddEditUsers
        variant="success"
        style="position: relative;"
        title="Users"
    >Add User</b-button>
    <b-table striped hover :items="item"
    style="width: 70%; margin-left: 200px; margin-top: 150px;"
    ></b-table>

    <ModalAddEditUsers/>
  </div>
</template>

<script>
//modals
import ModalAddEditUsers from '@/views/users/modals/AddEditUsers.vue'

import FinancialApi from '@/views/users/services/users.service'

export default {
    data(){
        return{
            item: []
        }
    },
  components: {
    ModalAddEditUsers,
  },
    async created(){
        await this.searchUsers()
    },
    methods: {
        async searchUsers(){
          const data = await FinancialApi.searchUsers()
          this.item = data.data
        }
    }
}
</script>
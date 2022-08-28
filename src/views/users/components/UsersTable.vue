<template>
  <div>
    <br>
    <b-button
        @click="showModal"
        variant="success"
        style="position: relative;"
    >Add User</b-button>
    <b-table
      ref="userTable"
      striped hover
      sticky-header
      :busy.sync="isBusy"
      :fields="fields"
      :items="item"
      style="width: 70%; margin-left: 200px; margin-top: 150px;"
    >
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>

      <template
      #cell(full_name)="data"
      >
        {{ data.item.first_name }} {{ data.item.last_name }}
      </template>

      <template
          #cell(status)="data"
      >
        {{ data.item.status === true ? 'Active' : 'Inactive' }}
      </template>

      <template
          #cell(Actions)="data"
      >
        <b-row>
          <b-col>
            <b-button
                variant="warning"
                size="sm"
                @click="openModalEditUsers(data.item)"
            >
              <b-icon icon="tools"/>
            </b-button>
          </b-col>
          <b-col>
            <b-button
                variant="danger"
                size="sm"
                @click="deletedUser(data.item.id)"
            >
              <b-icon
                  icon="trash"
              />
            </b-button>
          </b-col>
        </b-row>
      </template>

    </b-table>
<!--    <iframe-->
<!--        src='https://webchat.botframework.com/embed/db-senati-bot?s=aJuprCYT3sM.DO8ypx4tBLDMvPdEP_wCKHM9y6p6BGvZYAwxJEHxbN0'-->
<!--        style='min-width: 400px; width: 20%; min-height: 500px; margin-left: 660px; background-color: blueviolet'-->
<!--    ></iframe>-->
    <ModalAddEditUsers
        v-if="modalAddEditUsers"
        @hidden="hideModal"
        :user-data="userData"
        @refresh="searchUsers"
    />
  </div>
</template>

<script>
import fields from '@/views/users/components/fields.users'

//modals
import ModalAddEditUsers from '@/views/users/modals/AddEditUsers.vue'

import FinancialApi from '@/views/users/services/users.service'

export default {
    data(){
        return{
          isBusy: false,
          modalAddEditUsers: false,
          fields: fields,
          item: [],
          userData: {}
        }
    },
  components: {
    ModalAddEditUsers,
  },
    async created(){
      await this.searchUsers()
    },
    methods: {
      showModal() {
        this.modalAddEditUsers = true
      },
      hideModal() {
        this.modalAddEditUsers = false
        this.userData = {}
        this.$emit('hidden')
      },
        async searchUsers(){
          this.isBusy = true
          const data = await FinancialApi.searchUsers()
          if( data.status === 200) {
            this.isBusy = false
            this.item = data.data
          }
        },
      async deletedUser(id) {
        this.isBusy = true
        const response = await FinancialApi.deleteUser(id)
        if (response.status === 204) {
          await this.searchUsers()
          console.log('Deleted Successfully')
        }
      },
      openModalEditUsers(item) {
        this.userData = item
        this.showModal()
      },
    }
}
</script>
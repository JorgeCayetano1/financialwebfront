<template>
    <b-modal
    ref="AddEditUsers"
    v-model="modalAddEditUsers"
    @hidden="closeModal"
    hide-header-close
    :title="Object.keys(userData).length === 0 ? 'Add Users' : 'Edit Users'"
    >
      <b-row
      cols="2"
      >
        <b-col>
          <b-form-group
          label="First Name"
          >
            <b-form-input
            v-model="form.first_name"
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
          label="Last Name"
          >
            <b-form-input
            v-model="form.last_name"
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
          label="Phone"
          >
            <b-form-input
            v-model="form.phone"
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
          label="email"
          >
            <b-form-input
            v-model="form.email"
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
          label="status"
          >
            <b-form-checkbox v-model="form.status">
              Active
            </b-form-checkbox>
          </b-form-group>
        </b-col>
      </b-row>
      <template #modal-footer>
        <div>
          <b-button
          variant="success"
          @click="Object.keys(userData).length === 0? saveUsers() : editUsers()"
          >{{ Object.keys(userData).length === 0 ? 'Add' : 'Edit' }}</b-button>
        </div>
      </template>
    </b-modal>
</template>

<script>

import FinancialApi from '@/views/users/services/users.service'

export default {
  name: "AddEditUsers",
  props: {
    userData: {
      type: Object,
    }
  },
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        status: false,
      },
      modalAddEditUsers: false,
    }
  },
  async created() {
    this.modalAddEditUsers = true
    if(Object.keys(this.userData).length !== 0) {
      await this.getUsers()
    }
  },
  methods: {
    closeModal(){
      this.modalAddEditUsers = false
      this.$emit('hidden')
    },
    async saveUsers() {
      const params = this.form
      const response = await FinancialApi.saveUsers(params)
      if (response.status === 201) {
        this.$emit('refresh')
        this.closeModal()
      }else {
        this.closeModal()
      }
    },
    async getUsers() {
      const response = await FinancialApi.getUser(this.userData.id)
      if (response.status === 200) {
        this.form = response.data
      }
    },
    async editUsers() {
      const params = this.form
      const response = await FinancialApi.editUsers(this.userData.id, params)
      if (response.status === 204) {
        this.$emit('refresh')
        this.closeModal()
      }
    },
  }
}
</script>

<style scoped>

</style>
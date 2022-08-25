<template>
  <div>
    <b-modal
    id="AddEditUsers"
    ref="AddEditUsers"
    hide-header-close
    title="Users"
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
            <b-form-input/>
          </b-form-group>
        </b-col>
      </b-row>
      <template #modal-footer>
        <div>
          <b-button
          variant="success"
          v-on:click="saveUsers"
          >Add</b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>

import FinancialApi from '@/views/users/services/users.service'

export default {
  name: "AddEditUsers",
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        status: true,
      }
    }
  },
      methods: {
        closeModal(){
          this.$refs['AddEditUsers'].hide()
        },
        async saveUsers() {
          const params = this.form
          const response = await FinancialApi.saveUsers(params)
          if (response.status === 200) {
            this.closeModal()
          }else {
            this.closeModal()
          }
        },
      }

}
</script>

<style scoped>

</style>
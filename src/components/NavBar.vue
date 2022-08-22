<template>
  <div>
    <b-navbar type="dark" variant="dark" class="ml-3">
      <b-navbar-brand >
        <img src="../assets/logo.png" class="d-inline-block align-top" alt="Kitten">
        Financial
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item :to="{name: 'home'}">Home</b-nav-item>

        <b-nav-item-dropdown text="Tab" right>
          <b-dropdown-item 
          :to="{name: 'users'}"
          >Users</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  height: 35px;
  width: 35px;
}
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>

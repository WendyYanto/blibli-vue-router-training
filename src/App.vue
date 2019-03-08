<template>
  <div id="app">
    <router-link to="/">
      <img src="@/assets/blibli-logo.png" alt="blibli-logo">
    </router-link>
    <div class="nav-link">
      <router-link class="button" to="/">
        Home      
      </router-link>
      <router-link class="button" to="/contact-us">
        Register
      </router-link>
      <router-link class="button" to="/members">
        Member
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scope>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.button{
  background-color: #078ed3;
  padding: 5px;
  border-radius: 5px;
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  margin: 0 10px;
}

.nav-link{
  margin: 10px 0;
}

</style>

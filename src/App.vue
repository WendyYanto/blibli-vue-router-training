<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components : {
    Navbar
  }
}
</script>

<style scope>
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

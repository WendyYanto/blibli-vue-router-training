<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import userApi from '@/api/users'
import {mapActions} from 'vuex'

export default {
  name: 'App',
  components : {
    Navbar
  },
  methods: {
    ...mapActions([
      'getUserData'
    ])
  },
  created () {
    this.getUserData()
    // this.$store.dispatch('getUserData')
  }
}
</script>

<style>

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

@font-face{
  font-family: 'DINPro';
  src: url('./assets/fonts/DINPro-Medium.otf');
}

body,html{
  font-family: 'DINPro';
}
</style>

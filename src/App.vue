<template>
  <div id="app">
    <div v-if="!!$store.state.user">
      <TopBar/>
      <div class="main-content">
        <NavBar/>
        <router-view/>
      </div>
    </div>
    <div v-else>
       <Login/>
    </div>
  </div>
</template>
<script>
import Login from "./components/Login";
import TopBar from "./components/Topbar";
import NavBar from "./components/navbar";

export default {
  components:{Login, TopBar, NavBar},
 watch:{
    "$store.state.user":{
      deep:true,
      handler(new_val){
        if( new_val){
          localStorage.setItem('user', JSON.stringify(new_val));
        } else {
          localStorage.removeItem('user')
        }
      }
    }
  },
  mounted(){
    var user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.$store.state.user = user;
    }
  }
};
</script>
<style src="./style.css"></style>
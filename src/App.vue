<template>
  <div id="app">
    <div v-if="is_logged">
      <TopBar/>
      <div class="main-content">
        <NavBar/>
        <router-view/>
      </div>
    </div>
    <Login v-else/>
  </div>
</template>
<script>
import Login from "./components/Login";
import TopBar from "./components/Topbar"
import NavBar from "./components/navbar"

export default {
  components:{Login, TopBar, NavBar},
  data() {
    return { 
      is_logged: !!localStorage.getItem("user"),
    };
  },
  methods: {

  },
};
</script>
<style src="./style.css"></style>
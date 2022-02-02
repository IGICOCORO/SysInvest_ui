<template>
  <div class="login">
        <form class="login-form">
          <h1>Login</h1>
            <div class="field">
                <label for="">Username</label>
                <input type="text" v-model="username">
            </div>
            <div class="field">
              <label for="">Password</label>
              <input  type="password" v-model="password">
            </div>
              <router-link to="/">
                <center><button class="btn" @click.prevent="logIn">Login</button></center>
              </router-link>       
        </form>
      </div>
</template>
<script>
export default {
components:{},
name: 'Login',
data(){
  return {
    is_logged : true,
    username : '',
    password :'',
    logs:"",
  }
},
mounted() {
},
methods:{
  logIn(){
   const utilisateur  = this.$store.state.liste_users.filter(user => user.username == this.username && user.password == this.password)
    if(utilisateur.length > 0){
      const new_user = {
        username : this.username,
        password : this.password
      }
      localStorage.setItem('user', new_user)
      window.location.reload();
    }else{
      this.logs = "User not found "
    }
    
  }
}
}
</script>

<style scoped>
h1{
  text-align:center;
  font-family:"Lucida Calligraphy";
  font-weight:bold;
}
* {
  margin: 0px; 
  padding: 0px; 
  box-sizing: border-box;
}
input{
  border-radius:10px;
  border-color:transparent;
  background-color:#fff
}
.login{
  background-color: fff;
  height: 100%;
  overflow-y: auto!important;
  background:url("../assets/back.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
h2{
  margin-bottom: 20px;
}
.login-form{

  max-width: 350px;
  padding: 15px 30px;
  margin: 150px auto;
  box-shadow: 0px 1px 10px black;
  border-radius:30px;
}
.input{
  height: 100px;
}
.btn{
  background-color:#0d6efd;
  border-color:#0d6efd;
  color:#fff;
  font-size:20px;
  font-weight:bold;
  font-family:"Helvetica Neue", Arial, "Noto Sans",
}


</style>
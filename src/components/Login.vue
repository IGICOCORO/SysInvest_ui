<template>
  <div class="login">
        <form class="login-form">
          <span>
            <img class="logo" src="../assets/logo.png" />
          </span>
            <div class="field">
                <label for="">Username</label>
                <input type="text" v-model="username">
            </div>
            <div class="field">
              <label for="">Password</label>
              <input type="password" v-model="password">
            </div>
              <router-link to="/">
                <center><button class="btn btn-primary" @click.prevent="logIn">login</button></center>
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
.logo{
  font-size: 60px; 
  color: #333333;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #fff;
  margin: 0 auto;
}
* {
  margin: 0px; 
  padding: 0px; 
  box-sizing: border-box;
}
.login{
  background-color: fff;
  height: 100%;
  overflow-y: auto!important;
  border-radius: 30px;
}
h2{
  margin-bottom: 20px;
}
.login-form{
  max-width: 350px;
  padding: 15px 30px;
  margin: 150px auto;
  box-shadow: 0px 1px 20px black;
}
.input{
  height: 100px;
}
</style>
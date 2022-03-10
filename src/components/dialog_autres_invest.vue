<template>
	<div class="popup-body">
    <div class="overlay"></div>
    <div class="modale">
      <div class="absolue">
        <button class="close" @click="close">X</button>
      </div>
      <center>
        <h2>Autres Investissements</h2>
      </center>
      <form class="form">
         <div class="group"> 
        <div class="field">
          <label>Nom d’investissement:</label>
          <input type="text" id="montant" v-model="nom_investissement">
        </div>
        <div class="field">
          <label for="montant">Montant investi:</label>
          <input type="number" id="montant" v-model="montant_investi">
        </div>
        <div class="field">
          <label>date d’investissement:</label>
          <input type="date" id="montant" v-model="date_investissement">
        </div>
      </div>
       <div class="group"> 
        <div class="field">
          <label for="details">Benefice previsionnel:</label>
         <input type="number" id="montant" v-model="benefice">
        </div> 
         <div class="field">
          <label for="details">Date de fin de cet investissment:</label>
         <input type="date" id="montant" v-model="date_fin_investissement">
        </div>
        <div class="buttons">
          <button class="reset" type="reset"  @click="annuler()">Reset</button>
          <button  class="submit"  type="submit" @close="close" @click.prevent="submitAutresInvest()">Soumettre</button>
        </div>
      </div>
      </form>
    </div>
  </div>
</template>
<script>
	import axios from "axios"
  export default {
    data(){
      return{
        nom_investissement :null,
        montant_investi : null,
        date_investissement : null,
        benefice :null,
        date_fin_investissement :null,
      }
    },
    computed:{
    headers(){
      return {
        headers: {
          "Authorization": "Bearer " + this.$store.state.user.access
        }
      }
    }
    },
    methods: {
      submitAutresInvest(){
        let data = {
          nom_investissement:this.nom_investissement,
          montant_investi:this.montant_investi,
          date_investissement:this.date_investissement,
          benefice:this.benefice,
          date_fin_investissement:this.date_fin_investissement,
        }
         axios.post(this.$store.state.url+'/autres_investssements/', data ,this.headers)
         .then((response)=>{
          this.$store.state.autres_investissements.push(response.data)
          this.close()
         }).catch((error) => {
        console.log(error)
      })
      },
      close() {
        this.$emit('close');
      }
    },
  };
</script>
<style>
.reset{
  background:#FF6666;
  border-radius:30px;
  width:100px;
}
.submit{
  background:#3399FF;
    border-radius:30px;
    width:100px;
}
*{
  justify-content:center;
}
.popup-body{
  width:100%;
  top:0;
  bottom:0;
  left:0;
  right:0;
}
.overlay{
  background:rgba(0,0,0,0.5);
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
}
.form{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;
}
.modale{
  background:#fff;
  height:500px;
  width:700px;
  color:#333;
  padding:20px;
  position:fixed;
  top:20%;
   border-radius:10px;
   margin-left:350px;
}
.close{
  background:red;
  width:30px;
  height:30px;
  border-radius:10px;
}
</style>
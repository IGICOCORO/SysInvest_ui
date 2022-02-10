<template>
  <div class="popup-body">
    <div class="overlay"></div>
    <div class="modale">
      <div class="absolue">
        <button class="close" @click="close">X</button>
      </div>
      <form class="form">
        <div class="group"> 
        <div class="field">
          <label>Transport :</label>
          <input type="number" v-model="transport">
        </div>
        <div class="field">
          <label for="montant">Taux:</label>
          <input type="number" v-model="taux">
        </div>
        <div class="field">
          <label>Dédouanement :</label>
          <input type="number" v-model="dedouanement">
        </div>
        <div class="field">
          <label for="details">Autres dépenses:</label>
          <input type="number" v-model="autre_dépenses">
        </div> 
      </div>
       <div class="group"> 
        <div class="field">
          <label for="details">Notes :</label>
          <input type="text" v-model="notes">
        </div>
         <div class="field">
          <label for="details">Date de vente prévisionnelle:</label>
          <input type="date" v-model="date">
        </div>
        <div class="field">
          <label for="details">Prix de vente prévisionnelle :</label>
          <input type="number" v-model="prix_vente_previ">
        </div>
        <div class="buttons">
          <button class="reset" type="reset">Reset</button>
          <button  class="submit"  type="submit" @close="close" @click.prevent="submitImportDarBuja()">Soumettre</button>
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
        transport :null,
        taux : null,
        dedouanement : null,
        autre_dépenses : null,
        notes : null,
        date :null,
        prix_vente_previ :null,
        importdartobuja:[],
        error:''
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
      submitImportDarBuja(){
        let data = {
          transport:this.transport,
          Dédouanement:this.dedouanement,
          taux:this.taux,
          date:this.date,
          autre_dépenses:this.autre_dépenses,
          details:this.notes,
          prix_vente_previ:this.prix_vente_previ,
        }
         axios.post(this.$store.state.url+'/importation_darEsSalam_to_Buja/', data ,this.headers)
         .then((response)=>{
          this.$store.state.importdartobuja.push(response.data)
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
<template>
  <div class="home">
    <button class="create" @click="showModal">Créer</button>
      <div class="motos">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Quantite</th>
            <th>PA Unitaire</th>
            <th>Date</th>
            <th>Autres dépenses</th>
            <th>date</th>
            <th>Date de vente prévisionnelle </th>
            <th>PV prévisionnelle </th>
            <th>options</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for=" moto in motos" :key="moto">
            <td>{{ moto.id }}</td>
            <td>{{ moto.quantite }}</td>
            <td>{{ moto.prix_achat_unitaire }}</td>
            <td>{{ moto.date_achat }}</td>
            <td>{{ moto.autres_depenses }}</td>
            <td>{{ moto.details }}</td>
            <td>{{ moto.date_vente_previ }}</td>
            <td>{{ moto.prix_vente_unitaire_previ }}</td>
            <td>
              <button class="delete" @click="deleteMoto(moto)"><i class="fa fa-trash"></i></button>
              <button class="edit"><i class="fa fa-edit"></i></button>
              <button class="read"><i class="fa fa-eye"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
   <DialogMoto v-show="isModalVisible" @close="closeModal"/>
  </div>
</template>

<script>
  import DialogMoto from '../components/dialog_moto.vue';
  import axios from "axios"
  export default {
    components: {
      DialogMoto,
    },
    data() {
      return {
        quantite: null,
        prix_achat_unitaire:null,
        date_achat :null,
        autres_depenses : null,
        details : null,
        date_vente_previ : null,
        prix_vente_unitaire_previ :null,
        motos:[],
        isModalVisible: false,
        error :''
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
    watch:{
    "$store.state.motos"(new_val){
      this.motos = new_val
    }
  },
    methods: {
     fetchMoto(){    
      axios.get(this.$store.state.url+'/motos/', this.headers)
      .then((response) => {
        this.$store.state.motos = response.data.results
         console.log(response.data.results)
      }).catch((error) => {
        console.log(error)
      })
    },
      deleteMoto(moto){
        if(confirm(`Voulez vous vraiment supprimer cet investissement du Moto ?`)){
        axios.delete(this.$store.state.url+`/motos/${moto.id}/`, this.headers)
        .then((response) => {
          console.log(response.data)
          this.$store.state.motos.splice(
            this.$store.state.motos.indexOf(moto)
          , 1)
        }).catch((error) => {
          console.log(error)
        })
      }
      },
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    },
    mounted(){
    this.fetchMoto()
  }
  };
</script>
<style>
.motos{
  top:0;
  bottom:0;
  left:0;
  right:0;
  width: 100%;
  height: calc(100% - 50px);
}
.home{
  width: 100%;
}
.delete{
  background-color: #FF6666;
  width: 40px;
  height: 40px;
  border-radius: 30px;
}
.edit{
  background-color: #3399FF;
  width: 40px;
  height: 40px;
  border-radius: 30px;
}
.read{
  background-color: #66FF99;
  width: 40px;
  height: 40px;
  border-radius: 30px;
}

</style>
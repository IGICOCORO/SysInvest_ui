<template>
  <div class="home">
    <button class="create" @click="showModal">Créer</button>
      <div class="motos">
      <table>
        <thead>
          <tr>
            <th>Quantite</th>
            <th>PAU </th>
            <th>date</th>
            <th>Autres dépenses</th>
            <th>Date de vente prévisionnelle </th>
            <th>Prix de vente prévisionnelle </th>
            <th>options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button class="delete"><i class="fa fa-trash"></i></button>
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
  export default {
    components: {
      DialogMoto,
    },
    data() {
      return {
        isModalVisible: false,
      }
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
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
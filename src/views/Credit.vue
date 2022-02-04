<template>
  <div class="home">
    <button class="create"  @click="showModal">Créer</button>
          <div class="credits">
      <table>
        <thead>
          <tr>
            <th>demandeur</th>
            <th>Montant </th>
            <th>Intérêt total</th>
            <th>Date de début du crédit  </th>
            <th>Nombre Total de jours </th>
            <th>Délais de récupération d'intérêt  </th>
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
  <DialogCredit v-show="isModalVisible" @close="closeModal"/>
  </div>
</template>
<script>
import DialogCredit from '../components/dialog_credit.vue';
  export default {
    components: {
      DialogCredit,
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
.credits{
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
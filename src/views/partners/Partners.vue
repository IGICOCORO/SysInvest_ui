<template>
  <div class="partners">
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Adresse</th>
          <th>Telephone</th>
          <th>NIF</th>
          <th>options</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <button class="delete" @click="deleteIncome(partner)">
              <i class="fa fa-trash"></i>
            </button>
            <button class="edit" @click="edit()">
              <i class="fa fa-edit"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
methods: {
  export default {
    edit() {
      console.log("first edit");
    },

    deletePartner(partner) {
      alert("Partner deleted");
    },
  };
}
</script>

<style scoped></style>

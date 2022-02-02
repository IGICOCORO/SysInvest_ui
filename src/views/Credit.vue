<template>
  <div class="home">
    <button class="create">Créer</button>
          <div class="parcelles">
      <table>
        <thead>
          <tr>
            <th>demandeur</th>
            <th>Montant </th>
            <th>Intérêt total</th>
            <th>Date de début du crédit  </th>
            <th>Nombre Total de jours </th>
            <th>Délais de récupération d'intérêt  </th>
            <th>Notes </th>
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
  </div>
</template>
<script>
 export default {
  data() {
    return { 
    };
  },
  methods: {

  },
};
</script>
<style>
  
</style>
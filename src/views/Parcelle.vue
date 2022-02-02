<template>
  <div class="home">
    <button class="create">Créer</button>
      <div class="parcelles">
      <table>
        <thead>
          <tr>
            <th>Nombre d’ares</th>
            <th>Prix d’achat </th>
            <th>date</th>
            <th>Emplacement </th>
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
  </div>
</template>
<script></script>
<style>
  .parcelles{
  padding: 30px 20px 0 20px;
  width: 100%;
  height: calc(100% - 50px);
}
.home{
  width: 100%;
}
.delete{
  background-color: #FF6666;
  width: 50px;
  height: 40px;
  border-radius: 30px;
}
.edit{
  background-color: #3399FF;
  width: 50px;
  height: 40px;
  border-radius: 30px;
}
.read{
  background-color: #66FF99;
  width: 50px;
  height: 40px;
  border-radius: 30px;
}

</style>
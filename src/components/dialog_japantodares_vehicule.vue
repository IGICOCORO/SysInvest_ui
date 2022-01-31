<template>
	<div class="popup-body">
      <div class="absolue">
        <button class="close" @click="close">&times</button>
      </div>
      <center>
        <h4>Importation de Japon à Dar-Es-Salam</h4>
      </center>
      <form method="post">
        <div class="field">
          <label>Modèle:</label>
        </div>
        <div class="field">
          <label for="montant">Numéro de châssis:</label>
          <input type="number" id="montant" v-model="montant" autocomplete="off" min=10000 step="10000">
        </div>
        <div class="field">
          <label>Prix d’achat et transport :</label>
        </div>
        <div class="field">
          <label for="details">Taux du dollar:</label>
          <textarea id="details" v-model="details"></textarea>
        </div> 
         <div class="field">
          <label for="details">Date d’achat :</label>
          <textarea id="details" v-model="details"></textarea>
        </div>
          <div class="field">
          <label for="details">Date d'arrivée prévisionnelle:</label>
          <textarea id="details" v-model="details"></textarea>
        </div>
        <div class="buttons">
          <button type="reset">Reset</button>
          <button type="submit">Soumettre</button>
        </div>
      </form>
    </div>
</template>
<script>
	
</script>
<style>
</style>
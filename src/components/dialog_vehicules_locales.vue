<template>
	<div class="popup-body">
      <div class="absolue">
        <button class="close" @click="close">&times</button>
      </div>
      <center>
        <h3>Véhicules Locales</h3>
      </center>
      <form method="post">
        <div class="field">
          <label>Modèle:</label>
        </div>
        <div class="field">
          <label for="montant">Plaque:</label>
          <input type="number" id="montant" v-model="montant" autocomplete="off" min=10000 step="10000">
        </div>
        <div class="field">
          <label>Prix d’achat:</label>
        </div>
        <div class="field">
          <label for="details">Date d’achat :</label>
          <textarea id="details" v-model="details"></textarea>
        </div> 
         <div class="field">
          <label for="details">Autres dépenses:</label>
          <textarea id="details" v-model="details"></textarea>
        </div>
          <div class="field">
          <label for="details">Notes:</label>
          <textarea id="details" v-model="details"></textarea>
        </div>
        <div class="field">
          <label for="details">Date de vente prévisionnelle:</label>
          <textarea id="details" v-model="details"></textarea>
        </div>
        <div class="field">
          <label for="details">Prix de vente prévisionnelle :</label>
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
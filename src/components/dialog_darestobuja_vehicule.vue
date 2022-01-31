<template>
	<div class="popup-body">
      <div class="absolue">
        <button class="close" @click="close">&times</button>
      </div>
      <center>
        <h4>Importation de Dar-Es-Salam à Bujumbura</h4>
      </center>
      <form method="post">
        <div class="field">
          <label>Transport Dar to buja :</label>
        </div>
        <div class="field">
          <label for="montant">Taux:</label>
          <input type="number" id="montant" v-model="montant" autocomplete="off" min=10000 step="10000">
        </div>
        <div class="field">
          <label>Dédouanement:</label>
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
          <label for="details">Prix de vente prévisionnelle  :</label>
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
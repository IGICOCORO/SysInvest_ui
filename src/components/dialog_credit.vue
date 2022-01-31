<template>
	<div class="popup-body">
      <div class="absolue">
        <button class="close" @click="close">&times</button>
      </div>
      <center>
        <h2>Crédit</h2>
      </center>
      <form method="post">
        <div class="field">
          <label>demandeur de crédit:</label>
        </div>
        <div class="field">
          <label for="montant">Montant:</label>
          <input type="number" id="montant" v-model="montant" autocomplete="off" min=10000 step="10000">
        </div>
        <div class="field">
          <label>Intérêt total:</label>
        </div>
        <div class="field">
          <label for="details">Date de début du crédit :</label>
          <textarea id="details" v-model="details"></textarea>
        </div> 
        <div class="field">
          <label for="details">Nombre Total de jours du crédit:</label>
          <textarea id="details" v-model="details"></textarea>
        </div>
         <div class="field">
          <label for="details">Délais de récupération d'intérêt:</label>
          <textarea id="details" v-model="details"></textarea>
        </div>u
        <div class="field">
          <label for="details">Notes:</label>
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
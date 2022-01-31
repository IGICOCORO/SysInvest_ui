<template>
	<div class="popup-body">
      <div class="absolue">
        <button class="close" @click="close">&times</button>
      </div>
      <center>
        <h3>Autres Investissements</h3>
      </center>
      <form method="post">
        <div class="field">
          <label>Type d’investissement:</label>
        </div>
        <div class="field">
          <label for="montant">Montant investi:</label>
          <input type="number" id="montant" v-model="montant" autocomplete="off" min=10000 step="10000">
        </div>
        <div class="field">
          <label>date d’investissement:</label>
        </div>
        <div class="field">
          <label for="details">Benefice previsionnel:</label>
          <textarea id="details" v-model="details"></textarea>
        </div> 
         <div class="field">
          <label for="details">Date de fin de cet investissment:</label>
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
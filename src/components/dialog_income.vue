<template>
	<div class="popup-body">
      <div class="absolue">
        <button class="close" @click="close">X</button>
      </div>
      <center>
        <h2>Income</h2>
      </center>
      <form method="post">
        <div class="field">
          <label>Montant:</label>
          <input type="number"  v-model="montant">
        </div>
        <div class="field">
          <label for="montant">Source:</label>
          <input type="text"  v-model="source">
        </div>
        <div class="field">
          <label>c'est une dette:</label>
           <input type="checkbox"  v-model="is_dette">
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
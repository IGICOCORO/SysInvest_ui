<template>
	<div class="popup-body">
    <div class="overlay"></div>
    <div class="modale">
      <div class="absolue">
        <button  class="close" @click="close">X</button>
      </div>
      <center>
        <h2>Crédit</h2>
      </center>
      <form method="post">
        <div class="group">
            <div class="field">
              <label>demandeur de crédit:</label>
              <input type="text" id="montant" v-model="montant" autocomplete="off" min=10000 step="10000">
            </div>
            <div class="field">
              <label for="montant">Montant:</label>
              <input type="number" id="montant" v-model="montant" autocomplete="off" min=10000 step="10000">
            </div>
            <div class="field">
              <label>Intérêt total:</label>
              <input type="number" id="montant" v-model="montant" autocomplete="off" min=10000 step="10000">
            </div>
            <div class="field">
              <label for="details">Date de début du crédit :</label>
             <input type="date" id="montant" v-model="montant" autocomplete="off" min=10000 step="10000">
            </div> 
        </div>
        <div class="group">  
            <div class="field">
              <label for="details">Nombre Total de jours du crédit:</label>
              <input type="text" id="montant" v-model="montant" autocomplete="off" min=10000 step="10000">
            </div>
             <div class="field">
              <label for="details">Délais de récupération d'intérêt:</label>
              <input type="text" id="montant" v-model="montant" autocomplete="off" min=10000 step="10000">
            </div>
            <div class="field">
              <label for="details">Notes:</label>
              <textarea id="details" v-model="details"></textarea>
            </div>
            <div class="buttons">
              <button type="reset">Reset</button>
              <button type="submit">Soumettre</button>
            </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      close() {
        this.$emit('close');
      }
    },
  };
	
</script>
<style>
.reset{
  background:#FF6666;
}
.submit{
  background:#3399FF;
}
*{
  justify-content:center;
}
.popup-body{
  width:100%;
  top:0;
  bottom:0;
  left:0;
  right:0;
}
.overlay{
  background:rgba(0,0,0,0.5);
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
}
.form{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;
}
.modale{
  background:#fff;
  height:500px;
  width:700px;
  color:#333;
  padding:30px;
  position:fixed;
  top:20%;
   border-radius:10px;
   margin-left:350px;
}

.close{
  background:red;
  width:30px;
  height:30px;
  border-radius:10px;
}
</style>
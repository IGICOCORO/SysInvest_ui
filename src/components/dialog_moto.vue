<template>
	<div class="popup-body">
    <div class="overlay"></div>
    <div class="modale">
      <div class="absolue">
        <button class="close" @click="close">X</button>
      </div>
      <center>
        <h1>Moto</h1>
      </center>
      <form class="form" method="post">
        <div class="group">  
            <div class="field">
              <label>Quantite:</label>
              <input type="number">
            </div>
            <div class="field">
              <label for="montant">Prix :</label>
              <input type="number">
            </div>
            <div class="field">
              <label>date:</label>
              <input type="date">
            </div>
            <div class="field">
              <label for="details">Autres dépenses:</label>
              <input type="text">
            </div>
        </div> 
        <div class="group"> 
             <div class="field">
              <label for="details">Notes:</label>
              <input type="text">
            </div>
            <div class="field">
              <label for="details">Date :</label>
              <input type="date">
            </div>
            <div class="field">
              <label for="details">Prix  :</label>
              <input type="number">
            </div>
             <div class="buttons">
          <button class="reset" type="reset">Reset</button>
          <button class="submit" type="submit">Soumettre</button>
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

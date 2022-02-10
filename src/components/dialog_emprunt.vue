<template>
    <div class="popup-body">
        <div class="overlay"></div>
        <div class="modaleOutcome">
            <div class="absolue">
                <button class="close" @click="close">X</button>
            </div>
            <form class="formOutcome">
                    <div class="field">
                        <label>Nom du Donataire:</label>
                        <input type="text" v-model="nom_donataire">
                    </div>
                    <div class="field">
                        <label for="montant">Montant :</label>
                        <input type="number" v-model="montant">
                    </div>
                     <div class="field">
                        <label>Date:</label>
                        <input type="date" v-model="date">
                    </div>
                    <div class="buttons">
                        <button class="reset" type="reset">Reset</button>
                        <button class="submit" type="submit" @close="close" @click.prevent="submitEmprunt()">Soumettre</button>
                    </div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data() {
        return {
            nom_donataire: null,
            montant: null,
            date: null,
            emprunts:[],
            error:''
        }
    },
   computed: {
        headers() {
            return {
                headers: {
                    "Authorization": "Bearer " + this.$store.state.user.access
                }
            }
        }
    },
    methods: {
        submitEmprunt() {
            let data = {
                nom_donataire: this.nom_donataire,
                montant: this.montant,
                date: this.date,
            }
            axios.post(this.$store.state.url + '/Emprunt/', data, this.headers)
                .then((response) => {
                    this.$store.state.emprunts.push(response.data)
                    this.close()
                }).catch((error) => {
                    console.log(error)
                })
        },
        close() {
            this.$emit('close');
        },
    },
};
</script>
<style>
.reset {
    background: #FF6666;
    border-radius: 30px;
    width: 100px;
}

.submit {
    background: #3399FF;
    border-radius: 30px;
    width: 100px;
}

* {
    justify-content: center;
}

.popup-body {
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.formOutcome {
    display: flex;
    flex-direction:column;
}
.buttons{
  margin-left:60px
}

.modaleOutcome {
    background: #fff;
    height: 500px;
    width: 400px;
    color: #333;
    padding: 20px;
    position: fixed;
    top: 20%;
    border-radius: 10px;
    margin-left: 350px;
}

.close {
    background: red;
    width: 30px;
    height: 30px;
    border-radius: 10px;
}
.check{
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    margin-right:100px;
}
#checked{
    margin-left:5px;
}
</style>
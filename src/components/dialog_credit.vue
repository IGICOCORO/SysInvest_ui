<template>
    <div class="popup-body">
        <div class="overlay"></div>
        <div class="modaleCredit">
            <div class="absolue">
                <button class="close" @click="close">X</button>
            </div>
            <center>
                <h2>Crédit</h2>
            </center>
            <form class="form">
                <div class="group">
                    <div class="field">
                        <label>demandeur de crédit:</label>
                        <input type="text" id="demandeur" v-model="demandeur">
                    </div>
                    <div class="field">
                        <label for="montant">Montant:</label>
                        <input type="number" id="montant" v-model="montant">
                    </div>
                    <div class="field">
                        <label>Intérêt total:</label>
                        <input type="number" id="interet" v-model="interet">
                    </div>
                    <div class="field">
                        <label for="details">Date de début du crédit :</label>
                        <input type="date" id="date_achat" v-model="date_achat">
                    </div>
                </div>
                <div class="group">
                    <div class="field">
                        <label for="details">Nombre Total de jours du crédit:</label>
                        <input type="number" id="nbre_jours_total" v-model="nbre_jours_total">
                    </div>
                    <div class="field">
                        <label for="details">Délais de récupération d'intérêt:</label>
                        <input type="text" id="delais" v-model="delais">
                    </div>
                    <div class="field">
                        <label for="details">Notes:</label>
                        <textarea id="details" v-model="details"></textarea>
                    </div>
                    <div class="buttons">
                        <button class="reset" type="reset" @click="annuler()">Reset</button>
                        <button class="submit" type="submit" @close="close" @click.prevent="submitCredit()">Soumettre</button>
                    </div>
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
            demandeur: "",
            montant: 0,
            interet: 0,
            date_achat: "",
            nbre_jours_total: 0,
            delais_recuperation: "2022-2-4",
            details: ""
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
        submitCredit() {
            let data = {
                nom_demandeur: this.demandeur,
                montant: this.montant,
                interet_total: this.interet,
                date_debut_credit: this.date_achat,
                nombre_jours_total: this.nbre_jours_total,
                delais_recuperation: this.delais_recuperation,
                details: this.details
            }
            axios.post(this.$store.state.url + '/credits/', data, this.headers)
                .then((response) => {
                    this.$store.state.credits.push(response.data)
                    this.close()
                }).catch((error) => {
                    console.log(error)
                })
        },
        close() {
            this.$emit('close');
        }
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

.form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr;
}

.modaleCredit {
    background: #fff;
    height: 500px;
    width: 700px;
    color: #333;
    padding: 30px;
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
</style>
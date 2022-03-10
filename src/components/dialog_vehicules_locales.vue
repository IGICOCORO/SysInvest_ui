<template>
    <div class="popup-body">
        <div class="overlay"></div>
        <div class="modale">
            <div class="absolue">
                <button class="close" @click="close">X</button>
            </div>
            <center>
                <h2>Véhicules locales</h2>
            </center>
            <form class="form">
                <div class="group">
                    <div class="field">
                        <label>Modèle :</label>
                        <input type="text" v-model="modele">
                    </div>
                    <div class="field">
                        <label for="montant">Plaque:</label>
                        <input type="text" v-model="plaque">
                    </div>
                    <div class="field">
                        <label>Prix d’achat :</label>
                        <input type="number" v-model="prix_achat">
                    </div>
                    <div class="field">
                        <label for="details">Date d’achat :</label>
                        <input type="date" v-model="date_achat">
                    </div>
                </div>
                <div class="group">
                    <div class="field">
                        <label for="details">Autres dépenses :</label>
                        <input type="number" v-model="autres_depenses">
                    </div>
                    <div class="field">
                        <label for="details">Détails:</label>
                        <input type="text" v-model="details">
                    </div>
                    <div class="field">
                        <label for="details">Date de vente prévisionnelle:</label>
                        <input type="date" v-model="date_vente_previ">
                    </div>
                    <div class="field">
                        <label for="details">Prix de vente prévisionnelle :</label>
                        <input type="number" v-model="prix_vente_previ">
                    </div>
                    <div class="buttons">
                        <button class="reset" type="reset">Reset</button>
                        <button class="submit" type="submit" @close="close" @click.prevent="submitVehicule()">Soumettre</button>
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
            modele: null,
            plaque: null,
            prix_achat: null,
            date_achat: null,
            autres_depenses: null,
            details: null,
            date_vente_previ: null,
            prix_vente_previ: null,
            vehicules: [],
            error: ''
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
        submitVehicule() {
            let data = {
                modele: this.modele,
                plaque: this.plaque,
                prix_achat: this.prix_achat,
                date_vente_previ: this.date_vente_previ,
                autres_depenses: this.autres_depenses,
                details: this.details,
                prix_vente_previ: this.prix_vente_previ,
            }
            axios.post(this.$store.state.url + '/vehicules_locales/', data, this.headers)
                .then((response) => {
                    this.$store.state.vehicules.push(response.data)
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

.modale {
    background: #fff;
    height: 500px;
    width: 700px;
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
</style>
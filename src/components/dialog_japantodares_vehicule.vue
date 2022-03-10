<template>
    <div class="popup-body">
        <div class="overlay"></div>
        <div class="modale">
            <div class="absolue">
                <button class="close" @click="close">X</button>
            </div>
            <center>
                <h2>Japon to Dar</h2>
            </center>
            <form class="form">
                <div class="group">
                    <div class="field">
                        <label>Modèle :</label>
                        <input type="text" v-model="modele">
                    </div>
                    <div class="field">
                        <label for="montant">Numéro de châssis:</label>
                        <input type="text" v-model="numero_chasis">
                    </div>
                    <div class="field">
                        <label>Prix d’achat:</label>
                        <input type="number" v-model="prix_achat">
                    </div>
                    <div class="field">
                        <label for="details">Transport:</label>
                        <input type="number" v-model="transport">
                    </div>
                </div>
                <div class="group">
                    <div class="field">
                        <label for="details">Taux:</label>
                        <input type="number" v-model="taux_echange">
                    </div>
                    <div class="field">
                        <label for="details">Date d’achat :</label>
                        <input type="date" v-model="date_achat">
                    </div>
                    <div class="field">
                        <label for="details">Date d'arrivée prévisionnelle :</label>
                        <input type="date" v-model="date_arrivee">
                    </div>
                    <div class="buttons">
                        <button class="reset" type="reset">Reset</button>
                        <button class="submit" type="submit" @close="close" @click.prevent="submitImportJapDar()">Soumettre</button>
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
            numero_chasis: null,
            prix_achat: null,
            transport: null,
            taux_echange: null,
            date_achat: null,
            date_arrivee: null,
            importjaptodar: [],
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
        submitImportJapDar() {
            let data = {
                modele: this.modele,
                numero_chasis: this.numero_chasis,
                prix_achat: this.prix_achat,
                transport: this.transport,
                taux_echange: this.taux_echange,
                date_achat: this.date_achat,
                date_arrivee: this.date_arrivee,
            }
            axios.post(this.$store.state.url + '/importation_japon_to_darEsSalam/', data, this.headers)
                .then((response) => {
                    this.$store.state.importjaptodar.push(response.data)
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
<template>
    <div class="popup-body">
        <div class="overlay"></div>
        <div class="modale">
            <div class="absolue">
                <button class="close" @click="close">X</button>
            </div>
            <center>
                <h2>Parcelle</h2>
            </center>
            <form class="form">
                <div class="group">
                    <div class="field">
                        <label>Nombre d’ares:</label>
                        <input type="number" v-model="nombres_ares">
                    </div>
                    <div class="field">
                        <label for="montant">Prix d’achat/are:</label>
                        <input type="number" v-model="prix_achat_par_are">
                    </div>
                    <div class="field">
                        <label>date d’achat :</label>
                        <input type="date" v-model="date_achat">
                    </div>
                    <div class="field">
                        <label for="details">Autres dépenses:</label>
                        <input type="number" v-model="autres_depenses">
                    </div>
                </div>
                <div class="group">
                    <div class="field">
                        <label for="details">Emplacement :</label>
                        <input type="text" v-model="lieu">
                    </div>
                    <div class="field">
                        <label for="details">Notes:</label>
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
                        <button class="submit" type="submit" @close="close" @click.prevent="submitParcelle()">Soumettre</button>
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
            nombres_ares: null,
            prix_achat_par_are: null,
            date_achat: null,
            autres_depenses: null,
            lieu: null,
            details: null,
            date_vente_previ: null,
            prix_vente_previ: null,
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
        submitParcelle() {
            let data = {
                nombres_ares: this.nombres_ares,
                prix_achat_par_are: this.prix_achat_par_are,
                date_achat: this.date_achat,
                autres_depenses: this.autres_depenses,
                lieu: this.lieu,
                details: this.details,
                date_vente_previ: this.date_vente_previ,
                prix_vente_previ: this.prix_vente_previ,
            }
            axios.post(this.$store.state.url + '/parcelles/', data, this.headers)
                .then((response) => {
                    this.$store.state.parcelles.push(response.data)
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
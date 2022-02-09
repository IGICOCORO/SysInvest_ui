<template>
    <div class="popup-body">
        <div class="overlay"></div>
        <div class="modale">
            <div class="absolue">
                <button class="close" @click="close">X</button>
            </div>
            <form class="form">
                <div class="group">
                    <div class="field">
                        <label>Quantite:</label>
                        <input type="number" v-model="quantite">
                    </div>
                    <div class="field">
                        <label for="montant">Prix :</label>
                        <input type="number" v-model="prix_achat">
                    </div>
                    <div class="field">
                        <label>Date:</label>
                        <input type="date" v-model="date_achat">
                    </div>
                    <div class="field">
                        <label for="details">Autres dépenses:</label>
                        <input type="number" v-model="autres_depenses">
                    </div>
                </div>
                <div class="group">
                    <div class="field">
                        <label for="details">Notes:</label>
                        <textarea type="text" v-model="Notes"></textarea>
                    </div>
                    <div class="field">
                        <label for="details">Date vente :</label>
                        <input type="date" v-model="date_vente">
                    </div>
                    <div class="field">
                        <label for="details">PV :</label>
                        <input type="number" v-model="prix_vente">
                    </div>
                    <div class="buttons">
                        <button class="reset" type="reset" @click="annuler()">Reset</button>
                        <button class="submit" type="submit" @close="close" @click.prevent="submitMoto()">Soumettre</button>
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
            quantite: null,
            prix_achat: null,
            date_achat: null,
            autres_depenses: null,
            Notes: "",
            date_vente: null,
            prix_vente: null
        }
    },
    props: {
        item: Object,
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
    mounted() {
        console.log(this.item)
        console.log("mounted")
        if (this.$route.name == 'modify') {
            this.quantite = this.item.quantite
            this.prix_achat = this.item.prix_achat_unitaire
            this.date_achat = this.item.date_achat
            this.autres_depenses = this.item.autres_depenses
            this.Notes = this.item.details
            this.date_vente = this.item.date_vente_previ
            this.prix_vente = this.item.prix_vente_unitaire_previ
        }
    },
    methods: {
        submitMoto() {
            let data = {
                quantite: this.quantite,
                prix_achat_unitaire: this.prix_achat,
                date_achat: this.date_achat,
                autres_depenses: this.autres_depenses,
                details: this.Notes,
                date_vente_previ: this.date_vente,
                prix_vente_unitaire_previ: this.prix_vente
            }
            axios.post(this.$store.state.url + '/motos/', data, this.headers)
                .then((response) => {
                    this.$store.state.motos.push(response.data)
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
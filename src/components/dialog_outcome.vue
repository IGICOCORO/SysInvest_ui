<template>
    <div class="popup-body">
        <div class="overlay"></div>
        <div class="modale">
            <div class="absolue">
                <button class="close" @click="close">X</button>
            </div>
            <form class="form">
                    <div class="field">
                        <label>raison:</label>
                        <input type="text" v-model="quantite">
                    </div>
                    <div class="field">
                        <label for="montant">Montant :</label>
                        <input type="number" v-model="montant">
                    </div>
                    <div class="field">
                        <label>Partenaire:</label>
                        <input type="text" v-model="partenaire">
                    </div>
                     <div class="field">
                        <label>Date:</label>
                        <input type="date" v-model="date">
                    </div>
                    <div class="buttons">
                        <button class="reset" type="reset">Reset</button>
                        <button class="submit" type="submit" @close="close" @click.prevent="submitOutCome()">Soumettre</button>
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
            raison: "vhjvfghfgh",
            montant: null,
            partenaire: null,
            date: null,
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
        submitOutCome() {
            let data = {
                raison: this.raison,
                montant: this.montant,
                partenaire: this.partenaire,
                date: this.date,
            }
            axios.post(this.$store.state.url + '/outcomes/', data, this.headers)
                .then((response) => {
                    this.$store.state.outcomes.push(response.data)
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
    display: flex;
    flex-direction:column;
}
.buttons{
  margin-left:60px
}

.modale {
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
</style>
<template>
    <div class="popup-body">
        <div class="overlay"></div>
        <div class="modaleOutcome">
            <div class="absolue">
                <button class="close" @click="close">X</button>
            </div>
            <form class="formOutcome">
                    <div class="field">
                        <label>Source:</label>
                        <input type="text" v-model="source">
                    </div>
                    <div class="field">
                        <label for="montant">Montant:</label>
                        <input type="number" v-model="montant">
                    </div>
                     <div class="check" >
                        <label>Est-il une dette</label>
                        <input @click="checkDette" id="checked" type="checkbox">
                    </div>
                    <div class="field" v-if="checked">
                        <label>Partenaire:</label>
                        <input type="text" v-model="partenaire">
                    </div>
                     <div class="field">
                        <label>Date:</label>
                        <input type="date" v-model="date">
                    </div>
                    <div class="buttons">
                        <button class="reset" type="reset">Reset</button>
                        <button class="submit" type="submit" @close="close" @click.prevent="submitIncome()">Soumettre</button>
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
            source: "",
            montant: null,
            partenaire: null,
            date: null,
            checked : false,
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
        submitIncome() {
            let data = {
                source: this.source,
                montant: this.montant,
                partenaire: this.partenaire,
                date: this.date,
            }
            axios.post(this.$store.state.url + '/incomes/', data, this.headers)
                .then((response) => {
                    this.$store.state.incomes.push(response.data)
                    this.close()
                }).catch((error) => {
                    console.log(error)
                })
        },
        close() {
            this.$emit('close');
        },
        checkDette(){
            let dd = document.getElementById("checked")
            this.checked = dd.checked
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
</style>
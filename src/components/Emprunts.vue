<template>
    <div class="home">
        <button class="createEmprunt" @click="showModal">Emprunter</button>
        <div class="emprunt">
            <table>
                <thead>
                    <tr>
                        <th>Nom du Donataire</th>
                        <th>Montant</th>
                        <th>Date d'emprunt</th>
                        <th>options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for=" emprunt in emprunts" :key="emprunt">
                        <td>{{ emprunt.nom_donataire }}</td>
                        <td>{{ money(emprunt.montant) }} Fbu</td>
                        <td>{{ datetime(emprunt.date) }}</td>
                        <td>
                            <button class="delete" @click=" deleteEmprunt(emprunt)"><i class="fa fa-trash"></i></button>
                            <button class="edit" @click="edit()"><i class="fa fa-edit"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <DialogEmprunt v-show="isModalVisible" @close="closeModal" />
    </div>
</template>
<script>
import DialogEmprunt from '../components/dialog_emprunt.vue';
import axios from "axios"
export default {
    components: {
        DialogEmprunt,
    },
    data() {
        return {
            nom_donataire: null,
            montant: null,
            date : null,
            emprunts: [],
            isModalVisible: false,
            error: ''
        }
    },
    watch: {
        "$store.state.emprunts"(new_val) {
            this.emprunts = new_val
        }
    },
    methods: {
        fetchEmprunt() {
            axios.get(this.$store.state.url + '/Emprunt/', this.headers)
                .then((response) => {
                    this.$store.state.emprunts = response.data.results
                    console.log(response.data.results)
                }).catch((error) => {
                    console.log(error)
                })
        },
        deleteEmprunt(emprunt) {
            if (confirm(`Voulez vous vraiment supprimer ce emprunt?`)) {
                axios.delete(this.$store.state.url + `/Emprunt/${emprunt.id}/`, this.headers)
                    .then((response) => {
                        console.log(response.data)
                        this.$store.state.emprunts.splice(
                            this.$store.state.emprunts.indexOf(emprunt), 1)
                    }).catch((error) => {
                        console.log(error)
                    })
            }
        },
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        /*edit(item){
            console.log(item)
          
            this.isModalVisible = true;
            this.$router.push('/outcomes/'+ item.id)
            this.item_prop = item
            console.log(this.item_prop.autres_depenses)
        },*/
    },
    mounted() {
        this.fetchEmprunt()
    }
};
</script>
<style>
.pret {
    padding: 20px 10px 0 5px;
    width: 100%;
    height: calc(100% - 50px);
}

.home {
    width: 100%;
}
.createEmprunt{
    width:150px;
     border-radius: 30px;
    color: black;
    font-weight: bold;
    font-size: 25px;
}
.createEmprunt:hover{
    border-bottom: 2px solid #C4CBD2;
    background-color: #C4CBD5;
}
.delete {
    background-color: #FF6666;
    width: 40px;
    height: 40px;
    border-radius: 30px;
}

.edit {
    background-color: #3399FF;
    width: 40px;
    height: 40px;
    border-radius: 30px;
}

.read {
    background-color: #66FF99;
    width: 40px;
    height: 40px;
    border-radius: 30px;
}

</style>
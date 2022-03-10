<template>
    <div class="home">
        <button class="create" @click="showModal">Créer</button>
        <div class="parcelles">
            <table>
                <thead>
                    <tr>
                        <th>Transport</th>
                        <th>Taux</th>
                        <th>Dédouanement</th>
                        <th>Dépenses</th>
                        <th>Détails</th>
                        <th>Date de vente prévisionnelle</th>
                        <th>PVP</th>
                        <th>options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for=" item in importdartobuja" :key="item">
                        <td>{{ item.transport }}</td>
                        <td>{{ item.taux }}</td>
                        <td>{{ item.Dédouanement }}</td>
                        <td>{{ money(item.autre_dépenses) }} Fbu</td>
                        <td>{{ item.details }}</td>
                        <td>{{ datetime(item.date) }}</td>
                        <td>{{ money(item.prix_vente_previ) }} Fbu</td>
                        <td>
                            <button class="delete" @click=" deleteImport(item)"><i class="fa fa-trash"></i></button>
                            <button class="edit" @click="edit()"><i class="fa fa-edit"></i></button>
                            <button class="read"><i class="fa fa-check"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <DialogImportDarToBuja v-show="isModalVisible" @close="closeModal" />
    </div>
</template>
<script>
import DialogImportDarToBuja from '../components/dialog_darestobuja_vehicule.vue';
import axios from "axios"
export default {
    components: {
        DialogImportDarToBuja,
    },
    data() {
        return {
            transport: null,
            taux: null,
            Dédouanement: null,
            autre_dépenses: null,
            details: null,
            date: null,
            prix_vente_previ: null,
            importdartobuja: [],
            isModalVisible: false,
            error: ''
        }
    },
    watch: {
        "$store.state.importdartobuja"(new_val) {
            this.importdartobuja = new_val
        }
    },
    methods: {
        fetchImport() {
            axios.get(this.$store.state.url + '/importation_darEsSalam_to_Buja/', this.headers)
                .then((response) => {
                    this.$store.state.importdartobuja = response.data.results
                    console.log(response.data.results)
                }).catch((error) => {
                    console.log(error)
                })
        },
        deleteImport(item) {
            if (confirm(`Voulez vous vraiment supprimer cet Importation?`)) {
                axios.delete(this.$store.state.url + `/importation_darEsSalam_to_Buja/${item.id}/`, this.headers)
                    .then((response) => {
                        console.log(response.data)
                        this.$store.state.importdartobuja.splice(
                            this.$store.state.importdartobuja.indexOf(item), 1)
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
        this.fetchImport()
    }
};
</script>
<style>
</style>
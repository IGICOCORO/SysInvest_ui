<template>
    <div class="home">
        <button class="create" @click="showModal">Créer</button>
        <div class="parcelles">
            <table>
                <thead>
                    <tr>
                        <th>Modèle</th>
                        <th>Numéro de châssis</th>
                        <th>Prix d’achat </th>
                        <th>Transport</th>
                        <th>Taux de change</th>
                        <th>Date d’achat </th>
                        <th>Date d'arrivée prévisionnelle</th>
                        <th>options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for=" item in importjaptodar" :key="item">
                        <td>{{ item.modele }}</td>
                        <td>{{ item.numero_chasis }}</td>
                        <td>{{ item.prix_achat }}</td>
                        <td>{{ item.transport }}</td>
                        <td>{{ item.taux_echange }}</td>
                        <td>{{ item.date_achat }}</td>
                        <td>{{ item.date_arrivee }}</td>
                        <td>
                            <button class="delete" @click=" deleteImport(item)"><i class="fa fa-trash"></i></button>
                            <button class="edit" @click="edit()"><i class="fa fa-edit"></i></button>
                            <button class="read"><i class="fa fa-check"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <DialogImportJapToDar v-show="isModalVisible" @close="closeModal" />
    </div>
</template>
<script>
import DialogImportJapToDar from '../components/dialog_japantodares_vehicule.vue';
import axios from "axios"
export default {
    components: {
        DialogImportJapToDar,
    },
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
            isModalVisible: false,
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
    watch: {
        "$store.state.importjaptodar"(new_val) {
            this.importjaptodar = new_val
        }
    },
    methods: {
        fetchImport() {
            axios.get(this.$store.state.url + '/importation_japon_to_darEsSalam/', this.headers)
                .then((response) => {
                    this.$store.state.importjaptodar = response.data.results
                    console.log(response.data.results)
                }).catch((error) => {
                    console.log(error)
                })
        },
        deleteImport(item) {
            if (confirm(`Voulez vous vraiment supprimer cet Importation?`)) {
                axios.delete(this.$store.state.url + `/importation_japon_to_darEsSalam/${item.id}/`, this.headers)
                    .then((response) => {
                        console.log(response.data)
                        this.$store.state.importjaptodar.splice(
                            this.$store.state.importjaptodar.indexOf(item), 1)
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
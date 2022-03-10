<template>
    <div class="home">
        <button class="create" @click="showModal">Créer</button>
        <div class="parcelles">
            <table>
                <thead>
                    <tr>
                        <th>Modèle</th>
                        <th>Plaque </th>
                        <th>PA</th>
                        <th>Date d’achat</th>
                        <th>Dépenses  </th>
                        <th>Détails </th>
                        <th>Date de vente prévisionnelle </th>
                        <th>PVP</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for=" vehicule in vehicules" :key="vehicule">
                        <td>{{ vehicule.modele }}</td>
                        <td>{{ vehicule.plaque }}</td>
                        <td>{{ money(vehicule.prix_achat) }} Fbu</td>
                        <td>{{ datetime(vehicule.date_achat) }}</td>
                        <td>{{ money(vehicule.autres_depenses) }} FBu</td>
                        <td>{{ vehicule.details }}</td>
                        <td>{{ vehicule.date_vente }}</td>
                        <td>{{ money(vehicule.prix_vente_previ) }} Fbu</td>
                        <td>
                            <button class="delete" @click="deleteVehicule(vehicule)"><i class="fa fa-trash"></i></button>
                            <button class="edit"><i class="fa fa-edit"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <DialogVehicule v-show="isModalVisible" @close="closeModal" />
    </div>
</template>
<script>
import DialogVehicule from '../components/dialog_vehicules_locales.vue';
import axios from "axios"
export default {
    components: {
        DialogVehicule,
    },
    data() {
        return {
            modele: null,
            plaque: null,
            prix_achat: null,
            date_achat: null,
            autres_depenses: null,
            details: null,
            date_vente: null,
            prix_vente_previ: null,
            vehicules: [],
            isModalVisible: false,
            error: ''
        }
    },
    watch: {
        "$store.state.vehicules"(new_val) {
            this.vehicules = new_val
        }
    },
    methods: {
        fetchVehicule() {
            axios.get(this.$store.state.url + '/vehicules_locales/', this.headers)
                .then((response) => {
                    this.$store.state.vehicules = response.data.results
                    console.log(response.data.results)
                }).catch((error) => {
                    console.log(error)
                })
        },
        deleteVehicule(vehicule) {
            if (confirm(`Voulez vous vraiment supprimer cet investissement du parcelle ?`)) {
                axios.delete(this.$store.state.url + `/vehicules_locales/${vehicule.id}/`, this.headers)
                    .then((response) => {
                        console.log(response.data)
                        this.$store.state.vehicules.splice(
                            this.$store.state.vehicules.indexOf(vehicule), 1)
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
        }
    },
    mounted() {
        this.fetchVehicule()
    }
};
  
</script>
<style>
.parcelles {
    padding: 20px 10px 0 5px;
    width: 100%;
    height: calc(100% - 50px);
}

.home {
    width: 100%;
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
<template>
    <div class="home">
        <button class="create" @click="showModal">Créer</button>
        <div class="parcelles">
            <table>
                <thead>
                    <tr>
                        <th>Nombre d’ares</th>
                        <th>PA</th>
                        <th>date d’achat </th>
                        <th>Dépenses</th>
                        <th>Lieu </th>
                        <th>Details </th>
                        <th>Date de vente prévisionnelle </th>
                        <th>PVP</th>
                        <th>options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for=" parcelle in parcelles" :key="parcelle">
                        <td>{{ parcelle.nombres_ares }}</td>
                        <td>{{ money(parcelle.prix_achat_par_are) }}</td>
                        <td>{{ datetime(parcelle.date_achat) }}</td>
                        <td>{{ money(parcelle.autres_depenses) }}</td>
                        <td>{{ parcelle.lieu }}</td>
                        <td>{{ parcelle.details }}</td>
                        <td>{{ parcelle.date_vente_previ }}</td>
                        <td>{{ money(parcelle.prix_vente_previ) }}</td>
                        <td>
                            <button class="delete" @click="deleteParcelle(parcelle)"><i class="fa fa-trash"></i></button>
                            <button class="edit"><i class="fa fa-edit"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <DialogParcelle v-show="isModalVisible" @close="closeModal" />
    </div>
</template>
<script>
import DialogParcelle from '../components/dialog_parcelle.vue';
import axios from "axios"
export default {
    components: {
        DialogParcelle,
    },
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
            parcelles: [],
            isModalVisible: false,
            error: ''
        }
    },
    watch: {
        "$store.state.parcelles"(new_val) {
            this.parcelles = new_val
        }
    },
    methods: {
        fetchParcelle() {
            axios.get(this.$store.state.url + '/parcelles/', this.headers)
                .then((response) => {
                    this.$store.state.parcelles = response.data.results
                    console.log(response.data.results)
                }).catch((error) => {
                    console.log(error)
                })
        },
        deleteParcelle(parcelle) {
            if (confirm(`Voulez vous vraiment supprimer cet investissement du parcelle ?`)) {
                axios.delete(this.$store.state.url + `/parcelles/${parcelle.id}/`, this.headers)
                    .then((response) => {
                        console.log(response.data)
                        this.$store.state.parcelles.splice(
                            this.$store.state.parcelles.indexOf(parcelle), 1)
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
        this.fetchParcelle()
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
<template>
    <div class="home">
        <button class="create" @click="showModal">Créer</button>
        <div class="parcelles">
            <table>
                <thead>
                    <tr>
                        <th>Nom d’investissement</th>
                        <th>Montant investi</th>
                        <th>Date d’investissement </th>
                        <th>Benefice previsionnel</th>
                        <th>Date de fin </th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                  <tr v-for=" item in autres_investissements" :key="item">
                        <td>{{ item.nom_investissement }}</td>
                        <td>{{ item.montant_investi }}</td>
                        <td>{{ item.date_investissement }}</td>
                        <td>{{ item.benefice }}</td>
                        <td>{{ item.date_fin_investissement }}</td>
                        <td>
                            <button class="delete" @click="deleteInvestotre(item)"><i class="fa fa-trash"></i></button>
                            <button class="edit"><i class="fa fa-edit"></i></button>
                            <button class="read"><i class="fa fa-eye"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <DialogAutresInvest v-show="isModalVisible" @close="closeModal" />
    </div>
</template>
<script>
import DialogAutresInvest from '../components/dialog_autres_invest.vue';
import axios from "axios"
export default {
    components: {
        DialogAutresInvest,
    },
    data() {
        return {
            nom_investissement:"",
            montant_investi: null,
            date_investissement: null,
            benefice: null,
            date_fin_investissement: null,
            autres_investissements: [],
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
        "$store.state.autres_investissements"(new_val) {
            this.autres_investissements = new_val
        }
    },
    methods: {
        fetchInvestOtres() {
            axios.get(this.$store.state.url + '/autres_investssements/', this.headers)
                .then((response) => {
                    this.$store.state.autres_investissements = response.data.results
                    console.log(response.data.results)
                }).catch((error) => {
                    console.log(error)
                })
        },
        deleteInvestotre(item) {
            if (confirm(`Voulez vous vraiment supprimer cet investissement ?`)) {
                axios.delete(this.$store.state.url + `/autres_investssements/${item.id}/`,
                        this.headers)
                    .then((response) => {
                        console.log(response.data)
                        this.$store.state.autres_investissements.splice(
                            this.$store.state.autres_investissements.indexOf(item), 1)
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
        this.fetchInvestOtres()
    }
};
</script>
<style>
</style>
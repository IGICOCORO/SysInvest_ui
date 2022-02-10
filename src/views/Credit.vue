<template>
    <div class="home">
        <button class="create" @click="showModal">Créer</button>
        <div class="credits">
            <table>
                <thead>
                    <tr>
                        <th>Demandeur</th>
                        <th>Montant </th>
                        <th>Intérêt total</th>
                        <th>Début du crédit </th>
                        <th>Notes</th>
                        <th>Nombre Total de jours </th>
                        <th>Délais de récupération d'intérêt </th>
                        <th>options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for=" credit in credits" :key="credit">
                        <td>{{ credit.nom_demandeur }}</td>
                        <td>{{ credit.montant }}</td>
                        <td>{{ credit.interet_total }}</td>
                        <td>{{ credit.date_debut_credit }}</td>
                        <td>{{ credit.details }}</td>
                        <td>{{ credit.nombre_jours_total }} jours</td>
                        <td>{{ credit.delais_recuperation }}</td>
                        <td>
                            <button class="delete" @click="deleteCredit(credit)"><i class="fa fa-trash"></i></button>
                            <button class="edit"><i class="fa fa-edit"></i></button>
                            <button class="read"><i class="fa fa-eye"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <DialogCredit v-show="isModalVisible" @close="closeModal" />
    </div>
</template>
<script>
import DialogCredit from '../components/dialog_credit.vue';
import axios from "axios"
export default {
    components: {
        DialogCredit,
    },
    data() {
        return {
            nom_demandeur: null,
            montant: null,
            interet_total: null,
            date_debut_credit: null,
            details: null,
            nombre_jours_total: null,
            delais_recuperation: null,
            credits: [],
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
        "$store.state.credits"(new_val) {
            this.credits = new_val
        }
    },
    methods: {
        fetchCredit() {
            axios.get(this.$store.state.url + '/credits/', this.headers)
                .then((response) => {
                    this.$store.state.credits = response.data.results
                    console.log(response.data.results)
                }).catch((error) => {
                    console.log(error)
                })
        },
        deleteCredit(credit) {
            if (confirm(`Voulez vous vraiment supprimer cet investissement du Crédit?`)) {
                axios.delete(this.$store.state.url + `/credits/${credit.id}/`, this.headers)
                    .then((response) => {
                        console.log(response.data)
                        this.$store.state.credits.splice(
                            this.$store.state.credits.indexOf(credit), 1)
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
        this.fetchCredit()
    }
};
</script>
<style>
.credits {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
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
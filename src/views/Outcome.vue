<template>
    <div class="home">
        <button class="create" @click="showModal">Créer</button>
        <div class="parcelles">
            <table>
                <thead>
                    <tr>
                        <th>Raison</th>
                        <th>Montant</th>
                        <th>Partenaire</th>
                        <th>Date</th>
                        <th>options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for=" outcome in outcomes" :key="outcome">
                        <td>{{ outcome.raison }}</td>
                        <td>{{ outcome.montant }}</td>
                        <td>{{ outcome.partenaire }}</td>
                        <td>{{ outcome.date }}</td>
                        <td>
                            <button class="delete" @click="deleteOutCome(outcome)"><i class="fa fa-trash"></i></button>
                            <button class="edit" @click="edit(moto)"><i class="fa fa-edit"></i></button>
                            <button class="read"><i class="fa fa-eye"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <DialogOutCome v-show="isModalVisible" @close="closeModal" />
    </div>
</template>
<script>
import DialogOutCome from '../components/dialog_outcome.vue';
import axios from "axios"
export default {
    components: {
        DialogOutCome,
    },
    data() {
        return {
            raison: "",
            montant: null,
            partenaire: null,
            date : null,
            outcomes: [],
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
        "$store.state.outcomes"(new_val) {
            this.outcomes = new_val
        }
    },
    methods: {
        fetchOutCome() {
            axios.get(this.$store.state.url + '/outcomes/', this.headers)
                .then((response) => {
                    this.$store.state.outcomes = response.data.results
                    console.log(response.data.results)
                }).catch((error) => {
                    console.log(error)
                })
        },
        deleteOutCome(outcome) {
            if (confirm(`Voulez vous vraiment supprimer cet Outcome?`)) {
                axios.delete(this.$store.state.url + `/outcomes/${outcome.id}/`, this.headers)
                    .then((response) => {
                        console.log(response.data)
                        this.$store.state.outcomes.splice(
                            this.$store.state.outcomes.indexOf(outcome), 1)
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
        this.fetchOutCome()
    }
};
</script>
<style>
</style>
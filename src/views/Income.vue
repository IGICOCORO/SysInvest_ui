<template>
    <div class="home">
        <button class="create" @click="showModal">Créer</button>
        <div class="parcelles">
            <table>
                <thead>
                    <tr>
                        <th>Source</th>
                        <th>Montant</th>
                        <th>Partenaire</th>
                        <th>Date</th>
                        <th>options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for=" income in incomes" :key="income">
                        <td>{{ income.source }}</td>
                        <td>{{ money(income.montant) }} Fbu</td>
                        <td>{{ income.partenaire }}</td>
                        <td>{{ datetime(income.date) }}</td>
                        <td>
                            <button class="delete" @click=" deleteIncome(income)"><i class="fa fa-trash"></i></button>
                            <button class="edit" @click="edit()"><i class="fa fa-edit"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <DialogIncome v-show="isModalVisible" @close="closeModal" />
    </div>
</template>
<script>
import DialogIncome from '../components/dialog_income.vue';
import axios from "axios"
export default {
    components: {
        DialogIncome,
    },
    data() {
        return {
            source: "",
            montant: null,
            partenaire: null,
            date : null,
            incomes: [],
            isModalVisible: false,
            error: ''
        }
    },
    watch: {
        "$store.state.incomes"(new_val) {
            this.incomes = new_val
        }
    },
    methods: {
        fetchIncome() {
            axios.get(this.$store.state.url + '/incomes/', this.headers)
                .then((response) => {
                    this.$store.state.incomes = response.data.results
                    console.log(response.data.results)
                }).catch((error) => {
                    console.log(error)
                })
        },
        deleteIncome(income) {
            if (confirm(`Voulez vous vraiment supprimer cet Income?`)) {
                axios.delete(this.$store.state.url + `/incomes/${income.id}/`, this.headers)
                    .then((response) => {
                        console.log(response.data)
                        this.$store.state.incomes.splice(
                            this.$store.state.incomes.indexOf(income), 1)
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
        this.fetchIncome()
    }
};
</script>
<style>

</style>
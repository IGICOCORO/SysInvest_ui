<template>
    <div class="home">
        <button class="createPret" @click="showModal">Prêter</button>
        <div class="pret">
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
                        <td>{{ income.montant }}</td>
                        <td>{{ income.partenaire }}</td>
                        <td>{{ income.date }}</td>
                        <td>
                            <button class="delete" @click=" deleteIncome(income)"><i class="fa fa-trash"></i></button>
                            <button class="edit" @click="edit()"><i class="fa fa-edit"></i></button>
                            <button class="read"><i class="fa fa-eye"></i></button>
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
.pret {
    padding: 20px 10px 0 5px;
    width: 100%;
    height: calc(100% - 50px);
}

.home {
    width: 100%;
}
.createPret{
    width:150px;
     border-radius: 30px;
    color: black;
    font-weight: bold;
    font-size: 25px;
    width: 100px;
}
.createPret:hover{
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
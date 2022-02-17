<template>
    <div class="home">
        <button class="createPret" @click="showModal">Prêter</button>
        <div class="pret">
            <table>
                <thead>
                    <tr>
                        <th>Nom du Donateur</th>
                        <th>Montant</th>
                        <th>Date du prêt</th>
                        <th>options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for=" pret in prets" :key="pret">
                        <td>{{ pret.nom_donateur }}</td>
                        <td>{{ pret.montant }}</td>
                        <td>{{ pret.date }}</td>
                        <td>
                            <button class="delete" @click=" deletePret(pret)"><i class="fa fa-trash"></i></button>
                            <button class="edit" @click="edit()"><i class="fa fa-edit"></i></button>
                            <button class="read"><i class="fa fa-eye"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <DialogPret v-show="isModalVisible" @close="closeModal" />
    </div>
</template>
<script>
import DialogPret from '../components/dialog_pret.vue';
import axios from "axios"
export default {
    components: {
        DialogPret,
    },
    data() {
        return {
            nom_donateur: null,
            montant: null,
            date : null,
            prets: [],
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
        "$store.state.prets"(new_val) {
            this.prets = new_val
        }
    },
    methods: {
        fetchPret() {
            axios.get(this.$store.state.url + '/Pret/', this.headers)
                .then((response) => {
                    this.$store.state.prets = response.data.results
                    console.log(response.data.results)
                }).catch((error) => {
                    console.log(error)
                })
        },
        deletePret(pret) {
            if (confirm(`Voulez vous vraiment supprimer ce Pret?`)) {
                axios.delete(this.$store.state.url + `/Pret/${pret.id}/`, this.headers)
                    .then((response) => {
                        console.log(response.data)
                        this.$store.state.prets.splice(
                            this.$store.state.prets.indexOf(pret), 1)
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
        this.fetchPret()
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
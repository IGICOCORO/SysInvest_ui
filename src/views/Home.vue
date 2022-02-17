<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="count_view red">
                    <div class="count_list">
                        <p>Capital</p>
                        <h2>{{ $store.state.capital[0].solde ?? 0 }}</h2>
                    </div>
                    <div class="detail_list_icon">
                        <i class="fa fa-dollar-sign pink"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="count_view blue">
                    <div class="count_list">
                        <p>Income</p>
                        <h2>78.000.000 Fbu</h2>
                    </div>
                    <div class="detail_list_icon">
                        <i class="fa fa-arrow-left blue" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="count_view green">
                    <div class="count_list">
                        <p>Outcome</p>
                        <h2>65.000.000 Fbu</h2>
                    </div>
                    <div class="detail_list_icon">
                        <i class="fa fa-arrow-right green" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="count_view orange">
                    <div class="count_list">
                        <p>Dettes</p>
                        <h2>25.000.000 Fbu</h2>
                    </div>
                    <div class="detail_list_icon">
                        <i class="fa fa-info-circle yellow" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    components: {},
    data() {
        return {
            capital:[],
            solde: null
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
    methods: {
        fetchCapital() {
            axios.get(this.$store.state.url + '/compte_Principal/', this.headers)
                .then((response) => {
                    this.$store.state.capital = response.data.results
                    console.log(response.data.results)
                }).catch((error) => {
                    console.log(error)
                })
        },
    },
     mounted() {
        this.fetchCapital()
    }
}
</script>
<style>
.count_view {
    height: 80px;
    margin-top: 7px;
    border-radius: 5px;
}

.count_view.red {
    background-color: rgba(255, 0, 0, 0.21);
}

.count_view.blue {
    background-color: rgba(0, 123, 255, 0.18);
}

.count_view.yellow {
    background-color: rgba(255, 255, 0, 0.23);
}

.count_view.orange {
    background-color: rgba(255, 165, 0, 0.19);
}

.count_view.brown {
    background-color: rgb(187, 107, 107);
}

.count_view.bluelight {
    background-color: lightseagreen;
}

.count_view.green {
    background-color: rgba(49, 212, 133, 0.23);
}

.count_view .count_list {
    width: 79%;
    float: left;
}

.count_view .count_list h2 {
    font-size: 15px;
    padding-top: 15px;
    font-weight: 700;
    margin-bottom: 0px;
    text-align: center;
}

.count_view .count_list p {
    font-size: 25px;
    font-weight: 600;
    margin: 0px;
    text-align: center;
}

.count_view .detail_list_icon i {
    font-size: 30px;
    padding-top: 25px;
}

.count_view .detail_list_icon i.pink {
    color: #ff6565;
}

.count_view .detail_list_icon i.blue {
    color: #519cef;
}

.count_view .detail_list_icon i.yellow {
    color: #f7b743;
}

.count_view .detail_list_icon i.brown {
    color: brown;
}

.count_view .detail_list_icon i.bluelight {
    color: rgb(10, 121, 115);
}

.count_view .detail_list_icon i.green {
    color: #25b725;
}
</style>
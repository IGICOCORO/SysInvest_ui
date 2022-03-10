import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"


window.axios = axios;
const app = createApp(App)

app.mixin({
    methods: {
        money(x) {
            let cash = parseInt(x)
            if (!x) return "0";
            return cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        datetime(x) {
            if (!x) return "-"
            let date = new Date(x);
            return new Intl.DateTimeFormat(
                'en-GB', { dateStyle: 'short', timeStyle: 'short' }
            ).format(date)
        },
        refreshToken(callback) {
            let refresh = this.$store.state.user.refresh
            if (!refresh) {
                this.$store.state.user = null;
            }
            axios.post(this.url + "/refresh/", { "refresh": refresh })
                .then((response) => {
                    this.$store.state.user.access = response.data.access
                    callback()
                }).catch((error) => {
                    if (!!error.response && error.response.status == 401) {
                        this.$store.state.user = null;
                    } else {
                        console.error(error)
                    }
                })
        },
        displayErrorOrRefreshToken(error, callback) {
            if (!error.response) {
                if (error.response.status == 401) {
                    let refresh = this.$store.state.user.refresh
                    if (!refresh) {
                        this.$store.state.user = null;
                        return
                    }
                    axios.post(this.url + "/refresh/", { "refresh": refresh })
                        .then((response) => {
                            this.$store.state.user.access = response.data.access
                            if (typeof callback == "function") callback()
                        }).catch((error) => {
                            if (!!error.response && error.response.status == 401) {
                                this.$store.state.user = null;
                            } else {
                                console.error(error)
                                this.displayNotification(error)
                            }
                        })
                } else {
                    console.log("error")
                }
            }
        }
    },
    computed: {
        active_user() {
            return this.$store.state.user;
        },
        url() {
            return this.$store.state.url;
        },
        headers() {
            return {
                headers: {
                    "Authorization": "Bearer " + this.$store.state.user.access
                }
            }
        }
    }

})
app.use(store).use(router).mount('#app')
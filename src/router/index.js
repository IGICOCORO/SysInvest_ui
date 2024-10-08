import { createRouter, createWebHistory } from 'vue-router'
import investotres from '../views/Autres_investissements.vue'
import Credits from '../views/Credit.vue'
import Dettes from '../views/Dettes.vue'
import Home from '../views/Home.vue'
import Income from '../views/Income.vue'
import Motos from '../views/Moto.vue'
import Outcome from '../views/Outcome.vue'
import Parcelle from '../views/Parcelle.vue'
import AddNewPartners from '../views/partners/AddNewPartners.vue'
import Vehicules from '../views/vehicules.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/vehicules', name: 'vehicules', component: Vehicules },
  { path: '/motos', name: 'motos', component: Motos },
  { path: '/credits', name: 'credits', component: Credits },
  { path: '/parcelle', name: 'parcelle', component: Parcelle },
  { path: '/investotres', name: 'investotres', component: investotres },
  { path: '/income', name: 'income', component: Income },
  { path: '/outcome', name: 'outcome', component: Outcome },
  { path: '/dettes', name: 'dettes', component: Dettes },
  { path: '/partners', name: 'partners', component: AddNewPartners },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

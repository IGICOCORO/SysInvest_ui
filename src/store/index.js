import { createStore } from 'vuex'

export default createStore({
  state: {
   url:"http://127.0.0.1:8000",
   user : null,
   capital:[],
   motos :[],
   credits:[],
   parcelles:[],
   autres_investissements:[],
   outcomes :[],
   incomes :[],
   importdartobuja:[],
   importjaptodar:[],
   prets:[],
   emprunts:[],
   vehicules:[],
   liste_users : [
        {
          username : "guy",
          password : "12345",
        },
         {
          username : "hogi",
          password : "12345",
        },
        
      ],
    },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
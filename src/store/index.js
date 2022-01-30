import { createStore } from 'vuex'

export default createStore({
  state: {
   url:"http://127.0.0.1:8000",
   user : null,
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
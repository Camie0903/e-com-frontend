import { createStore } from 'vuex'

export default createStore({
  state: {
    users: null,
    Products: null,
    Product: null
  },
  getters: {
  },
  mutations: {
    setusers: (state, users) => {
      state.users =users
    },
    setProducts: (state, Products) => {
      state.Products = Products
    },
    setProduct: (state, Product) => {
      state.Product = Product
    }
  },
  actions: {
    login: async (context, data) => {
      const{email, password} = data
      const response = await fetch(`http://localhost:6969/users?email=${email}&password=${password}`)
      const usersData = await response.json();
      console.log(usersData)
      context.commit("setusers", usersData[0]) 
     },
    register: async (context, data) => {
      const{FullName, email, password} = data
      fetch('http://localhost:6969/users', {
        method: 'POST',
        body: JSON.stringify({
            FullName: FullName,
            email: email,
            password: password,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => context.commit("setusers", json));

    }
  },
  modules: {
  }
})

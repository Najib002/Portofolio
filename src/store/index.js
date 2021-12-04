import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
  state: {
    firstPosts: [],
    secondPosts: [],
    userDetail: null
  },
  getters: {
    getFirstPosts: state => {
      return state.firstPosts;
    },
    getSecondPosts: state => {
      return state.secondPosts;
    },
    getUserById: state => {
      return state.userDetail;
    },
  },
  mutations: {
    SET_ITEMS (state, getFirstPosts) {
      state.firstPosts = getFirstPosts
    },
    SET_SECOND_ITEMS (state, getSecondPosts) {
      state.secondPosts = getSecondPosts
    },
    SET_USER_ID (state, getUserById) {
      state.userDetail = getUserById
    }
  },
  actions: {
    async loadFirstPosts ({ commit }) {
      try {
          const response = await axios.get('https://reqres.in/api/users?page=1');
          commit('SET_ITEMS', response.data)
        }
       catch (error) {
          console.log(error);
      }
    },

    async loadSecondPosts ({ commit }) {
      try {
          const response = await axios.get('https://reqres.in/api/users?page=2');
          commit('SET_SECOND_ITEMS', response.data)
        }
       catch (error) {
          console.log(error);
      }

    },
    async loadUserById ({commit}, userId) {
      try {
          const response = await axios.get(`https://reqres.in/api/users/${userId}`);
          commit('SET_USER_ID', response.data)
        }
       catch (error) {
          console.log(error);
      }
    }
  },
  modules: {
  }
})

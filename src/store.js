import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router';
import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from 'constants';

let api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Connor"
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
    activeBug: {},
    notes: []
  },

  mutations: {
    setBugs(state, data) {
      state.bugs = data
    },
    setNotes(state, data) {
      state.notes = data
    },
    setActiveBug(state, data) {
      state.activeBug = data
    }
  },

  actions: {
    async getAllBugs({ dispatch, commit }) {
      try {
        let res = await api.get('bugs');
        commit('setBugs', res.data.results)
      } catch (error) { console.error(error) }
    },

    async getBugById({ dispatch, commit }, id) {
      try {
        let res = await api.get('bugs/' + id)
        console.log("got bug: ", res.data.results)
        commit('setActiveBug', res.data.results)

      } catch (error) { console.error(error) }
    },

    async createBug({ commit, dispatch }, payload) {
      try {
        await api.post('bugs', payload)
        dispatch('getAllBugs')
      } catch (error) {
        console.error(error)
      }
    },

    async selectBug({ commit, dispatch }, id) {
      try {
        this.dispatch('getBugById', id)
        //debugger
        router.push({
          name: 'details',
          params: { id: id }
        })
      } catch (error) { console.error(error) }
    },

    async closeBug({ commit, dispatch }, id) {
      await api.delete("bugs/" + id)
      dispatch("getBugById", id)
    },

    async getNotes({ dispatch, commit }, id) {
      try {
        let res = await api.get('bugs/' + id + '/notes');
        console.log('got notes', res.data.results)
        commit('setNotes', res.data.results)
      } catch (error) { console.error(error) }
    },

    async addNote({ commit, dispatch }, payload) {
      try {

        await api.post('bugs/' + payload.bug + '/notes', payload)
        dispatch('getNotes', payload.bug)
      } catch (error) { console.error(error) }
    },

    async deleteNote({ commit, dispatch }, payload) {
      try {
        await api.delete('bugs/' + payload.bugId + "/notes/" + payload.noteId)
        dispatch('getNotes', payload.bugId)
      } catch (error) {
        console.error(error)
      }
    }

  }
})

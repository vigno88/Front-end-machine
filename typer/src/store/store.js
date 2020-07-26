import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        designChoice: '',
        word: ''
    },
    mutations: {
        changeDesignChoice(state, designChoice) {
            state.designChoice = designChoice
        },
        setWord(state, word) {
            state.word = word
        }
    },
    getters: {
        designChoice: state => state.designChoice,
        word: state => state.word
    }
})

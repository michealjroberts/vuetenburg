import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: 0,
    contentBlocks: []
  },
  getters: {
    contentBlocks: (state) => state.contentBlocks
  },
  mutations: {
    addContentBlock(state, contentBlock) {
      contentBlock.id = state.id
			state.contentBlocks.push(contentBlock)
      state.id += 1
		},
    updateContentBlock(state, contentBlock) {
      const index = state.contentBlocks.findIndex(block => block.id === contentBlock.id)
      Vue.set(state.contentBlocks, index, contentBlock)
    },
		removeContentBlock(state, contentBlock) {
      const index = state.contentBlocks.findIndex(block => block.id === contentBlock.id)
      Vue.delete(state.contentBlocks, index)
		}
  }
})

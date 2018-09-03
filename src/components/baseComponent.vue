<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-container pa-0 v-for="(contentBlock, index) in blocks" v-bind:key="contentBlock.index">
          <component v-bind:is="contentBlock.blockComponent" v-bind:contentBlock="contentBlock" v-bind:key="contentBlock.id"></component>
        </v-container>
        <v-speed-dial v-model="fab" :top="top" :bottom="bottom" :right="right" :left="left" :direction="direction" :open-on-hover="hover" :transition="transition">
          <v-btn slot="activator" v-model="fab" color="black" dark fab>
            <v-icon>add</v-icon>
            <v-icon>close</v-icon>
          </v-btn>
          <v-btn fab dark small color="black" v-on:click="addCodeBlock">
            <font-awesome-icon :icon="['fas', 'code']"/>
          </v-btn>
          <v-btn fab dark small color="black" v-on:click="addQuoteBlock">
            <font-awesome-icon :icon="['fas', 'quote-right']"/>
          </v-btn>
        </v-speed-dial>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import store from '../store'

import { mapMutations } from 'vuex'

import CodeBlockComponent from './codeBlockComponent'
import QuoteBlockComponent from './quoteBlockComponent'

export default {
  name: 'BaseComponent',
  components: {
    CodeBlockComponent,
    QuoteBlockComponent
  },
  data: () => ({
    direction: 'right',
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: true,
    right: false,
    bottom: false,
    left: true,
    transition: 'slide-y-reverse-transition',
  }),
  computed: {
    blocks () {
      return this.$store.getters['contentBlocks']
    },
    activeFab () {
      switch (this.tabs) {
        case 'one': return { 'class': 'purple', icon: 'account_circle' }
        case 'two': return { 'class': 'red', icon: 'edit' }
        case 'three': return { 'class': 'green', icon: 'keyboard_arrow_up' }
        default: return {}
      }
    }
  },
  watch: {
    top (val) {
      this.bottom = !val
    },
    right (val) {
      this.left = !val
    },
    bottom (val) {
      this.top = !val
    },
    left (val) {
      this.right = !val
    },
    blocks () {
      console.log(this.blocks)
    }
  },
  methods: {
    addCodeBlock () {
      console.log('Code Block Added!')
      // this.contentBlocks.push({})
      store.commit('addContentBlock', { id: this.id, blockType: 'code', blockComponent: 'CodeBlockComponent', content: 'I am Sir Chicken Digby Caeser, and this is my code!' } )
    },
    addQuoteBlock () {
      console.log('Quote Block Added!')
      // this.contentBlocks.push({})
      store.commit('addContentBlock', { id: this.id, blockType: 'code', blockComponent: 'QuoteBlockComponent', content: 'Really? You\'re going to quote Marilyn Monroe...how original!' } )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

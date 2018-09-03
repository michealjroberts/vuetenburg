<template>
  <v-layout row mb-2>
    <v-flex xs12 sm12>
      <v-card>
        <v-container fill-height fluid pa-2>
          <v-card-title>
            {{ contentBlock.id }}
            <input v-model="content" v-on:change="updateContentBlock()">
          </v-card-title>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon v-on:click="removeContentBlock(contentBlock)">
            <v-icon>delete</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import store from '../store'

export default {
  name: 'QuoteBlockComponent',
  props: {
    contentBlock: Object,
  },
  data () {
    return {
      reveal: true,
      content: this.contentBlock.content
    }
  },
  methods: {
    updateContentBlock() {
      store.commit('updateContentBlock', { id: this.contentBlock.id, blockType: 'code', blockComponent: 'CodeBlockComponent', content: this.content } )
    },
    removeContentBlock(contentBlock) {
      store.commit('removeContentBlock', contentBlock)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input {
  width: 100%;
}
.v-card__title {
  width: 100%;
}
</style>

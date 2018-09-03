<template>
  <v-app>
    <v-content>
      <BaseComponent/>
    </v-content>
  </v-app>
</template>

<script>
import BaseComponent from './components/baseComponent'

export default {
  name: 'App',
  components: {
    BaseComponent
  },
  data () {
    return {}
  }
}
</script>

<style>

</style>

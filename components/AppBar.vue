<template>
  <v-app-bar fixed flat color="white">
    <v-btn text to="/" nuxt active-class="no-active">
      <img class="mr-2" src="/apigear.png" height="32" />
      <b>ApiGear</b>
      <span class="text-caption font-weight-thin ml-4">we::interface</span>
    </v-btn>
    <v-spacer></v-spacer>
    <AppMenuBar :items="items" class="hidden-sm-and-down" />
    <AppMenuList :items="items" class="hidden-md-and-up" />
  </v-app-bar>
</template>

<script>
import AppMenuBar from './AppMenuBar'
import AppMenuList from './AppMenuList'

export default {
  components: {
    AppMenuBar,
    AppMenuList,
  },
  async fetch() {
    const { items } = await this.$content('menu').fetch()
    this.items = items
  },
  data() {
    return {
      items: [],
    }
  },
}
</script>

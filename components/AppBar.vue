<template>
  <v-app-bar elevate-on-scroll fixed color="white">
    <v-btn text to="/" nuxt>
      <img class="mr-2" src="/apigear.png" height="32" />
      <b>ApiGear</b>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn
      color="primary"
      href="https://app.apigear.io/-/register"
      target="_blank"
    >
      Get started for free
    </v-btn>
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
    AppMenuList
  },
  async fetch() {
    const { items } = await this.$content('menu').fetch()
    this.items = items
  },
  data() {
    return {
      items: []
    }
  }
}
</script>

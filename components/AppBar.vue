<template>
  <v-app-bar elevate-on-scroll fixed color="white">
    <v-btn text to="/" nuxt>
      <img class="mr-2" src="/apigear.png" height="32" />
      <b>ApiGear</b>
    </v-btn>
    <v-spacer></v-spacer>
    <AppMenuBar class="hidden-sm-and-down" />
    <AppMenuList class="hidden-md-and-up" />
  </v-app-bar>
</template>

<script>
import AppMenuBar from './AppMenuBar'
import AppMenuList from './AppMenuList'

export default {
  components: {
    AppMenuBar,
    AppMenuList
  }
}
</script>

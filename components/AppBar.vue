<template>
  <v-app-bar elevate-on-scroll fixed color="white">
    <v-btn text to="/" nuxt>
      <img class="mr-2" src="apigear.png" height="32" />
      <b>ApiGear</b>
    </v-btn>
    <v-spacer></v-spacer>
    <AppMenuBar class="hidden-sm-and-down" />
    <v-menu bottom left close-on-click>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" class="hidden-md-and-up" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <AppMenuList />
    </v-menu>
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

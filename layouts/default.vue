<template>
  <v-app>
    <v-container>
      <v-app-bar>
        <v-toolbar-title>ApiGear</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text>Home</v-btn>
        <v-btn text>Pricing</v-btn>
        <v-btn text>Service</v-btn>
        <v-btn text>About</v-btn>
      </v-app-bar>
      <v-content>
        <nuxt></nuxt>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

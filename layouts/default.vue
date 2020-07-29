<template>
  <v-app>
    <v-container>
      <v-sheet color="blue-grey lighten-5">
        <AppBar />
        <v-main>
          <nuxt></nuxt>
        </v-main>
      </v-sheet>
      <Footer />
    </v-container>
  </v-app>
</template>

<script>
import Footer from '@/components/Footer'
import AppBar from '@/components/AppBar'

export default {
  components: {
    Footer,
    AppBar
  },
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

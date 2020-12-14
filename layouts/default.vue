<template>
  <v-app>
    <v-container>
      <AppBar />
      <v-main class="mt-16">
        <nuxt></nuxt>
      </v-main>
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
    AppBar,
  },
}
</script>

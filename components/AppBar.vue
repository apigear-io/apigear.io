<template>
  <v-app-bar dark color="primary">
    <v-toolbar-title>ApiGear</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn v-for="link in links" :key="link.title" text :to="link.to">
      {{ link.title }}
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: 'Use Cases', to: '/cases' },
        { title: 'Pricing', to: '/pricing' },
        { title: 'Learn', to: '/learn' },
        { title: 'About', to: '/about' }
      ]
    }
  }
}
</script>

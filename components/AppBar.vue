<template>
  <v-app-bar elevate-on-scroll fixed color="white">
    <v-btn text to="/" nuxt>
      <img class="mr-2" src="apigear.png" height="32" />
      <b>ApiGear</b>
    </v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        v-for="link in links"
        :key="link.title"
        text
        :to="link.to"
        :href="link.href"
      >
        {{ link.title }}
      </v-btn>
    </v-toolbar-items>
    <v-menu bottom left close-on-click>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" class="hidden-md-and-up" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(link, i) in links" :key="i" :to="link.to">
          <v-list-tile-title>{{ link.title }}</v-list-tile-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      sidebar: false,
      links: [
        { title: 'Use Cases', to: '/cases' },
        { title: 'Markets', to: '/markets' },
        { title: 'Technologies', to: '/technologies' },
        { title: 'Pricing', to: '/pricing' },
        { title: 'Learn', href: 'https://docs.apigear.io/' },
        { title: 'About', to: '/about' },
        { title: 'Sign In', href: 'https://app.apigear.io/-/login' }
      ]
    }
  }
}
</script>

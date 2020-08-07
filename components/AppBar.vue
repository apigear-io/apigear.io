<template>
  <v-app-bar elevate-on-scroll fixed color="white">
    <v-btn text to="/" nuxt>
      <img class="mr-2" src="apigear.png" height="32" />
      <b>ApiGear</b>
    </v-btn>
    <v-spacer></v-spacer>

    <v-btn
      v-for="link in links"
      :key="link.title"
      text
      :to="link.to"
      :href="link.href"
    >
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

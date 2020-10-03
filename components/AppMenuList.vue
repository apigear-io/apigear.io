<template>
  <v-list>
    <v-list-item
      v-for="(link, i) in links"
      :key="i"
      :to="link.to"
      :href="link.href"
      target="blank"
    >
      <v-list-item-title>{{ link.title }}</v-list-item-title>
    </v-list-item>
  </v-list>
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
        { title: 'Feature Comparision', to: '/pricing' },
        {
          title: 'Roadmap',
          href: 'https://github.com/apigear-io/apigear-roadmap/projects/1'
        },
        { title: 'Docs', href: 'https://docs.apigear.io' },
        { title: 'Blog', href: 'https://medium.com/apigear' },
        { title: 'About', to: '/about' },
        { title: 'Login', href: 'https://app.apigear.io/-/login' },
        { title: 'Register', href: 'https://app.apigear.io/-/register' }
      ]
    }
  }
}
</script>

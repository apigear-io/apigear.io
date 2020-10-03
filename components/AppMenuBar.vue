<template>
  <v-toolbar-items>
    <v-menu
      v-for="item in items"
      :key="item.title"
      offset-y
      min-width="240"
      open-on-hover
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          {{ item.title }}
          <v-icon right>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list dense>
        <v-list-item
          v-for="child in item.children"
          :key="child.title"
          dense
          :to="child.to"
          :href="child.href"
          target="blank"
        >
          <v-list-item-title>{{ child.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar-items>
</template>

<script>
export default {
  name: 'AppMenu',
  data() {
    return {
      items: [
        {
          title: 'Product',
          children: [
            { title: 'Use Cases', to: '/cases' },
            { title: 'Markets', to: '/markets' },
            { title: 'Technologies', to: '/technologies' }
          ]
        },
        {
          title: 'Features',
          children: [
            { title: 'Pricing', to: '/pricing' },
            { title: 'Feature Comparision', to: '/pricing' },
            {
              title: 'Roadmap',
              href: 'https://github.com/apigear-io/apigear-roadmap/projects/1'
            }
          ]
        },
        {
          title: 'Learn',
          children: [
            { title: 'Docs', href: 'https://docs.apigear.io' },
            {
              title: 'Community',
              href: 'https://gitter.im/apigear-io/community'
            },
            { title: 'Blog', href: 'https://medium.com/apigear' }
          ]
        },
        {
          title: 'Company',
          children: [{ title: 'About', to: '/about' }]
        },
        {
          title: 'Account',
          children: [
            { title: 'Login', href: 'https://app.apigear.io/-/login' },
            { title: 'Register', href: 'https://app.apigear.io/-/register' }
          ]
        }
      ]
    }
  }
}
</script>

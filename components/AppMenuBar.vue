<template>
  <v-toolbar-items>
    <template v-for="item in items">
      <v-menu
        v-if="item.children"
        :key="item.title"
        attach=""
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
          <template v-for="child in item.children">
            <div :key="child.title">
              <v-list-item v-if="child.to" dense :to="child.to">
                <v-list-item-title>{{ child.title }}</v-list-item-title>
              </v-list-item>
              <v-list-item v-else dense :href="child.href" target="_blank">
                <v-list-item-title>{{ child.title }}</v-list-item-title>
              </v-list-item>
            </div>
          </template>
        </v-list>
      </v-menu>
      <v-item v-else :key="item.title" attach="" offset-y min-width="240">
        <v-btn v-if="item.to" text :to="item.to">
          {{ item.title }}
        </v-btn>
        <v-btn v-else text :href="item.href" target="_blank">
          {{ item.title }}
        </v-btn>
      </v-item>
    </template>
    <div>
      <v-btn
        color="primary"
        outlined
        href="https://app.apigear.io/-/register"
        target="_blank"
        class="mt-3"
      >
        Get started for free
      </v-btn>
    </div>
  </v-toolbar-items>
</template>

<script>
export default {
  name: 'AppMenuBar',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

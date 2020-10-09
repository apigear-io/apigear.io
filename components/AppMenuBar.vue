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
      <v-btn
        v-else
        :key="item.title"
        text
        dense
        :to="item.to"
        :href="item.href"
        target="blank"
      >
        {{ item.title }}
      </v-btn>
    </template>
  </v-toolbar-items>
</template>

<script>
export default {
  name: 'AppMenuBar',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

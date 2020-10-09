<template>
  <v-toolbar-items>
    <v-menu bottom left close-on-click>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <template v-for="item in items">
          <div v-if="item.children" :key="item.title">
            <v-list-item
              v-for="child in item.children"
              :key="child.title"
              :to="child.to"
              :href="child.href"
              target="blank"
            >
              <v-list-item-title>{{ child.title }}</v-list-item-title>
            </v-list-item>
          </div>
          <v-list-item
            v-else
            :key="item.title"
            :to="item.to"
            :href="item.href"
            target="blank"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-menu>
  </v-toolbar-items>
</template>

<script>
export default {
  name: 'AppMenuList',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

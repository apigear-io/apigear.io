<template>
  <v-toolbar-items>
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
    <v-spacer></v-spacer>
    <v-menu bottom left close-on-click>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <template v-for="item in items">
          <div v-if="item.children" :key="item.title">
            <template v-for="child in item.children">
              <div :key="child.title">
                <v-list-item v-if="child.to" :to="child.to">
                  <v-list-item-title>{{ child.title }}</v-list-item-title>
                </v-list-item>
                <v-list-item v-else :href="child.href" target="_blank">
                  <v-list-item-title>{{ child.title }}</v-list-item-title>
                </v-list-item>
              </div>
            </template>
          </div>
          <div v-else :key="item.title">
            <v-list-item v-if="item.to" :to="item.to">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
            <v-list-item v-else :href="item.href" target="_blank">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </div>
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
      required: true,
    },
  },
}
</script>

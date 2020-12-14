<template>
  <v-footer dark>
    <v-row no-gutters>
      <v-col
        v-for="(category, i) in body.links"
        :key="i"
        cols="8"
        md="3"
        sm="3"
      >
        <v-card outlined dark color="transparent">
          <v-card-subtitle style="text-transform: uppercase" class="mb-n2">{{
            category.name
          }}</v-card-subtitle>
          <v-list dense color="transparent">
            <v-list-item
              v-for="(link, j) in category.links"
              :key="j"
              class="my-n4"
            >
              <v-list-item-subtitle>
                <v-btn v-if="link.to" depressed x-small :to="link.to">
                  {{ link.title }}
                </v-btn>
                <v-btn
                  v-else-if="link.href"
                  depressed
                  x-small
                  :href="link.href"
                  target="_blank"
                >
                  {{ link.title }}
                </v-btn>
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" sm="5">
        <v-card outlined dark color="transparent">
          <v-card-subtitle
            >(c) {{ new Date().getFullYear() }} —
            <strong>{{ body.title }}</strong></v-card-subtitle
          >
          <v-card-text>{{ body.text }}</v-card-text>

          <v-btn depressed x-small :to="body.impressum">
            Impressum - legal notice</v-btn
          >
          <v-card-actions>
            <v-btn
              v-for="(link, i) in body.social"
              :key="i"
              icon
              small
              :href="link.href"
              target="_blank"
            >
              <v-icon>mdi-{{ link.name }}</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  async fetch() {
    const { body } = await this.$content('footer').fetch()
    this.body = body
  },
  data() {
    return {
      body: {
        title: '',
        text: '',
        links: [],
        social: [],
      },
    }
  },
}
</script>

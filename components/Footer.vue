<template>
  <v-footer dark>
    <v-row no-gutters>
      <v-col cols="6">
        <v-card outlined dark color="transparent">
          <v-card-subtitle
            >(c) {{ new Date().getFullYear() }} —
            <strong>{{ body.title }}</strong></v-card-subtitle
          >
          <v-card-text>{{ body.text }}</v-card-text>
          <v-card-actions>
            <v-btn
              v-for="(link, i) in body.social"
              :key="i"
              icon
              small
              :href="link.href"
            >
              <v-icon>mdi-{{ link.name }}</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="auto">
        <v-card outlined dark color="transparent">
          <v-card-subtitle>Quick Links</v-card-subtitle>
          <v-list dense color="transparent">
            <v-list-item v-for="(link, i) in body.links" :key="i">
              <v-list-item-subtitle>
                <v-btn depressed x-small :href="link.href">
                  {{ link.title }}
                </v-btn>
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
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
        social: []
      }
    }
  }
}
</script>

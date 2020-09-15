<template>
  <v-footer dark>
    <v-row>
      <v-col cols="6">
        <v-card outlined dark color="transparent">
          <v-card-subtitle>{{ body.title }}</v-card-subtitle>
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
      <v-col cols="3">
        <v-card outlined dark color="transparent">
          <v-card-subtitle>Quick Links</v-card-subtitle>
          <v-list dense color="transparent">
            <v-list-item v-for="(link, i) in body.links" :key="i">
              <v-list-item-subtitle>{{ link.title }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card flat dark color="transparent">
          <v-card-subtitle>Contact Info</v-card-subtitle>
          <v-list dense color="transparent">
            <v-list-item>
              <v-list-item-subtitle>{{
                body.contact.location
              }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-subtitle>{{
                body.contact.email
              }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card flat dark color="transparent">
          <v-card-subtitle>
            (c) {{ new Date().getFullYear() }} — <strong>ApiGear UG</strong>
          </v-card-subtitle>
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

<template>
  <v-row class="my-4">
    <v-col cols="12" sm="6">
      <v-card flat>
        <v-card-subtitle class="text-subtitle-1">About ApiGear</v-card-subtitle>
        <v-card-title class="text-h5">{{ body.title }}</v-card-title>
        <v-card-text>{{ body.text }}</v-card-text>
        <v-card-actions>
          <v-btn-toggle>
            <v-btn
              outlined
              small
              color="primary"
              href="https://docs.apigear.io/guide/start"
              >Read More</v-btn
            >
          </v-btn-toggle>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" align-self="center">
      <v-img src="team_spirit.svg" aspect-ratio="1.5"></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'About',
  async fetch() {
    const { body } = await this.$content('about').fetch()
    this.body = body
  },
  data() {
    return {
      body: { title: '', text: '' }
    }
  }
}
</script>

<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-card flat class="my-4">
        <v-card-subtitle>About ApiGear</v-card-subtitle>
        <v-card-title>{{ body.title }}</v-card-title>
        <v-card-text>{{ body.text }}</v-card-text>
        <v-card-actions>
          <v-btn outlined color="primary">Read More</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" md="6" align-self="center">
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

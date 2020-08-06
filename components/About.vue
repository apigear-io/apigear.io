<template>
  <v-row>
    <v-col>
      <v-card flat>
        <v-card-subtitle>About ApiGear</v-card-subtitle>
        <v-card-title
          ><h2>{{ body.title }}</h2></v-card-title
        >
        <v-divider></v-divider>
        <v-card-text>{{ body.text }}</v-card-text>
        <v-card-actions>
          <v-btn outlined color="primary">Read More</v-btn>
        </v-card-actions>
      </v-card>
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

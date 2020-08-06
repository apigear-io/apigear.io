<template>
  <v-row>
    <v-col cols="6">
      <v-card flat>
        <v-card-title>
          <h3>{{ body.title }}</h3>
        </v-card-title>
        <v-card-text>{{ body.text }}</v-card-text>
        <v-card-actions>
          <v-btn color="primary">Sign up</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="6">
      <v-img src="/problem_solving.svg"></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async fetch() {
    const { body } = await this.$content('banner').fetch()
    this.body = body
  },
  data() {
    return {
      body: { title: '', text: '' }
    }
  }
}
</script>

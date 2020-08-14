<template>
  <v-row>
    <v-col cols="6">
      <v-card flat class="my-4">
        <v-card-title class="text-h3">{{ body.title }}</v-card-title>
        <v-card-subtitle>{{ body.text }}</v-card-subtitle>
        <v-card-actions>
          <v-btn color="primary" href="https://app.apigear.io/-/register">
            Sign up
          </v-btn>
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

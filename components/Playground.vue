<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8">
      <v-card flat class="my-4">
        <v-card-title class="text-h2">{{ body.title }}</v-card-title>
        <v-card-subtitle class="text-subtitle-1 my-4">{{
          body.text
        }}</v-card-subtitle>
        <v-card-actions class="my-4">
          <v-btn
            color="primary"
            href="https://app.apigear.io/-/demos/playground"
          >
            Visit Playground
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" sm="4">
      <v-img src="/features/playground.png"></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async fetch() {
    const { body } = await this.$content('playground').fetch()
    this.body = body
  },
  data() {
    return {
      body: { title: '', text: '' }
    }
  }
}
</script>

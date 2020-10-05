<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8">
      <v-card flat class="my-4">
        <v-card-title class="text-h2">{{ body.title }}</v-card-title>
        <v-card-subtitle class="text-subtitle-1 my-4">{{
          body.text
        }}</v-card-subtitle>
      </v-card>
    </v-col>
    <v-col cols="12" sm="4">
      <v-card-actions class="my-4">
        <v-btn color="primary" href="https://app.apigear.io/-/register">
          Sign up
        </v-btn>
      </v-card-actions>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    body: {
      type: Object,
      default() {
        return {
          title: 'TITLE',
          text: 'TEXT'
        }
      }
    }
  }
}
</script>

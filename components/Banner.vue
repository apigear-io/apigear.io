<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="6">
      <v-card flat class="my-4">
        <v-card-title class="text-h3">{{ body.title }}</v-card-title>
        <v-card-subtitle class="text-subtitle-1 my-4">{{
          body.text
        }}</v-card-subtitle>
        <v-card-actions class="my-4">
          <v-btn color="primary" href="https://app.apigear.io/-/register">
            Get started for free
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card flat>
        <v-card-text class="text-center">
          <iframe
            id="ytplayer"
            type="text/html"
            width="480"
            height="270"
            :src="
              `https://www.youtube-nocookie.com/embed/${body.video}?autoplay=0&origin=http://apigear.io`
            "
            frameborder="0"
          ></iframe>
        </v-card-text>
      </v-card>
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

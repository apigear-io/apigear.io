<template>
  <v-row class="my-4">
    <v-col cols="12" sm="6">
      <v-card flat>
        <v-card-title class="text-h5">{{ body.title }}</v-card-title>
        <v-card-text>{{ body.text }}</v-card-text>
        <v-card-actions>
          <v-btn-toggle>
            <v-btn
              outlined
              small
              color="primary"
              href="https://docs.apigear.io/"
              target="blank"
              >Read More</v-btn
            >
          </v-btn-toggle>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="10" sm="5" align-self="center">
      <v-img src="/devcycle_43_light.svg" aspect-ratio="1.5"></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Workflow',
  props: {
    body: {
      type: Object,
      required: true
    }
  }
}
</script>

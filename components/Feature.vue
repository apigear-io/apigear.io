<template>
  <v-row>
    <v-col v-for="(feature, i) in features" :key="i" cols="12" sm="4">
      <v-card flat height="100%" class="my-4">
        <v-card-subtitle>
          <v-img :src="feature.image" aspect-ratio="1.7"></v-img>
        </v-card-subtitle>
        <v-card-title class="text-h5">{{ feature.title }}</v-card-title>
        <v-card-text>{{ feature.text }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async fetch() {
    const { body } = await this.$content('features').fetch()
    this.features = body
  },
  data() {
    return {
      features: []
    }
  }
}
</script>

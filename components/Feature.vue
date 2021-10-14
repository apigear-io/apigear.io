<template>
  <v-row>
    <v-col v-for="(feature, i) in features" :key="i" cols="12" sm="4">
      <v-card flat class="my-4">
        <v-card-subtitle>
          <v-img :src="feature.image" aspect-ratio="1.7"></v-img>
        </v-card-subtitle>
        <v-card-title class="text-h5">{{ feature.title }}</v-card-title>
        <v-card-text>{{ feature.text }}</v-card-text>
        <v-card-actions v-if="feature.linktitle">
          <v-btn-toggle>
            <v-btn
              outlined
              small
              color="primary"
              :href="feature.href"
              target="blank"
            >
              {{ feature.linktitle }}
            </v-btn>
          </v-btn-toggle>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    features: {
      type: Array,
      required: true,
    },
  },
}
</script>

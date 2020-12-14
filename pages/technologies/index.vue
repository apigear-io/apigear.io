<template>
  <v-card flat>
    <v-card-title>Technologies</v-card-title>
    <v-card-subtitle
      >Discover how and why ApiGear is the leading ObjectAPI technology driving
      software of devices and applications.</v-card-subtitle
    >
    <v-card-text>
      <v-item-group multiple>
        <v-row>
          <v-col v-for="(slide, i) in slides" :key="i" cols="12" md="4">
            <v-item>
              <v-card
                shaped
                :to="`/technologies/${slide.slug}`"
                min-height="280px"
              >
                <v-img :src="slide.image" aspect-ratio="3"></v-img>
                <v-card-title>{{ slide.title }}</v-card-title>
                <v-card-text>{{ slide.description }}</v-card-text>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const slides = await $content('technologies').fetch()
    return {
      slides,
    }
  },
}
</script>

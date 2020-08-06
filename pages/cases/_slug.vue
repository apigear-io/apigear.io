<template>
  <v-card outlined shaped class="mx-auto mb-4">
    <v-card-title>{{ slide.title }}</v-card-title>
    <v-img
      class="white--text align-end"
      height="200px"
      :src="slide.image"
      gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    >
      <v-card-title>{{ slide.description }}</v-card-title>
    </v-img>
    <v-card-text>
      <nuxt-content :document="slide" />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  async fetch() {
    const slug = this.$route.params.slug
    console.log('slug', slug)
    const data = await this.$content('cases', slug).fetch()
    this.slide = data
  },
  data() {
    return {
      slide: {
        title: '',
        description: ''
      }
    }
  }
}
</script>

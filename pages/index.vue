<template>
  <v-container>
    <Banner />
    <!-- <Partner /> -->
    <Feature />
    <Playground />
    <About />
    <!-- <Counter />
    <Testimonial /> -->
  </v-container>
</template>

<script>
import Banner from '@/components/Banner'
// import Partner from '@/components/Partner'
import Feature from '@/components/Feature'
import About from '@/components/About'
// import Counter from '@/components/Counter'
// import Testimonial from '@/components/Testimonial'
export default {
  components: {
    Banner,
    // Partner,
    Feature,
    About
    // Counter,
    // Testimonial
  }
}
</script>

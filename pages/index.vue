<template>
  <v-container>
    <Banner />
    <!-- <Partner /> -->
    <Feature />
    <Playground />
    <Workflow />
    <!-- <Counter />
    <Testimonial /> -->
  </v-container>
</template>

<script>
import Banner from '@/components/Banner'
// import Partner from '@/components/Partner'
import Feature from '@/components/Feature'
import Workflow from '@/components/Workflow'
// import Counter from '@/components/Counter'
// import Testimonial from '@/components/Testimonial'
export default {
  components: {
    Banner,
    // Partner,
    Feature,
    Workflow
    // Counter,
    // Testimonial
  }
}
</script>

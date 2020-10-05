<template>
  <v-card flat>
    <Pricing
      :plans="body.plans"
      :title="body.title"
      :description="body.description"
    ></Pricing>
    <FeatureTable></FeatureTable>
  </v-card>
</template>

<script>
import Pricing from '@/components/Pricing'
import FeatureTable from '@/components/FeatureTable'

export default {
  name: 'PricingPage',
  components: {
    Pricing,
    FeatureTable
  },
  async asyncData({ $content }) {
    const { body } = await $content('plans').fetch()
    return {
      body
    }
  }
}
</script>

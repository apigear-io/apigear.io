<template>
  <v-card>
    <Pricing></Pricing>
    <FeatureTable></FeatureTable>
  </v-card>
</template>

<script>
import Pricing from '@/components/Pricing'
import FeatureTable from '@/components/FeatureTable'

export default {
  components: {
    Pricing,
    FeatureTable
  }
}
</script>

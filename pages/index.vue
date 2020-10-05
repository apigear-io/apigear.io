<template>
  <v-container>
    <Banner :body="banner" />
    <Feature :features="features" />
    <Workflow :body="workflow" />
  </v-container>
</template>

<script>
import Banner from '@/components/Banner'
import Feature from '@/components/Feature'
import Workflow from '@/components/Workflow'

export default {
  components: {
    Banner,
    Feature,
    Workflow
  },
  async asyncData({ $content }) {
    const banner = await $content('banner').fetch()
    const features = await $content('features').fetch()
    const workflow = await $content('workflow').fetch()
    return {
      banner: banner.body,
      features: features.body,
      workflow: workflow.body
    }
  }
}
</script>

<template>
  <Workflow :body="body"></Workflow>
</template>

<script>
import Workflow from '@/components/Workflow'
export default {
  components: {
    Workflow
  },
  async asyncData({ $content }) {
    const { body } = await $content('workflow').fetch()
    return {
      body
    }
  }
}
</script>

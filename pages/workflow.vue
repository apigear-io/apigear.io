<template>
  <workflow :body="body" />
</template>

<script>
import Workflow from '@/components/Workflow.vue'
export default {
  components: {
    Workflow,
  },
  async asyncData({ $content }) {
    const { body } = await $content('workflow').fetch()
    return {
      body,
    }
  },
}
</script>

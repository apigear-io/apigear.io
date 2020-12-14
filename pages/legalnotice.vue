<template>
  <Legalnotice :body="body"></Legalnotice>
</template>

<script>
import Legalnotice from '@/components/Legalnotice'
export default {
  components: {
    Legalnotice,
  },
  async asyncData({ $content }) {
    const { body } = await $content('legalnotice').fetch()
    return {
      body,
    }
  },
}
</script>

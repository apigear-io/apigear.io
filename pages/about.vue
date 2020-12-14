<template>
  <About :body="body"></About>
</template>

<script>
import About from '@/components/About'
export default {
  components: {
    About,
  },
  async asyncData({ $content }) {
    const { body } = await $content('about').fetch()
    return {
      body,
    }
  },
}
</script>

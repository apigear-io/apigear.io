<template>
  <div>
    <v-tabs>
      <v-tab to="/cases/design">
        Design
      </v-tab>
      <v-tab to="/cases/simulate">
        Simulation
      </v-tab>
      <v-tab to="/cases/analyse">
        Analytics
      </v-tab>
    </v-tabs>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {}
</script>

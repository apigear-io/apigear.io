<template>
  <v-card outlined class="my-4">
    <v-alert border="top" colored-border color="primary">
      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle>{{ description }}</v-card-subtitle>
      <v-card-text>
        <v-container>
          <v-row align="center" justify="center">
            <v-col v-for="(plan, i) in plans" :key="i" cols="12" sm="4">
              <v-card class="text-center pb-4">
                <v-alert border="top" colored-border :color="plan.color">
                  <v-card-title class="justify-center">
                    {{ plan.title }}
                  </v-card-title>
                </v-alert>
                <v-card-text>{{ plan.description }}</v-card-text>
                <v-card-text class="text-center">
                  <v-btn outlined color="accent">{{ plan.price }}</v-btn>
                </v-card-text>
                <v-card-subtitle class="text-center">{{
                  plan.subscription
                }}</v-card-subtitle>
                <v-card-actions class="text-center">
                  <v-spacer />
                  <v-btn color="primary">{{ plan.action }}</v-btn>
                  <v-spacer />
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-alert>
  </v-card>
</template>

<script>
export default {
  async fetch() {
    const { body } = await this.$content('plans').fetch()
    console.log('body.plans', body)
    this.plans = body.plans
    this.title = body.title
    this.description = body.description
  },
  data() {
    return {
      title: '',
      description: '',
      plans: []
    }
  }
}
</script>

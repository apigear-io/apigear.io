<template>
  <v-container>
    <v-card flat>
      <v-card-title>Feature Comparision</v-card-title>
      <v-card-text>
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>Name</th>

                    <th v-for="(plan, i) in plans" :key="i">
                      {{ plan.title }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(feature, i) in features" :key="i">
                    <td>{{ feature.name }}</td>
                    <td>
                      <span v-if="feature.basic.text">
                        {{ feature.basic.text }}
                      </span>
                      <v-icon
                        v-if="feature.basic.icon"
                        :color="feature.basic.color"
                      >
                        {{ feature.basic.icon }}
                      </v-icon>
                    </td>
                    <td>
                      <span v-if="feature.business.text">
                        {{ feature.business.text }}
                      </span>
                      <v-icon
                        v-if="feature.business.icon"
                        :color="feature.business.color"
                      >
                        {{ feature.business.icon }}
                      </v-icon>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  async fetch() {
    const { body } = await this.$content('plans').fetch()
    this.plans = body.plans
    this.features = body.features
  },
  data() {
    return {
      plans: [],
      features: []
    }
  }
}
</script>

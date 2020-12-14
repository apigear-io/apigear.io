<template>
  <v-card outlined class="my-4">
    <v-alert border="top" colored-border color="primary">
      <v-card-title>Feature Comparision</v-card-title>
      <v-card-text>
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-button">Feature</th>
                    <th v-for="(plan, i) in plans" :key="i" class="text-button">
                      {{ plan.title }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(feature, i) in features" :key="i">
                    <td>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn small text v-bind="attrs" v-on="on">
                            {{ feature.name }}
                            <v-icon right dark>mdi-information-outline</v-icon>
                          </v-btn>
                        </template>
                        {{ feature.description }}
                      </v-tooltip>
                    </td>
                    <td>
                      <span v-if="feature.free.text">
                        {{ feature.free.text }}
                      </span>
                      <v-icon
                        v-if="feature.free.icon"
                        :color="feature.free.color"
                      >
                        {{ feature.free.icon }}
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
    </v-alert>
  </v-card>
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
      features: [],
    }
  },
}
</script>

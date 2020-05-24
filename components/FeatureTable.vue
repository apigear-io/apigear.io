<template>
  <v-container>
    <v-card>
      <v-card-title>Feature Table</v-card-title>
      <v-card-text>
        <v-row align="center" justify="center">
          <v-col cols="8">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Starter</th>
                    <th>Professional</th>
                    <th>Business</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in items" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.starter }}</td>
                    <td>{{ item.pro }}</td>
                    <td>{{ item.business }}</td>
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
  data() {
    return {
      items: [
        { name: 'Design API', starter: true, pro: true, business: true },
        { name: 'Simulate API', starter: true, pro: true, business: true },
        { name: 'SDK as Service', starter: true, pro: true, business: true }
      ]
    }
  }
}
</script>

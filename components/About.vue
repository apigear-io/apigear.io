<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card flat>
          <v-card-title class="text-h5">{{ body.title }}</v-card-title>
          <v-card-text>{{ body.text }}</v-card-text>
          <v-card-actions>
            <v-btn-toggle>
              <v-btn
                outlined
                small
                color="primary"
                href="https://medium.com/apigear"
                target="blank"
                >More on our blog</v-btn
              >
            </v-btn-toggle>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col align="center" justify="center">
        <v-card flat>
          <v-img src="apigear.png" width="100px" aspect-ratio="1"></v-img>
          <v-card-subtitle>Follow us on</v-card-subtitle>
          <v-card-actions class="justify-center">
            <v-btn
              v-for="(link, i) in body.social"
              :key="i"
              icon
              small
              :href="link.href"
              target="blank"
            >
              <v-icon>mdi-{{ link.name }}</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-card flat>
      <v-card-title class="text-h5">The team</v-card-title>
      <v-row justify="center">
        <v-col v-for="member in body.team" :key="member.name" md="4">
          <v-card max-width="250" min-width="250">
            <v-img
              :src="member.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.0), rgba(0,0,0,.3)"
              width="250px"
            >
              <v-card-title v-text="member.name"></v-card-title>
            </v-img>
            <v-card-actions>
              <v-card-subtitle>{{ member.role }}</v-card-subtitle>
              <v-spacer></v-spacer>
              <v-btn icon target="blank" :href="member.linkedin">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-text class="justify-left">
              <b>Why ApiGear?</b><br />
              {{ member.motivation }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  async fetch() {
    const { body } = await this.$content('about').fetch()
    this.body = body
  },
  data() {
    return {
      body: { title: '', text: '' }
    }
  }
}
</script>

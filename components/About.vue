<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card flat>
          <v-card-title class="text-h4">{{ body.title }}</v-card-title>
          <v-card-text class="text-body-1">{{ body.text }}</v-card-text>
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
          <v-img src="/apigear.png" width="100px" aspect-ratio="1"></v-img>
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
    <v-card flat class="mt-4">
      <v-card-title class="text-h4">Meet the team</v-card-title>
      <v-container>
        <v-row justify="center">
          <v-col v-for="member in body.team" :key="member.name" md="4">
            <v-card min-height="60vh">
              <v-card-subtitle class="text-center">
                <v-avatar size="160">
                  <v-img :src="member.src"> </v-img>
                </v-avatar>
              </v-card-subtitle>
              <v-card-title v-text="member.name"></v-card-title>
              <v-card-subtitle
                >{{ member.role }}
                <v-btn icon target="blank" :href="member.linkedin">
                  <v-icon right>mdi-linkedin</v-icon>
                </v-btn>
              </v-card-subtitle>
              <v-card-subtitle class="text-subtitle-2">
                Why ApiGear?
              </v-card-subtitle>
              <v-card-text>
                {{ member.motivation }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  props: {
    body: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <v-row>
    <v-col cols="12" sm="8" md="8" lg="8" xl="6">
      <v-card flat>
        <v-card-title class="subheading font-weight-bold">{{
          body.general.company
        }}</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-list dense>
            <v-list-item class="my-n2">
              <v-list-item-content>Geschäftsführer </v-list-item-content>
              <v-list-item-content>{{ body.general.ceo }}</v-list-item-content>
            </v-list-item>
            <v-list-item class="my-n2">
              <v-list-item-content>Anschrift </v-list-item-content>
              <v-list-item-content>{{
                body.general.street
              }}</v-list-item-content>
            </v-list-item>
            <v-list-item class="my-n2">
              <v-list-item-content></v-list-item-content>
              <v-list-item-content>{{ body.general.city }}</v-list-item-content>
            </v-list-item>
            <v-list-item class="my-n2">
              <v-list-item-content>email </v-list-item-content>
              <v-list-item-content>{{
                body.general.email
              }}</v-list-item-content>
            </v-list-item>
            <v-list-item class="my-n2">
              <v-list-item-content>Handelsregister </v-list-item-content>
              <v-list-item-content>{{
                body.general.handelsregister
              }}</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
      <v-card flat>
        <v-card-subtitle class="subheading font-weight-bold"
          >Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</v-card-subtitle
        >
        <v-divider></v-divider>
        <v-card-text>
          <v-list dense>
            <v-list-item class="my-n2">
              <v-list-item-content></v-list-item-content>
              <v-list-item-content>{{ body.content.ceo }}</v-list-item-content>
            </v-list-item>
            <v-list-item class="my-n2">
              <v-list-item-content>Anschrift </v-list-item-content>
              <v-list-item-content>{{
                body.content.street
              }}</v-list-item-content>
            </v-list-item>
            <v-list-item class="my-n2">
              <v-list-item-content></v-list-item-content>
              <v-list-item-content>{{ body.content.city }}</v-list-item-content>
            </v-list-item>
            <v-list-item class="my-n2">
              <v-list-item-content>email </v-list-item-content>
              <v-list-item-content
                ><a :href="`mailto:${body.content.email}`">{{
                  body.content.email
                }}</a></v-list-item-content
              >
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
      <v-card v-for="paragraph in body.paragraphs" :key="paragraph.name" flat>
        <v-card-subtitle class="subheading font-weight-bold">{{
          paragraph.name
        }}</v-card-subtitle>
        <v-card-text
          ><span style="white-space: pre-wrap;">{{
            paragraph.text
          }}</span></v-card-text
        >
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Legalnotice',
  props: {
    body: {
      type: Object,
      required: true
    }
  }
}
</script>

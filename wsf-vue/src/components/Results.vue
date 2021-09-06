<template>
  <div>
    <v-list>
      <v-list-item
        v-for="(question, i) in questions"
        :key="i"
        :class="{
            correct: results[i],
            incorrect: !results[i]
        }"
      >
        <v-list-item-icon>
          <v-icon></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="question.description"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <div class="text-center">
      <v-btn
        class="mx-2"
        fab
        dark
        small
        color="primary"
      >
        <v-icon dark>
          mdi-twitter
        </v-icon>
      </v-btn>
      <v-btn
        class="mx-2"
        fab
        dark
        small
        color="primary"
      >
        <v-icon dark>
          mdi-facebook
        </v-icon>
      </v-btn>
      <v-btn
        class="mx-2"
        fab
        dark
        small
        color="primary"
      >
        <v-icon dark>
          mdi-vk
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "ResultsComponent",
  props: {
  },
  computed: {
    ...mapGetters(['results', 'questions']),
  },
  methods: {
  }
};
</script>

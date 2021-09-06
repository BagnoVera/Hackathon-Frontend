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
      <v-list-item-avatar>
        <v-icon v-if="results[i]">mdi-thumb-up</v-icon>
        <v-icon v-else>mdi-thumb-down</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title v-html="question.description"></v-list-item-title>
        <div class="d-flex flex-row">
          Правильных ответов
        </div>
        </v-list-item-content>
        {{percents[i]}}% <v-progress-circular class="ml-1" :value="percents[i]"></v-progress-circular>
      </v-list-item>
    </v-list>
    <div class="text-center mt-10">
      <v-btn
        class="mx-2"
        dark
        small
        color="primary"
        @click="shareVK"
      >
        <v-icon dark>
          mdi-twitter
        </v-icon>
      </v-btn>
      <v-btn
        class="mx-2"
        dark
        small
        color="primary"
        @click="shareFB"
      >
        <v-icon dark>
          mdi-facebook
        </v-icon>
      </v-btn>
      <v-btn
        class="mx-2"
        dark
        small
        color="primary"
        @click="shareTW"
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
  data: function() {
    return {
      percents: [76, 22]
    }
  },
  props: {
  },
  computed: {
    ...mapGetters(['results', 'questions']),
  },
  methods: {
    shareVK () {
      window.open(`https://vk.com/share.php?url=${document.URL}`, "_blank", 'height=200,width=300')
    },
    shareFB () {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${document.URL}`, "_blank", 'height=200,width=300')
    },
    shareTW () {
      window.open(`https://twitter.com/intent/tweet?url=${document.URL}`, "_blank", 'height=200,width=300')
    }
  }
};
</script>
<style media="screen">
  .full-width {
    flex-basis: 100%;
    width: 100%
  }
</style>

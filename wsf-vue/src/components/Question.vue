<template>
  <div>
    <div>
      {{question.description}}
    </div>
    <img class="image mt-5" v-if="question.image"
      max-height="500"
      max-width="100%"
      :src="question.image"
    />
    <v-form v-model="valid">
      <v-radio-group v-model='radioGroup'>
        <v-radio
          :disabled="responded"
          class="radio"
          :class="{
            correct: responded && responce.correct,
            incorrect: responded && radioGroup === index && !responce.correct
          }"
          v-for='(responce, index) in question.responces'
          :key='index'
          :label='responce.text'
          :value='index'
        ></v-radio>
      </v-radio-group>
    </v-form>
    <div v-if="responded">
      {{question.responce}}
    </div>
    <v-btn
      v-if="!responded"
      @click="respond"
    >
      Ответить
    </v-btn>
    <v-btn
      class="mt-10"
      v-else
      @click="nextQuestion"
    >
      Далее
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'QuestionComponent',
  data: function () {
    return {
      valid: true,
      responded: false,
      radioGroup: ''
    }
  },
  computed: {
    ...mapGetters(['questions']),
    question: function () {
      return this.questions[parseInt(this.$route.params.id)-1]
    },
    correct: function () {
      return this.question.responces.findIndex(question => question.correct)
    },
  },
  methods: {
    respond:function (){
      this.responded = true;
      this.$store.commit('setResponce', this.radioGroup === this.correct);
    },
    nextQuestion:function (){
      if(parseInt(this.$route.params.id) === this.questions.length) {
        this.$router.push(`/test/results`);
      } else {
        this.$router.push(`/test/${parseInt(this.$route.params.id) + 1}`);
        this.responded = false;
        this.radioGroup = ''
      }
    }
  }
};
</script>

<style media="screen">
.radio {
  padding: 10px;
  border-radius: 40px;
  background-color: rgba(131, 178, 247, 0.2);
  color: red;
}
.correct {
  background: rgba(141, 247, 131,0.2);
}
.incorrect {
  background: rgba(247, 131, 154,0.2);
}
.image {
  max-width: 100%;
}
</style>

<template>
  <v-card>
    <v-card-title>{{header}}</v-card-title>
    <v-card-subtitle>{{subheader}}</v-card-subtitle>
    <v-card-text>{{description}}
      <router-view/>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TestComponent',
  data: function () {
    return {

    }
  },
  props: {
  },
  computed: {
    ...mapGetters(['header', 'subheader', 'description'])
  },
  methods: {
  }
};
</script>

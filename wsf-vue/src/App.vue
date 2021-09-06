<template>
  <v-app>
    <Header class="flex-shrink-1 flex-grow-0"/>
    <v-container>
      <router-view/>
    </v-container>
  </v-app>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    Header
  }
};
</script>

<template>
  <v-app-bar class="header"
  >
    <img height="40" src="@/assets/logo.png" alt="">

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-phone</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  data: function () {
    return {
    }
  }
}
</script>

<style media="screen">
</style>

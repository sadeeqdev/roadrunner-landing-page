<template>
  <v-app>
    <v-main>
      <Navbar />
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: { Navbar, Footer },

  data: () => ({
    //
  }),
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || 'RoadRunner';
      }
    },
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=DM+Sans');

*{
  font-family: 'DM Sans';
}
</style>

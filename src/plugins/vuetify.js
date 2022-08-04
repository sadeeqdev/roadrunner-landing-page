import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#042C5B",
        secondary: "#F4842B",
        tetiary: "#FDE6D5",
        anchor: "#042C5B",
      },
    },
  },
});

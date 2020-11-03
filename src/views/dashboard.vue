<template>
  <v-container class="pl-100">
    <div>
      <span> {{getCurrentJoke}}dfsdf</span>
      <input type="text" v-model="joke">
      <v-btn @click="handleSubmit">addjoke</v-btn>
      <v-spacer></v-spacer>
      <div v-for="al in getAllJoke" :key="al">{{al}}</div>
    </div>
    <v-card class="mt-10">
      <v-layout>
         <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
      </v-layout>
      <v-card-title>
        gyatso the main head of the hackjing
      </v-card-title>
      <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>
   <v-divider class="mx-4"></v-divider>
    <v-card-title>Tonight's availability</v-card-title>
    </v-card>
  </v-container>
</template>

<script>
// import card from './card.vue'
// import lol from './About.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'DashboardDashboard',
  components: {
    // card,
    // lol
  },
  data () {
    return {
      joke: ''
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentJoke',
      'getAllJoke'
    ])
  },
  methods: {
    ...mapActions([
      'addjoke'
    ]),
    handleSubmit () {
      // const { value } = this.joke
      // console.log(value)
      // const payload = {
      //   this.joke
      // }
      this.addjoke(this.joke)
    }
  }
}
</script>

<style scoped>
.v-sheet--offset{
  top: -24px;
  position: relative;
}
</style>

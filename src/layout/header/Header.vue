<template>
      <v-app-bar app clipped-left clipped-right color="success" dark >
      <v-app-bar-nav-icon class="hidden-sm-and-up" @click="$vuetify.breakpoint.smAndDown ? setSidebarDrawer(!Sidebar_drawer) : $emit('input', !value)"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link router to="/" tag="span" style="cursor: pointer">Gyatso Creations</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['Sidebar_drawer'])
  },

  methods: {
    ...mapMutations({
      setSidebarDrawer: 'SET_SIDEBAR_DRAWER'
    })
  }
}
</script>

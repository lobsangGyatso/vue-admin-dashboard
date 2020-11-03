<template>
    <v-navigation-drawer
    v-model="Sidebar_drawer"
    :dark="SidebarColor !== 'white'"
    :color="SidebarColor"
    mobile-breakpoint="960"
    clipped
    :right="$vuetify.rtl"
    mini-variant-width="70"
    :expand-on-hover="expandOnHover"
    app
    id="main-sidebar"
      >
      <v-layout>
        <v-avator>
          <h1 class="heading pl-3 mt-5 ">Gyatso Creations</h1>
        </v-avator>
      </v-layout>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.routes" active-class="Border">
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      links: [
        { icon: 'fas fa-briefcase', text: 'profile', routes: '/pages/user' },
        { icon: 'fas fa-briefcase', text: 'iphone', routes: '/pages/iphone' },
        { icon: 'fas fa-briefcase', text: 'Table', routes: '/pages/table' },
        { icon: 'fas fa-briefcase', text: 'Image', routes: '/pages/img' },
        { icon: 'fas fa-briefcase', text: 'shoppingcard', routes: '/pages/shoppingcard' }
      ]
    }
  },
  computed: {
    ...mapState(['SidebarColor', 'SidebarBg']),
    Sidebar_drawer: {
      get () {
        return this.$store.state.Sidebar_drawer
      },
      set (val) {
        this.$store.commit('SET_SIDEBAR_DRAWER', val)
      }
    }
  }
}
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer temporary
     v-model="drawer"
     class="sidebar"
     app
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
      <v-app-bar app>
      <v-app-bar-nav-icon class="hidden-sm-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link router to="/" tag="span" style="cursor: pointer">Gyatso Creations</router-link>
      </v-toolbar-title>
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
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      links: [
        { icon: 'fas fa-briefcase', text: 'Business', routes: '/business' },
        { icon: 'fas fa-briefcase', text: 'profile', routes: '/pages/user' },
        { icon: 'fas fa-briefcase', text: 'iphone', routes: '/pages/iphone' },
        { icon: 'fas fa-briefcase', text: 'Business', routes: '/business' },
        { icon: 'fas fa-briefcase', text: 'profile', routes: '/pages/user' },
        { icon: 'fas fa-briefcase', text: 'iphone', routes: '/pages/iphone' },
        { icon: 'fas fa-briefcase', text: 'Business', routes: '/business' },
        { icon: 'fas fa-briefcase', text: 'profile', routes: '/pages/user' },
        { icon: 'fas fa-briefcase', text: 'iphone', routes: '/pages/iphone' },
        { icon: 'fas fa-briefcase', text: 'Business', routes: '/business' },
        { icon: 'fas fa-briefcase', text: 'profile', routes: '/pages/user' },
        { icon: 'fas fa-briefcase', text: 'iphone', routes: '/pages/iphone' },
        { icon: 'fas fa-briefcase', text: 'Business', routes: '/business' },
        { icon: 'fas fa-briefcase', text: 'profile', routes: '/pages/user' },
        { icon: 'fas fa-briefcase', text: 'iphone', routes: '/pages/iphone' }
      ]
    }
  }
}
</script>

<style scoped>
#inspire{
  position: relative;
}
.overflow-y-auto{
  position: absolute;
  bottom: 0;
  top:0;
  left: 0;
  right: 0;
  width: 300px;
  z-index: 99;
  margin-left:0px;
}
</style>

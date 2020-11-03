<template>
     <v-navigation-drawer temporary
     class="sidebar"
     app
      >
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
    <!-- <v-navigation-drawer class="orange accent-2" fixed right>
     <v-layout cloumn align-center>
       <v-flex class="mt-5 ml-50">
         <v-avatar size="100">
           <v-icon>fas fa-store</v-icon>
         </v-avatar>
          <h4 class="white-text subheading mt-1 text-center">lobsang</h4>
          <h4 class="white-text subheadng mt-1 text-center">hacking</h4>
       </v-flex>
      </v-layout>
      <p class="white--text subheading pl-3 mt-3">we are the best things in the world</p>
      <v-list rounded dense>
        <v-list-item router to="/h">
          <v-list-item-action>
            l
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              weare
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router to="/ ">
          <v-list-item-action>
            4
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              be the best
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
</template>

<script>
export default {
  name: 'DashboardCoreDrawer',
  data () {
    return {
      links: [
        { icon: 'fas fa-briefcase', text: 'Business', routes: '/business' },
        { icon: 'fas fa-briefcase', text: 'Business', routes: '/business' },
        { icon: 'fas fa-briefcase', text: 'profile', routes: '/pages/user' },
        { icon: 'fas fa-briefcase', text: 'iphone', routes: '/pages/iphone' }
      ]
    }
  }
}
</script>
<style scoped>
.Border{
  border-left: 4px solid;
}
</style>

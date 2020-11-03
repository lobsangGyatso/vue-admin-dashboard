<template>
  <v-app>
  <DashboardCoreAppBar />
  </v-app>
</template>

<script>
import DashboardCoreAppBar from './dashboard/components/core/AppBar.vue'
export default {
  name: 'DashboardIndex',
  components: {
    DashboardCoreAppBar
    // DashboardCoreAppBar: () => import('./dashboard/components/core/AppBar.vue'),
    // DashboardCoreDrawer: () => import('./dashboard/components/core/Drawer.vue'),
    // DashboardCoreSettings: () => import('./dashboard/components/core/setting.vue'),
    // DashboardCoreView: () => import('./dashboard/components/core/View.vue'),
  },

  data: () => ({
    expandOnHover: false
  })
}
</script>
<style scoped>
#inspire{
  position: relative;
}
.overflow-y-auto{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 300px;
  z-index: 99;
}
</style>

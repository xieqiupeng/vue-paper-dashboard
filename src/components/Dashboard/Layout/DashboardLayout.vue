<template>
  <div class="wrapper">
    <side-bar type="sidebar" :active-color="$sidebar.activeColor" :background-color="$sidebar.backgroundColor" :sidebar-links="$sidebar.sidebarLinks">

    </side-bar>
    <notifications>

    </notifications>

    <sidebar-share>

    </sidebar-share>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import SidebarShare from './SidebarSharePlugin.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      SidebarShare
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>

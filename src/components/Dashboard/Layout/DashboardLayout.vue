<template>
  <div class="wrapper">
    <side-bar type="sidebar" :sidebar-links="$sidebar.sidebarLinks">

    </side-bar>
    <notifications>

    </notifications>

    <div class="fixed-plugin">
      <div class="dropdown show-dropdown open">
        <a href="#" data-toggle="dropdown">
          <i class="fa fa-cog fa-2x"> </i>
        </a>
        <ul class="dropdown-menu">
          <li class="header-title">Sidebar Background</li>
          <li class="adjustments-line text-center">
            <a href="javascript:void(0)" class="switch-trigger background-color">
              <span class="badge filter badge-white active" data-color="white"></span>
              <span class="badge filter badge-black" data-color="black"></span>
            </a>
          </li>

          <li class="header-title">Sidebar Active Color</li>
          <li class="adjustments-line text-center">
            <a href="javascript:void(0)" class="switch-trigger active-color">
              <span class="badge filter badge-primary" data-color="primary"></span>
              <span class="badge filter badge-info" data-color="info"></span>
              <span class="badge filter badge-success" data-color="success"></span>
              <span class="badge filter badge-warning" data-color="warning"></span>
              <span class="badge filter badge-danger active" data-color="danger"></span>
            </a>
          </li>

          <li class="button-container">
            <div class="">
              <a href="#" target="_blank" class="btn btn-info btn-block btn-fill">Download for Free</a>
            </div>
          </li>

          <li class="button-container">
            <div class="">
              <a href="#" target="_blank" class="btn btn-danger btn-block btn-fill">View Documentation</a>
            </div>
          </li>

          <li class="header-title">Thank you for sharing!</li>

          <li class="button-container">
            work in progress
            <social-sharing url="https://cristijora.github.io/vue-paper-dashboard/" inline-template title="Vue Paper Dashboard - Free Bootstrap Admin Template for Vue.js" hashtags="vuejs, dashboard, bootstrap" twitter-user="creativetim">
              <div>
                <network network="facebook">
                  <i class="fa fa-fw fa-facebook"></i> Facebook
                </network>
                <network network="googleplus">
                  <i class="fa fa-fw fa-google-plus"></i> Google +
                </network>
                <network network="pinterest">
                  <i class="fa fa-fw fa-pinterest"></i> Pinterest
                </network>
                <network network="twitter">
                  <i class="fa fa-fw fa-twitter"></i> Twitter
                </network>
              </div>
            </social-sharing>
          </li>

        </ul>
      </div>
    </div>
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
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent
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

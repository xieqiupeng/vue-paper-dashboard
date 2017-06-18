<template>
  <div class="fixed-plugin"  v-click-outside="closeDropDown">
    <div class="dropdown show-dropdown" :class="{open: isOpen}">
      <a data-toggle="dropdown">
        <i class="fa fa-cog fa-2x" @click="toggleDropDown"> </i>
      </a>
      <ul class="dropdown-menu">
        <li class="header-title">Sidebar Background</li>
        <li class="adjustments-line text-center">
          <a class="switch-trigger background-color">
            <span v-for="item in sidebarColors" class="badge filter"
                  :class="[`badge-${item.color}`,{active:item.active}]"
                  :data-color="item.color"
                  @click="changeSidebarBackground(item)"></span>
          </a>
        </li>

        <li class="header-title">Sidebar Active Color</li>
        <li class="adjustments-line text-center">
          <a class="switch-trigger active-color">
            <span v-for="item in sidebarTextColors" class="badge filter"
                  :class="[`badge-${item.color}`,{active:item.active}]"
                  :data-color="item.color"
                  @click="changeSidebarLinkColor(item)"></span>
          </a>
        </li>

        <li class="button-container">
          <div class="">
            <a target="_blank" class="btn btn-info btn-block btn-fill">Download for Free</a>
          </div>
        </li>

        <li class="button-container">
          <div class="">
            <a target="_blank" class="btn btn-danger btn-block btn-fill">View Documentation</a>
          </div>
        </li>

        <li class="header-title">Thank you for sharing!</li>

        <li class="button-container">
          work in progress
          <social-sharing url="https://cristijora.github.io/vue-paper-dashboard/" inline-template
                          title="Vue Paper Dashboard - Free Bootstrap Admin Template for Vue.js"
                          hashtags="vuejs, dashboard, bootstrap" twitter-user="creativetim">
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
</template>
<script>
  export default{
    data () {
      return {
        isOpen: true,
        sidebarColors: [
          {color: 'white', active: false},
          {color: 'black', active: true},
          {color: 'darkblue', active: false}
        ],
        sidebarTextColors: [
          {color: 'primary', active: false},
          {color: 'info', active: false},
          {color: 'success', active: true},
          {color: 'warning', active: false},
          {color: 'danger', active: false}
        ]
      }
    },
    methods: {
      toggleDropDown () {
        this.isOpen = !this.isOpen
      },
      closeDropDown () {
        this.isOpen = false
      },
      changeSidebarBackground (item) {
        this.$sidebar.backgroundColor = item.color
        this.sidebarColors.forEach((sidebarColor) => {
          sidebarColor.active = false
        })
        item.active = true
      },
      changeSidebarLinkColor (item) {
        this.$sidebar.activeColor = item.color
        this.sidebarTextColors.forEach((sidebarColor) => {
          sidebarColor.active = false
        })
        item.active = true
      }
    }
  }
</script>

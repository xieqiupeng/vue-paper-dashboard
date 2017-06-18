<template>
  <div class="fixed-plugin" v-click-outside="closeDropDown">
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
            <a href="https://github.com/cristijora/vue-paper-dashboard/archive/master.zip" class="btn btn-info btn-block btn-fill">Free Download</a>
          </div>
        </li>

        <li class="button-container">
          <div class="">
            <a href="https://cristijora.github.io/vue-paper-dashboard-docs/" class="btn btn-danger btn-block btn-fill">Documentation</a>
          </div>
        </li>

        <li class="header-title">Thank you for sharing!</li>

        <li class="button-container">
          <social-sharing url="https://cristijora.github.io/vue-paper-dashboard/" inline-template
                          title="Vue Paper Dashboard - Free Bootstrap Admin Template for Vue.js"
                          hashtags="vuejs, dashboard, bootstrap" twitter-user="creativetim">
            <div>
              <network network="facebook" class="btn btn-facebook btn-icon">
                <i class="fa fa-fw fa-facebook"></i>
              </network>
              <network network="pinterest" class="btn btn-pinterest btn-icon">
                <i class="fa fa-fw fa-pinterest"></i>
              </network>
              <network network="twitter" class="btn btn-twitter btn-icon">
                <i class="fa fa-fw fa-twitter"></i>
              </network>
            </div>
          </social-sharing>
        </li>

        <li class="button-container">
    		<gh-btns-star slug="cristijora/vue-paper-dashboard" show-count></gh-btns-star>
    		<gh-btns-fork slug="cristijora/vue-paper-dashboard" show-count></gh-btns-fork>
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
      toggleList (list, itemToActivate) {
        list.forEach((listItem) => {
          listItem.active = false
        })
        itemToActivate.active = true
      },
      changeSidebarBackground (item) {
        this.$sidebar.backgroundColor = item.color
        this.toggleList(this.sidebarColors, item)
      },
      changeSidebarLinkColor (item) {
        this.$sidebar.activeColor = item.color
        this.toggleList(this.sidebarTextColors, item)
      }
    }
  }
</script>

import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: '统   计',
      icon: 'ti-panel',
      path: '/admin/overview'
    },
    {
      name: '专辑管理',
      icon: 'ti-text',
      path: '/admin/typography'
    },
    {
      name: '运营管理',
      icon: 'ti-bell',
      path: '/admin/notifications'
    },
    {
      name: '操作日志',
      icon: 'ti-user',
      path: '/admin/table-list'
    },
    {
      name: '设   置',
      icon: 'ti-view-list-alt',
      path: '/admin/stats'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {
  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin

<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <paper-table :title="table1.title"
                     :sub-title="table1.subTitle"
                     :data="table1.data"
                     :columns="table1.columns">

        </paper-table>
      </div>
    </div>

    <div class="col-md-12">
      <div class="card card-plain">
        <paper-table type="hover"
                     :title="table2.title"
                     :sub-title="table2.subTitle"
                     :data="table2.data"
                     :columns="table2.columns">

        </paper-table>
      </div>
    </div>

  </div>
</template>
<script>
  /* eslint-disable indent */
  import PaperTable from 'components/UIComponents/PaperTable.vue'

  const tableColumns = ['Id', '专辑', '播放量', '加入书架', '购买量']
  const tableData = [
    {
      id: 1,
      '专辑': '斗破苍穹',
      '播放量': '1231',
      '加入书架': '2478',
      '购买量': '456'
    },
    {
      id: 2,
      '专辑': '阴阳通灵师',
      '播放量': '1231',
      '加入书架': '2478',
      '购买量': '456'
    },
    {
      id: 3,
      '专辑': '凶案谜局',
      '播放量': '1231',
      '加入书架': '2478',
      '购买量': '456'
    },
    {
      id: 4,
      '专辑': '皇陵守墓人',
      '播放量': '1231',
      '加入书架': '2478',
      '购买量': '456'
    },
    {
      id: 5,
      '专辑': '剑霸武神',
      '播放量': '1231',
      '加入书架': '2478',
      '购买量': '456'
    }]

  export default {
    components: {
      PaperTable
    },
    data () {
      return {
        table1: {
          title: '听书',
          subTitle: ' ',
          columns: [...tableColumns],
          data: [...tableData]
        },
        table2: {
          title: '看书',
          subTitle: ' ',
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    }
  }

</script>
<style>

</style>

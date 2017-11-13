<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <paper-table :title="table1.title" :sub-title="table1.subTitle" :data="table1.data" :columns="table1.columns">

        </paper-table>
      </div>
    </div>

    <!--<div class="col-md-12">-->
    <!--<div class="card card-plain">-->
    <!--<paper-table type="hover" :title="table2.title" :sub-title="table2.subTitle" :data="table2.data"-->
    <!--:columns="table2.columns">-->
    <!--</paper-table>-->
    <!--</div>-->
    <!--</div>-->

  </div>
</template>
<script>
  /* eslint-disable indent */

  import PaperTable from 'components/UIComponents/PaperTable.vue'

  const tableColumns = ['Id', '时间', '账号', '操作', '操作对象']
  const tableData = [
    {
      id: 1,
      name: 'Dakota Rice',
      salary: '$36.738',
      country: 'Niger',
      city: 'Oud-Turnhout'
    },
    {
      id: 2,
      name: 'Minerva Hooper',
      salary: '$23,789',
      country: 'Curaçao',
      city: 'Sinaai-Waas'
    },
    {
      id: 3,
      name: 'Sage Rodriguez',
      salary: '$56,142',
      country: 'Netherlands',
      city: 'Baileux'
    },
    {
      id: 4,
      name: 'Philip Chaney',
      salary: '$38,735',
      country: 'Korea, South',
      city: 'Overland Park'
    },
    {
      id: 5,
      name: 'Doris Greene',
      salary: '$63,542',
      country: 'Malawi',
      city: 'Feldkirchen in Kärnten'
    }]

  export default {
    components: {
      PaperTable
    },
    data () {
      return {
        table1: {
          title: '',
          subTitle: '',
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    }
  }

</script>
<style>

</style>

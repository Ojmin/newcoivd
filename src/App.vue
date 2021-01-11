<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <h1 class="col-md-3 pt-5 offset-md-5">全球历史疫情情况</h1>
      <VmSearch class="col-md-3 pt-5 mt-30"></VmSearch>
    </div>
    <div class="row mt-5 pt-5 mb-5 pb-5" style="border-top: 1px solid #dddddd">
      <VmTable class="col-md-4 offset-md-1" style="border: 1px solid #dddddd"></VmTable>

      <VmGraph :option4="option4" class="col-md-4 offset-md-2"></VmGraph>
    </div>
    <div class="row" style="border-top: 1px solid #dddddd">
      <VmPage class="col-md-4 m-auto"></VmPage>
    </div>
  </div>
</template>
<script>
import VmGraph from "@/components/VmGraph.vue";
import VmSearch from "@/components/VmSearch.vue";
import VmTable from "@/components/VmTable.vue";
import VmPage from "@/components/VmPage.vue";
// import VmButton from "@/components/VmButton.vue";
// import vmHearder from "@/components/Vmhearder.vue";
import { getGlobalDailyHistory } from "@/commonfun/option.js";
import { setOption4 } from "@/commonfun/option.js";

export default {
  name: "app",
  data() {
    return {
      option4: {},
      tableOption4: {},
    };
  },
  // computed: {
  //   watchData() {
  //     return this.$store.getters.getChangedData;
  //   },
  // },
  // watch: {
  //   watchData(newData) {
  //     this.tableOption4 = newData;
  //     var obj = JSON.parse(JSON.stringify(newData));
  //     this.option4 = setOption4(obj);
  //     // this.index += 1;

  //     return;
  //   },
  // },
  components: { VmGraph, VmTable, VmSearch, VmPage },
  mounted() {
    // console.log(getGlobalDailyHistory())
    this.tableOption4 = getGlobalDailyHistory().slice(0, 15);
    // this.tableOption4 = getGlobalDailyHistory();
    this.option4 = setOption4(this.tableOption4);
  },
};
</script>
<style lang="scss">
.table {
  background-color: rgba(255, 255, 255, 0);
}

#app {
  background: url(assets/bg.png) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
}
</style>

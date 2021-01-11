<template>
  <div id="app" class="container">
    <div id="nav">
      <vmHearder class="col-md-12 col-sm-12 col-lg-12"></vmHearder>
      <div class="row">
        <VmTable
          class="col-md-6 col-sm-12 col-lg-6"
         
        ></VmTable>

        <VmGraph
          :option4="option4"
          class="col-md-6 col-sm-12 col-lg-6"
        ></VmGraph>
        
      </div>
    </div>
  </div>
</template>
<script>
import VmGraph from "@/components/VmGraph.vue";
import VmTable from "@/components/VmTable.vue";
// import VmButton from "@/components/VmButton.vue";
import vmHearder from "@/components/Vmhearder.vue";
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
  computed: {
    watchData() {
      return this.$store.getters.getChangedData;
    },
  },
  watch: {
    watchData(newData) {
      this.tableOption4 = newData;
      var obj = JSON.parse(JSON.stringify(newData));
      this.option4 = setOption4(obj);
            // this.index += 1;

      return
    },
  },
  components: { VmGraph, VmTable, vmHearder },
  mounted() {
    // console.log(getGlobalDailyHistory())
    // this.tableOption4 = getGlobalDailyHistory().slice(0, 15);
     this.tableOption4 = getGlobalDailyHistory()
    this.option4 = setOption4(this.tableOption4);
  },
};
</script>
<style lang="scss">
.table {
  background-color: rgba(255, 255, 255, 0);
}

#app {
  background: url(assets/bg.jpg) top center;
}
</style>

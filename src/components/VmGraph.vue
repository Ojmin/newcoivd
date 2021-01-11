<template>
  <div class="row">
    <VmPanel class="col-md-12">
      <div slot="panelcontent" class="col-md-12">
        <h2 style="color: black">世界每周新增治愈和死亡人数</h2>
        <div class="chart deadheal"></div>
      </div>
    </VmPanel>
  </div>
</template>

<script>
import { addChart } from "@/commonfun/option.js";
import VmPanel from "@/components/common/VmPanel.vue";
import {globalDailyHistory} from '@/commonfun/data.js';
import { setOption4 } from "@/commonfun/option.js";

export default {
  name: "vmGraph",
  // data(){

  // },
  computed: {
    watchNewData() {
      return this.$store.getters.getChangedData;
    },
  },
  watch: {
    watchNewData(newData) {
      console.log(22222,newData)
      let deadheal = document.querySelector(".deadheal");
      addChart(deadheal, this.option4);
    },
  },
  components: { VmPanel },
  props: { option4: {} },
 
  mounted() {
      let deadheal = document.querySelector(".deadheal");

     addChart(deadheal, setOption4(globalDailyHistory.slice(0,15)))
  },
};
</script>
<style scoped>
</style>

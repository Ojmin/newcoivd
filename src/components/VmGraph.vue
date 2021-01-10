<template>
  <div class="mgraph">
    <VmPanel>
      <div slot="panelcontent">
        <h2 style="color:black">世界每周新增治愈和死亡人数</h2>
        <div class="chart deadheal"></div>
      </div>
    </VmPanel>
  </div>
</template>

<script>
import { addChart } from "@/commonfun/option.js";
import VmPanel from "@/components/common/VmPanel.vue";

export default {
  name: "vmGraph",
  // data(){

  // },
  components:{VmPanel},
  props: { option4: {} },
  watch: {
    option4() {
    //watch 到了但是子组件还没创建好
    console.log(this.option4)
    console.log(document.querySelector(".deadheal"))
      let deadheal = document.querySelector(".deadheal");
      addChart(deadheal, this.option4);
    },
  },
  computed: {},
  mounted() {},
};
</script>
<style scoped>
.mygraph{ 
  width: 100%;
float:right;
text-align: center;
display: flex;
}
</style>

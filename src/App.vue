<template>
  <div id="app">
    <div id="nav" >
      <vmHearder></vmHearder>

      <VmTable :tableOption4="tableOption4" class="table" :key="index"></VmTable>

      <VmGraph :option4="option4" class="graph" ></VmGraph>

    </div>
                <VmButton class="mpage"></VmButton>

  </div>
</template>
<script>
import VmGraph from "@/components/VmGraph.vue";
import VmTable from "@/components/VmTable.vue";
import VmButton from "@/components/VmButton.vue";
import vmHearder from "@/components/Vmhearder.vue";
import { getGlobalDailyHistory } from "@/commonfun/option.js";
import { setOption4 } from "@/commonfun/option.js";

export default {
  name: "app",
  data() {
    return {
      index :0,
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
      this.index +=1
      this.tableOption4 = newData
      var obj=JSON.parse(JSON.stringify(newData));
      this.option4 = setOption4(obj);
    },
  },
  components: { VmGraph, VmTable, VmButton, vmHearder },
  mounted() {
    // console.log(getGlobalDailyHistory())
    this.tableOption4 = getGlobalDailyHistory().slice(0, 20);
    this.option4 = setOption4(this.tableOption4);
  },
};
</script>
<style lang="scss">
.table {
  background-color: rgba(255, 255, 255, 0);
}
.graph {
  text-align: center; /*让div内部文字居中*/
  background-color: rgba(255, 255, 255, 0);
  border-radius: 20px;
  float:right;
  width: 50%;
  height: 1000px;
  margin: auto;
  margin-top: 30px;
  // position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.mpage {
  bottom: 0;
  background-color: rgba(255, 255, 255, 0);
}
// .right {
//   flex: 2;
//   padding: 10px 10px 0;
//   display: flex;
// }
#app {
  background: url(assets/bg.png) top center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 1350px;
  margin:0px;padding:0px;
  
}

#nav {
  margin:0px;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

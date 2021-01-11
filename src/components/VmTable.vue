<template>
  <div class="overflow-auto">
    <b-table
      striped
      hover
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
      :fields="fields"
      style="table-layout:fixed;"
    ></b-table>
  </div>
</template>


<script>
// import  BScroll  from "better-scroll";
import { globalDailyHistory } from "@/commonfun/data.js";
export default {
  name: "vmTable",
  data() {
    return {
      fields: [
        { key: "日期▲▼", sortable: true },
        "年",
        "确诊",
        "死亡",
        "治愈",
        "新增确诊",
        "死亡率",
        "治愈率",
      ],
      perPage: 20,
      currentPage: 1,
      items: this.getItems(),
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
    watchCurrentPage() {
      return this.$store.getters.getCurrentPage;
    },
    watchFilterDate() {
      return this.$store.getters.getFilterDate;
    },
  },
  watch: {
    watchCurrentPage(newPage) {
      console.log(1111, newPage);
      this.currentPage = newPage;
      return;
    },
    watchFilterDate(newDate) {
      this.filterData(newDate);
      console.log(this.items);
      return;
    },
  },
  mounted() {
    // this.scroll = new BScroll(this.$refs.wrapper, {
    //   mouseWheel: true,
    //   click: true,
    //   tap: true,
    // });
  },
  methods: {
    filterData(filterDate) {
      console.log(555, filterDate);
      var arrayObj = new Array();
      let List = globalDailyHistory;
      for (let index in List) {
        let o = new Object();
        console.log(22, List[index].date);
        console.log(88, filterDate);
        if (List[index].date != filterDate) {
          continue;
        }
        o["日期▲▼"] = List[index].date;
        o["年"] = List[index].y;
        o["确诊"] = List[index].all.confirm;
        o["死亡"] = List[index].all.dead;
        o["治愈"] = List[index].all.heal;
        o["新增确诊"] = List[index].all.newAddConfirm;
        o["死亡率"] = List[index].all.deadRate;
        o["治愈率"] = List[index].all.healRate;
        arrayObj.push(o);
      }
      this.items = arrayObj;
      return;
    },
    setGlobalData(currentPage) {
      this.$store.dispatch(
        "setNewData",
        globalDailyHistory.slice((currentPage - 1) * 15, currentPage * 15)
      );
    },
    getItems() {
      var arrayObj = new Array();
      let List = globalDailyHistory;
      for (let index in List) {
        let o = new Object();
        o["日期▲▼"] = List[index].date;
        o["年"] = List[index].y;
        o["确诊"] = List[index].all.confirm;
        o["死亡"] = List[index].all.dead;
        o["治愈"] = List[index].all.heal;
        o["新增确诊"] = List[index].all.newAddConfirm;
        o["死亡率"] = List[index].all.deadRate;
        o["治愈率"] = List[index].all.healRate;
        arrayObj.push(o);
      }
      return arrayObj;
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>


<template>
  <div class="overflow-auto">
    <b-input-group prepend="日期" class="mt-0">
      <b-form-input v-model="inputDate" ></b-form-input>
      <b-input-group-append>
        <!-- <b-button variant="outline-success">Button</b-button> -->
      </b-input-group-append>
      <b-button @click="filterData" variant="info" class="col-md-2">搜索</b-button>
    </b-input-group>
    <b-table
      striped
      hover
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
      :fields="fields"
    ></b-table>
    <div class="row">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        class="col-md-6 m-auto navbar navbar-fixed-bottom"
        @click.native="setGlobalData(currentPage)"
        style="background: rgba(255, 255, 255, 0)"
      ></b-pagination>
    </div>
    <!-- <p class="mt-3">Current Page: {{ currentPage }}</p> -->
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
      perPage: 15,
      currentPage: 1,
      items: this.getItems(),
      inputDate:''
    };
  },
  computed: {
    rows() {
      return this.items.length;
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
    filterData(){
       var arrayObj = new Array();
      let List = globalDailyHistory;
      for (let index in List) {
        let o = new Object();
        if(List[index].date!=this.inputDate){
              continue
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
      this.items=arrayObj;
      return
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


<template>
  <div class="row">
    
    <b-input-group size="sm">
      <b-form-input
        id="filter-input"
        v-model="filter"
        type="search"
        placeholder="Type to Search"
      ></b-form-input>

      <b-input-group-append>
        <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
      </b-input-group-append>
    </b-input-group>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
// import { globalDailyHistory } from "@/commonfun/data.js";
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
      index: 0,
      filter: null,
      filterOn: [],
      // items: this.itemsList,
    };
  },
  props: { tableOption4: {} },
  computed: {
    myglobalHistory() {
      let newdata = this.tableOption4;
      console.log(1111, newdata);
      return this.index % 2 == 0 ? newdata : newdata.reverse();
    },
    items() {
      var arrayObj = new Array();
      let List = this.tableOption4;
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
  // watch: {
  //   tableOption4(newData) {
  //     console.log(333,newData)
  //     this.globalHistory = newData;
  //     this.$forceFlush
  //   },
  // },
  methods: {
    dataresored() {
      this.index += 1;
    },
  },
  // mounted() {
  //   this.items = globalDailyHistory.slice(0, 20);
  // },
};
</script>
<style scoped>
</style>

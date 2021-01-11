<template>
  <div class="row">
    <b-pagination
      size="lg"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      class="pt-5 pb-5 mt-5 mb-5 m-auto"
      @click.native="setCurrentPage(currentPage)"
      style="background: rgba(255, 255, 255, 0)"
    ></b-pagination>
  </div>
</template>
<script>
import { globalDailyHistory } from "@/commonfun/data.js";
export default {
  name: "vmPage",
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
      inputDate: "",
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
    setCurrentPage(currentPage) {
      this.$store.dispatch("setNewCurrentPage", currentPage);
      this.$store.dispatch(
        "setNewData",
        globalDailyHistory
          
          .slice((currentPage - 1) * 15, currentPage * 15)
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
      this.$store.dispatch("setNewTableData", arrayObj);
      return arrayObj;
    },
  },
};
</script>

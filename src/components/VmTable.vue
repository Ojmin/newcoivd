<template>
  <div class="htable">
    <table
      id="mtable"
      table
      border="1"
      cellspacing="0"
      cellpadding="10"
      class=""
    >
      <thead>
        <tr>
          <th @click="dataresored">序号 ▲▼</th>
          <th>年</th>
          <th>月日</th>
          <th>确诊</th>
          <th>死亡</th>
          <th>治愈</th>
          <th>新增确诊</th>
          <th>死亡率</th>
          <th>治愈率</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(history, index) in myglobalHistory" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ history.y }}</td>
          <td>{{ history.date }}</td>
          <td>{{ history.all.confirm }}</td>
          <td>{{ history.all.dead }}</td>
          <td>{{ history.all.heal }}</td>
          <td>{{ history.all.newAddConfirm }}</td>
          <td>{{ history.all.deadRate }}</td>
          <td>{{ history.all.healRate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { globalDailyHistory } from "@/commonfun/data.js";
export default {
  name: "vmTable",
  data() {
    return {
      index: 0,
      globalHistory: this.tableOption4,
    };
  },
  props: { tableOption4: {} },
  computed: {
    myglobalHistory() {
      let newdata = this.tableOption4;
      console.log(1111, newdata);
      return this.index % 2 == 0 ? newdata : newdata.reverse();
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
  mounted() {
    this.globalHistory = globalDailyHistory.slice(0,20);
  },
};
</script>
<style scoped>
.htable {
  display: block;
  overflow-y: auto;
  width: 50%;
  float: left;
}
#myheader {
  height: 100px;
  position: relative;
}

#myheader h1 {
  color: black;
  font-size: 38px;
  line-height: 80px;
  text-align: center;
}
table {
  table-layout: fixed;
  display: table;
  width: 100%;
  height: 100%;
  float: left;
  background-color: rgba(255, 255, 255, 0);
  margin: 30px auto;
  border-collapse: collapse;
  /*border-collapse:collapse合并内外边距
                (去除表格单元格默认的2个像素内外边距*/
}
td {
  height: 25px;
  line-height: 25px;
  text-align: center;
  border: 1px solid black;
  background-color: rgba(255, 255, 255, 0);
}
th {
  background-color: rgba(255, 255, 255, 0);

  font-weight: bold;
}
tr {
  background-color: rgba(255, 255, 255, 0);
}
tr:hover {
  background: #cc0;
}
td a {
  color: #06f;
  text-decoration: none;
}
td a:hover {
  color: #06f;
  text-decoration: underline;
}
</style>

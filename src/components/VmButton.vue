<template>
  <div class="page">
    <span
      @click="setGlobalHistory(pageNum)"
      v-for="pageNum in pageList"
      :key="pageNum"
      :class="[pageNum == nowpage ? 'myclass' : 'page-block']"
      :style="{ color: pageNum === page ? '#80bd01' : '#778087' }"
      :v-model="pageNum"
      >{{ pageNum }}</span
    >
  </div>
</template>

<script>
import { globalDailyHistory } from "@/commonfun/data.js";
export default {
  data() {
    return {
      pageList: [1, 2, 3], // 页码列表
      page: 2, // 当前页码
      pageMax: 3, // 最大页数
      nowpage: 0,
    };
  },
  computed: {},
  methods: {
    setGlobalHistory(Nowpage) {
      this.nowpage = Nowpage;
      var newData = globalDailyHistory.slice((Nowpage - 1) * 20, Nowpage * 20);
      this.$store.dispatch("setNewData", newData);
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.span {
  color: rgba(4, 7, 6, 0.5);
}
.myclass {
    height: 48px;
    line-height: 57px;

  color: rgba(3, 5, 4, 0.5);
  border: 1px solid rgb(12, 11, 11);
  display: inline-block;
  width: 80px;
}
.page {
  padding: 10px;
  text-align: center;
  height: 50px;
  position: fixed;
  bottom: 0px;
  background-color: rgba(255, 255, 255, 0);
  width: 100%;

  &-block {
    color: rgb(4, 12, 12);
    display: inline-block;
    width: 34px;
    height: 50px;
    padding: 4px 8px;
    font-size: 5;
    line-height: 50px;
    border: 1px solid rgb(12, 11, 11);
    border-right: none;
    box-sizing: border-box;

    &:first-child {
      // width: 34px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:last-child {
      // width: 34px;
      border-right: 1px solid rgb(10, 9, 9);
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
}
</style>


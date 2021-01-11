<template>
  <div class="overflow-auto mt-30">
    <b-input-group prepend="日期" class="mt-30">
      <b-form-input v-model="inputDate" placeholder="10.23"></b-form-input>
      <b-input-group-append>
        <!-- <b-button variant="outline-success">Button</b-button> -->
      </b-input-group-append>
      <b-button @click="filterDate(inputDate)" variant="info" class="col-md-2"
        >搜索</b-button
      >
    </b-input-group>
  </div>
</template>
<script>
export default {
  name: "vmSearch",
  data() {
    return {
      inputDate: "10.23",
    };
  },
  methods: {
    filterDate(inputDate) {
      this.$store.dispatch("setNewFilterDate", inputDate);
    },
  },
};
</script>
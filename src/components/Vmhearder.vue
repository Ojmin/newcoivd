<template>
    <div id="myheader"><h1>全球历史疫情情况</h1></div>

    
</template>
<script>
export default {
  name: "vmHearder",
}
</script>
<style scoped>
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
  width: 50%;
  float: left;
  background: #ccc;
  margin: 30px auto;
  border-collapse: collapse;
  /*border-collapse:collapse合并内外边距
                (去除表格单元格默认的2个像素内外边距*/
}
th {
  overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */

  text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
}

td {
  width: 100%;
  word-break: keep-all; /* 不换行 */
  white-space: nowrap; /* 不换行 */
  overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
  text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  height: 25px;
  line-height: 25px;
  text-align: center;
  border: 1px solid #ccc;
}
th {
  background: #eee;
  font-weight: normal;
}
tr {
  background: #fff;
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

<template>
  <div style="margin: 50px">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>卡片名称</span>
          <el-button class="button" type="text">操作按钮</el-button>
        </div>
      </template>
      <div style="height: 200px"></div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "DevSort",
};
</script>
<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 0px;
  margin-top: 10px;
}

.box-card {
  width: 480px;
}


</style>

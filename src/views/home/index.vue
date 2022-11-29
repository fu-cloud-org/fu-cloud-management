<template>
  <div class="homecontainer" style="margin: 50px">
    <el-card class="box-card">
        <div class="card-header">
          {{'技术选型'}}
        </div>
        <div class="text item">
          {{'前端：'}}
          <br>
          {{'  1.核心框架：Spring Boot'}}
          <br>
          {{'  2.不知道写啥'}}
          <br>
          {{'  3.帖子管理'}}
          <br>
          {{'后端：'}}
          <br>
          {{'  后面再补充吧'}}
        </div>
    </el-card>
    <el-card class="box-creater">
        <div class="card-header">
          {{'开发团队'}}
        </div>
        <div class="text item">
          {{'前端：'}}
          <br>
          {{'  1.核心框架：Spring Boot'}}
          <br>
          {{'  2.不知道写啥'}}
          <br>
          {{'  3.帖子管理'}}
          <br>
          {{'后端：'}}
          <br>
          {{'  后面再补充吧'}}
        </div>
    </el-card>
    <el-card class="box-update">
        <div class="card-header">
          {{'更新日志'}}
        </div>
        <div class="text item">
          {{'前端：'}}
          <br>
          {{'  1.核心框架：Spring Boot'}}
          <br>
          {{'  2.不知道写啥'}}
          <br>
          {{'  3.帖子管理'}}
          <br>
          {{'后端：'}}
          <br>
          {{'  后面再补充吧'}}
        </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "DevSort",
};
</script>
<style lang="scss" scoped>


.homecontainer {
  background-image: url("../../assets/img/home.png");
  background-position: fixed;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  height: 100vmax;
  margin: 0 !important;
}

.box-card {
  position: absolute;
  top: 90px;
  right: 140px;

}

.box-creater {
  position: absolute;
  top: 465px;
  right: 1100px;
  width: 400px;
}

.box-update {
  position: absolute;
  top: 465px;
  right: 580px;
  width: 440px;
}

.card-header {
  font-size: 20px;
  font-weight:bold;
}

.text {
  font-size: 16px;
  line-height: 150%;
}

.item {
  margin-bottom: 0px;
  margin-top: 10px;
}

.box-card {
  
  width: 480px;
}


</style>

<template>
  <div class="homecontainer" style="margin: 50px">
    <el-card class="box-card">
      <div class="card-header">
        {{ "技术选型" }}
      </div>
      <div class="text item" style="text-indent: 2em">
        <p style="text-indent: 0em">{{ "前端：" }}</p>
        <p>{{ "1.开发框架：Vue" }}</p>   
        <p>{{ "2.UI：Element UI" }}</p>  
        <p>{{ "3.UI：Buefy" }}</p>  
        <p>{{ "4.UI：Bulma" }}</p>  
        <p>{{ "5.UI：EChart" }}</p>  
        <p style="text-indent: 0em">{{ "后端：" }}</p>
        <p>{{ "6.Spring Boot" }}</p>
        <p>{{ "7.MyBatis-Plus" }}</p>        
      </div>
    </el-card>
    <el-card class="box-creater">
      <div class="card-header">
        {{ "开发团队" }}
      </div>
      <div class="text item" style="text-indent: 2em">
        <p>{{'本项目基于vue-element-template框架，结合具体场景使用功能，由"福云社"团队开发完成'}}</p>
        <br />
        <p>{{ "操作过程中如遇困难，可联系开发人员群组（QQ群：**********）进行解决" }}</p>
      </div>
    </el-card>
    <el-card class="box-update">
      <div class="card-header">
        {{ "更新日志" }}
      </div>
      <div class="text item">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="版本2.2————2022.11.30" name="1">
            <div>优化菜单栏显示，补充首页介绍</div>
          </el-collapse-item>
          <el-collapse-item title="版本2.1————2022.11.28" name="2">
            <div>优化功能管理模块的显示与使用逻辑效果</div>
          </el-collapse-item>
          <el-collapse-item title="版本2.0————2022.11.26" name="3">
            <div>修复了页面跳转的bug，丰富新版本的功能，包括跳转至用户端等</div>
          </el-collapse-item>
          <el-collapse-item title="版本1.1————2022.11.24" name="4">
            <div>实现了各模块功能的基本实现</div>
          </el-collapse-item>
          <el-collapse-item title="版本1.0————2022.11.22" name="5">
            <div>完成结构设计、功能划分与模块架设</div>
          </el-collapse-item>
        </el-collapse>
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
  background-attachment: local;
  position: relative;
  height: 824px;
  margin: 0 !important;
}

.box-card {
  position: absolute;
  top: 90px;
  right: 180px;
  width: 300px !important;
}

.box-creater {
  position: absolute;
  top: 485px;
  right: 1000px;
  width: 350px;
}

.box-update {
  position: absolute;
  top: 485px;
  right: 500px;
  width: 350px;
}

.card-header {
  font-size: 20px;
  font-weight: bold;
}

.text {
  /* text-indent: 2em; */
  font-size: 16px;
  line-height: 150%;
  p {
    margin: 2px;
  }
}

.item {
  margin-bottom: 0px;
  margin-top: 10px;
}

.box-card {
  width: 480px;
}
</style>

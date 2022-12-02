<template>
  <div class="personalCenter">
    <el-container class = "bck">
      <el-header>个人中心</el-header>
      <el-container>
        <el-aside width="400px">
          <el-col :span="12">
            <div class="sub-title"></div>
            <div class="demo-basic--circle">
              <div class="img">
                <el-avatar
                  :size="100"
                  :src="circleUrl"
                  align="center"
                ></el-avatar>
              </div>
              <div class="block">
                <span>Fucloud</span>
              </div>
            </div>
          </el-col>
          <!-- maxlength=6 -->
          <el-input
            v-model="input1"
            type="text"
            placeholder="姓名"
            show-word-limit
          ></el-input>
          <el-input
            v-model="input2"
            type="text"
            placeholder="昵称"
            show-word-limit
          ></el-input>
          <el-input
            v-model="input3"
            type="text"
            placeholder="用户名"
            show-word-limit
          ></el-input>
          <el-input
            v-model="input4"
            placeholder="请输入密码"
            show-password
          ></el-input>
          <el-input v-model="input5" placeholder="邮箱">
            <template slot="append">@fzu.com</template>
          </el-input>
          <el-button-group style="float: right; padding: 3px 0" type="text">
            <el-button type="primary" size="medium" round>保存</el-button>
          </el-button-group>
        </el-aside>
        <el-container>
          <el-main>
            <!-- <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span style="float: left"><b>绑定信息</b></span>
                <el-button-group
                  style="float: right; padding: 3px 0"
                  type="text"
                >
                  <el-button
                    type="primary"
                    icon="el-icon-edit"
                    size="medium"
                    round
                  >
                    修改信息
                  </el-button>
                  <el-button
                    type="primary"
                    icon="el-icon-check"
                    size="medium"
                    round
                  >
                    确认修改
                  </el-button>
                </el-button-group>
              </div>
              <div v-for="o in 1" :key="o" class="text item">
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column label="账号名" width="180">
                    <template slot-scope="scope">
                      <p>{{ scope.row.name1 }}</p>
                      <div slot="reference" class="name-wrapper"></div>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                      <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)"
                      >
                        编辑
                      </el-button>
                      <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                      >
                        解绑
                      </el-button>
                    </template>
                  </el-table-column>
                  <el-table-column label="更多" align="center">
                    <el-row>
                      <el-button
                        type="info"
                        icon="el-icon-message"
                        circle
                      ></el-button>
                      <el-button
                        type="warning"
                        icon="el-icon-star-off"
                        circle
                      ></el-button>
                      <el-button
                        type="share"
                        icon="el-icon-share"
                        circle
                      ></el-button>
                    </el-row>
                  </el-table-column>
                </el-table>
              </div>
              <div v-for="o in 1" :key="o" class="text item">
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column label="账号名" width="180">
                    <template slot-scope="scope">
                      <p>{{ scope.row.name2 }}</p>
                      <div slot="reference" class="name-wrapper"></div>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                      <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)"
                      >
                        编辑
                      </el-button>
                      <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                      >
                        解绑
                      </el-button>
                    </template>
                  </el-table-column>
                  <el-table-column label="更多" align="center">
                    <el-row>
                      <el-button
                        type="info"
                        icon="el-icon-message"
                        circle
                      ></el-button>
                      <el-button
                        type="warning"
                        icon="el-icon-star-off"
                        circle
                      ></el-button>
                      <el-button
                        type="share"
                        icon="el-icon-share"
                        circle
                      ></el-button>
                    </el-row>
                  </el-table-column>
                </el-table>
              </div>
            </el-card> -->
            <!-- <el-card class="box-card">
              <div>
                <span style="float: left" shadow="hover"><b>个人说明</b></span>
                <br />
                <br />
                <span>嗨嗨嗨我很正常</span>
                <el-divider></el-divider>
                <span>大学生哪有不发疯的</span>
              </div>
            </el-card> -->
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  export default {
    name: 'PersonalCenter',
    data() {
      return {
        text: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        circleUrl:
          'https://s2.loli.net/2022/11/26/BI5JgMPwd2ujfD1.jpg',
        // sizeList: ['large'],
        // tableData: [
        //   {
        //     date: '2022-05-03',
        //     name1: 'Wechat',
        //     name2: 'Github',
        //   },
        // ],
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row)
      },
      handleDelete(index, row) {
        console.log(index, row)
      },
    },
  }
</script>
<style>
  .el-header {
    line-height: 60px;
    text-align: center;
    background-color: #b3c0d1;
  }
  .el-aside {
    line-height: 44px;
    text-align: center;

    background-color: #d3dce6;
    height: 100%;
    overflow: auto;
    margin: 60px 35%;
    position: absolute;

top: 0; left: 0; bottom: 0; right: 0;
  }
  .bck{
    background-color: #e9eef3;
  }
  .el-main {
    /* line-height: 360px; */
    text-align: center;
    background-color: #e9eef3;
    /* overflow: auto; */
    height: 100%;
    position: absolute;
    width:100%;
    background-size:cover;
    z-index:-1;
  }

  .demo-basic--circle {
    align: 'center';
    margin-top: 30px;
    margin-left: 150px;
  }
  .block {
    margin-left: 25px;
    font-weight: bold;
  }
  .text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: '';
  }
  .clearfix:after {
    clear: both;
  }

  .box-card {
    width: 1368px;
    border-radius: 30px;
  }
</style>


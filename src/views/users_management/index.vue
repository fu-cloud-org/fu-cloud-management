<template>
    <el-row class="tac">
    <el-col :span="24">
      <el-menu
        class="el-menu-vertical-demo"
        router
        unique-opened
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
  
        <el-submenu v-for="item in menu" :index="item.id" :key="item.id">
          <template slot="title">
            <icon :name="item.icon"></icon>
            <span v-text="item.name"></span>
          </template>
          <el-menu-item-group class="over-hide" v-for="sub in item.sub" :key="sub.componentName">
            <el-menu-item :index="sub.componentName" v-text="sub.name">
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
  
      </el-menu>
    </el-col>
  </el-row>
  </template>
  
  <style scoped>
    .over-hide{
      overflow: hidden;
    }
  </style>
  
  <script>
    import menu from '@/config/menu-config'
    export default {
      data () {
        return {
          menu: menu
        }
      },
      methods: {
        handleOpen (key, keyPath) {
          console.log(key, keyPath)
        },
        handleClose (key, keyPath) {
          console.log(key, keyPath)
        }
      }
    }
  </script>
  <template>
    <el-row>
        <el-col :span="24">
            <div class="head-wrap">用户管理系统</div>
        </el-col>
    </el-row>
  </template>
  <style scoped>
  
  </style>
  <template>
    <el-table
      :data="tableData"
      style="width: 100%"
      height="600">
      <el-table-column
        fixed
        prop="number"
        label="员工编号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="员工姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="员工性别"
        width="120">
      </el-table-column>
      <el-table-column
        prop="date"
        label="出生日期"
        width="120">
      </el-table-column>
      <el-table-column
        prop="idnumber"
        label="身份证号"
        width="300">
      </el-table-column>
      <el-table-column
        prop="marry"
        label="婚姻状况"
        width="120">
      </el-table-column>
      <el-table-column
        prop="belong"
        label="民族"
        width="120">
      </el-table-column>
          <el-table-column
        prop="email"
        label="电子邮箱"
        width="120">
      </el-table-column>
       <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  
  </template>
  
  <script>
    export default {
      data() {
        return {
          tableData: [{
            number: '001',
            name: '王小虎',
            sex: '男',
            date: '2016-05-02',
            idnumber: '350181xxxxxxxxxxxx',
            marry: '否',
            belong:'汉族',
            email:'xx@xxxx.com'
          }, {
           number: '001',
            name: '王小虎',
            sex: '男',
            date: '2016-05-02',
            idnumber: '350181xxxxxxxxxxxx',
            marry: '否',
            belong:'汉族',
            email:'xx@xxxx.com'
          }, {
            number: '001',
            name: '王小虎',
            sex: '男',
            date: '2016-05-02',
            idnumber: '350181xxxxxxxxxxxx',
            marry: '否',
            belong:'汉族',
            email:'xx@xxxx.com'
          }, {
           number: '001',
            name: '王小虎',
            sex: '男',
            date: '2016-05-02',
            idnumber: '350181xxxxxxxxxxxx',
            marry: '否',
            belong:'汉族',
            email:'xx@xxxx.com'
          }, {
           number: '001',
            name: '王小虎',
            sex: '男',
            date: '2016-05-02',
            idnumber: '350181xxxxxxxxxxxx',
            marry: '否',
            belong:'汉族',
            email:'xx@xxxx.com'
          }, {
           number: '001',
            name: '王小虎',
            sex: '男',
            date: '2016-05-02',
            idnumber: '350181xxxxxxxxxxxx',
            marry: '否',
            belong:'汉族',
            email:'xx@xxxx.com'
          }, {
          number: '001',
            name: '王小虎',
            sex: '男',
            date: '2016-05-02',
            idnumber: '350181xxxxxxxxxxxx',
            marry: '否',
            belong:'汉族',
            email:'xx@xxxx.com'
          }]
        }
      }
    }
  </script>
  
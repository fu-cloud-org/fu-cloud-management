<template>
  <section>
    <div class="app-container">
      <el-table
        :data="
          tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        "
        style="width: 100%"
        highlight-current-row="true"
        :default-sort="{ prop: 'date', order: 'descending' }"
        @sort-change="changeTableSort"
        :cell-style="{ 'text-align': 'center' }"
        :header-cell-style="{ 'text-align': 'center' }"
      >
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column prop="date" label="创建时间" sortable width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="创建的人" width="180">
        </el-table-column>
        <el-table-column
          prop="num"
          label="与标签关联的帖子数量"
          sortable
          width="110"
        >
        </el-table-column>
        <el-table-column prop="id" label="ID"> </el-table-column>
        <el-table-column prop="call" label="名称" min-width="180">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-card class="pag">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[8, 10, 16]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </el-card>
    </div>
  </section>
</template>

<style>
.pag {
  text-align: right;
  line-height: 35px;
  height: 20%;
}
</style>
// import {labels} from '@/api/label.js'
<script>
export default {
  // created() {
  //   this.getData();
  // },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    // getData(params) {
    //   labels(params).then((res) => {
    //     console.log(res);
    //   });
    // },
  },

  data() {
    return {
      currentPage: 1, //当前页数
      pageSize: 8,
      total: 14, // 总条数，从接口返回
      tableData: [
        {
          date: "2022-12-24",
          name: "c1c1",
          num: 1,
          id: "14",
          call: "早八谋害人类",
        },
        {
          date: "2022-12-24",
          name: "c1c1",
          num: 1,
          id: "13",
          call: "哈哈哈哈哈哈",
        },{
          date: "2022-12-24",
          name: "c1c1",
          num: 1,
          id: "12",
          call: "求助",
        },
        {
          date: "2022-12-24",
          name: "c1c1",
          num: 2,
          id: "11",
          call: "学习",
        },
        {
          date: "2022-12-24",
          name: "c1c1",
          num: 1,
          id: "10",
          call: "选课",
        },
        {
          date: "2022-12-24",
          name: "c1c1",
          num: 1,
          id: "9",
          call: "问答贴",
        },
        {
          date: "2022-12-24",
          name: "淅沥沥",
          num: 1,
          id: "8",
          call: "公语教室",
        },
        {
          date: "2022-12-24",
          name: "淅沥沥",
          num: 1,
          id: "7",
          call: "找地点",
        },
        {
          date: "2022-12-23",
          name: "zjzj",
          num: 1,
          id: "6",
          call: "期末周",
        },
        {
          date: "2022-12-11",
          name: "xzy",
          num: 1,
          id: "5",
          call: "期末",
        },
        {
          date: "2022-12-11",
          name: "xzy",
          num: 1,
          id: "4",
          call: "加入摆烂",
        },
        {
          date: "2022-12-11",
          name: "xzy",
          num: 1,
          id: "3",
          call: "继续摆烂",
        },
        {
          date: "2022-12-11",
          name: "noneasp",
          num: 1,
          id: "2",
          call: "福云",
        },
        {
          date: "2022-12-11",
          name: "noneasp",
          num: 1,
          id: "1",
          call: "软件工程",
        },
      ],
    };
  },
};
</script>

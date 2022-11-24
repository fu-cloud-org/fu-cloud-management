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
      total: 11, // 总条数，从接口返回
      tableData: [
        {
          date: "2022-11-24 09:25:25",
          name: "王小虎",
          num: 120000,
          id: "1234",
          call: "大学生哪有不疯的",
        },
        {
          date: "2022-11-14 17:35:25",
          name: "王小虎",
          num: 110,
          id: "1234",
          call: "快解封球球",
        },
        {
          date: "2022-11-13 16:35:25",
          name: "王小虎",
          num: 1111,
          id: "4869",
          call: "柯南",
        },
        {
          date: "2022-11-24 17:35:25",
          name: "王小虎",
          num: 11,
          id: "4869",
          call: "想看电影",
        },
        {
          date: "2022-11-24 19:25:25",
          name: "王小虎",
          num: 11,
          id: "1234",
          call: "解封啊",
        },
        {
          date: "2022-11-22 09:25:25",
          name: "王小虎",
          num: 11,
          id: "1234",
          call: "解封啊",
        },
        {
          date: "2022-11-22 09:25:25",
          name: "王小虎",
          num: 11,
          id: "1234",
          call: "解封啊",
        },
        {
          date: "2022-11-22 09:25:25",
          name: "王小虎",
          num: 11,
          id: "1234",
          call: "解封啊",
        },
        {
          date: "2022-11-22 09:25:25",
          name: "王小虎",
          num: 11,
          id: "1234",
          call: "解封啊",
        },
        {
          date: "2022-11-22 09:25:25",
          name: "王小虎",
          num: 11,
          id: "1234",
          call: "解封啊",
        },
        {
          date: "2022-11-21 09:25:25",
          name: "王小虎",
          num: 12,
          id: "1234",
          call: "我很好",
        },
      ],
    };
  },
};
</script>

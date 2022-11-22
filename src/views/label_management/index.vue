<template>
  <section>
    <div>
      <el-card>
        <el-table
          :data="
            tableData.slice(
              (currentPage - 1) * pageSize,
              currentPage * pageSize
            )
          "
          stripe
          border="true"
          style="width: 100%"
          max-height="450"
          highlight-current-row
          @current-change="handleCurrentChange"
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
            width="200"
          >
          </el-table-column>
          <el-table-column prop="id" label="ID"> </el-table-column>
          <el-table-column prop="call" label="名称" min-width="180">
          </el-table-column>
        </el-table>
      </el-card>
    </div>
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
  </section>
</template>

<style>
.pag {
  text-align: right;
  line-height: 35px;
}
</style>

<script>
export default {
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
  },
  data() {
    return {
      currentPage: 1, //当前页数
      pageSize: 8,
      total: 17,
      tableData: [
        {
          date: "2022-11-02",
          name: "王小虎",
          num: 110,
          id: "1234",
          call: "解封",
        },
        {
          date: "2022-11-03",
          name: "王小虎",
          num: 11,
          id: "1234",
          call: "解封",
        },
        {
          date: "2022-11-21",
          name: "王小虎",
          num: 124,
          id: "1234",
          call: "解封",
        },
        {
          date: "2022-11-20",
          name: "王小虎",
          num: 90,
          id: "1234",
          call: "解封",
        },
        {
          date: "2022-11-21",
          name: "王小虎",
          num: 3,
          id: "1234",
          call: "解封",
        },
        {
          date: "2022-11-19",
          name: "王小虎",
          num: 3,
          id: "1234",
          call: "解封",
        },
        {
          date: "2022-11-18",
          name: "王小虎",
          num: 3,
          id: "1234",
          call: "解封",
        },
        {
          date: "2022-11-03",
          name: "王小虎",
          num: 3,
          id: "1234",
          call: "解封",
        },
        {
          date: "2022-11-03",
          name: "王小虎",
          num: 3,
          id: "1234",
          call: "解封",
        },
        {
          date: "2022-11-03",
          name: "王小虎",
          num: 3,
          id: "1234",
          call: "解封",
        },
        {
          date: "2022-11-03",
          name: "王小虎",
          num: 3,
          id: "1234",
          call: "解封",
        },
        {
          date: "2022-11-03",
          name: "王小虎",
          num: 3,
          id: "1234",
          call: "解封",
        },
        {
          date: "2022-11-03",
          name: "王小虎",
          num: 3,
          id: "1234",
          call: "解封",
        },
        {
          date: "2022-11-03",
          name: "王小虎",
          num: 3,
          id: "1234",
          call: "解封",
        },
        {
          date: "2022-11-03",
          name: "王小虎",
          num: 3,
          id: "1234",
          call: "解封",
        },
        {
          date: "2022-11-03",
          name: "王小虎",
          num: 3,
          id: "1234",
          call: "解封",
        },
        {
          date: "2022-11-03",
          name: "王小虎",
          num: 3,
          id: "1234",
          call: "解封",
        },
      ],
    };
  },
};
</script>

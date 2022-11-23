<template>
  <div class="app-container">
    <el-form
      :model="queryParams"
      ref="queryForm"
      size="small"
      :inline="true"
      v-show="showSearch"
      label-width="68px"
    >
      <el-form-item label="帖子标题" prop="configName">
        <el-input
          v-model="queryParams.configName"
          placeholder="请输入帖子标题"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="作者" prop="configKey">
        <el-input
          v-model="queryParams.configKey"
          placeholder="请输入作者名"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          icon="el-icon-search"
          size="mini"
          @click="handleQuery"
          >搜索</el-button
        >
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery"
          >重置</el-button
        >
      </el-form-item>
    </el-form>

    <el-table 
    :data="
            tableData.slice(
              (currentPage - 1) * pageSize,
              currentPage * pageSize
            )
          ">
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column label="标题" align="center" prop="configId" />
      <el-table-column label="标签" align="center" prop="configName" />
      <el-table-column label="作者" align="center" prop="configValue" />
      <el-table-column
        label="浏览量"
        align="center"
        prop="configType"
        sortable
      />
      <el-table-column label="创建时间" align="center" prop="configKey" />
      <el-table-column
        label="操作"
        align="center"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            v-hasPermi="['system:config:edit']"
            >查看</el-button
          >
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:config:edit']"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            v-hasPermi="['system:config:edit']"
            >加精</el-button
          >
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:config:remove']"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
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
</template>

<script>
export default {
  name: "Config",
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 参数配置表格数据
      configList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        configName: null,
        configKey: null,
        configValue: null,
        configType: null,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {},
      currentPage: 1, //当前页数
      pageSize: 8,
      total: 10,
      tableData: [
        {
          configId: "今天也是元气满满的一天呢",
          configName: "洗了蒜了",
          configKey: "2022-11-23",
          configValue: "啊啊啊啊啊！",
          configType: 1234567,
        },
        {
          configId: "这个男人叫小帅",
          configName: "这个女人叫小美",
          configKey: "2022-11-23",
          configValue: "健康马",
          configType: 7234567,
        },
        {
          configId: "云上楼台望人间",
          configName: "不知人间苦难多",
          configKey: "2022-11-23",
          configValue: "今夜没喝醉",
          configType: 1234567,
        },
        {
          configId: "云上楼台望人间",
          configName: "不知人间苦难多",
          configKey: "2022-11-23",
          configValue: "今夜没喝醉",
          configType: 1234567,
        },
        {
          configId: "云上楼台望人间",
          configName: "不知人间苦难多",
          configKey: "2022-11-23",
          configValue: "今夜没喝醉",
          configType: 1234567,
        },
        {
          configId: "云上楼台望人间",
          configName: "不知人间苦难多",
          configKey: "2022-11-23",
          configValue: "今夜没喝醉",
          configType: 1234567,
        },
        {
          configId: "云上楼台望人间",
          configName: "不知人间苦难多",
          configKey: "2022-11-23",
          configValue: "今夜没喝醉",
          configType: 1234567,
        },
        {
          configId: "云上楼台望人间",
          configName: "不知人间苦难多",
          configKey: "2022-11-23",
          configValue: "今夜没喝醉",
          configType: 1234567,
        },
        {
          configId: "云上楼台望人间",
          configName: "不知人间苦难多",
          configKey: "2022-11-23",
          configValue: "今夜没喝醉",
          configType: 1234567,
        },
        {
          configId: "云上楼台望人间",
          configName: "不知人间苦难多",
          configKey: "2022-11-23",
          configValue: "今夜没喝醉",
          configType: 1234567,
        },
      ],
    };
  },
  created() {
    //this.getList();
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    /** 查询列表 */
    getList() {
      this.loading = false;
      listConfig(this.queryParams).then((response) => {
        this.configList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        configId: null,
        configName: null,
        configKey: null,
        configValue: null,
        configType: null,
        createBy: null,
        createTime: null,
        updateBy: null,
        updateTime: null,
        remark: null,
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map((item) => item.configId);
      this.single = selection.length !== 1;
      this.multiple = !selection.length;
    },
    /** 编辑按钮操作 */
    handleUpdate(row) {
      this.reset();
      const configId = row.configId || this.ids;
      getConfig(configId).then((response) => {
        this.form = response.data;
        this.open = true;
        this.title = "编辑文章";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          if (this.form.configId != null) {
            updateConfig(this.form).then((response) => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const configIds = row.configId || this.ids;
      this.$modal
        .confirm('是否确认删除参数配置编号为"' + configIds + '"的数据项？')
        .then(function () {
          return delConfig(configIds);
        })
        .then(() => {
          this.getList();
          this.$modal.msgSuccess("删除成功");
        })
        .catch(() => {});
    },
  },
};
</script>
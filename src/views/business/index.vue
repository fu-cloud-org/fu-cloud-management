<template>
    <div style="width: 80%;margin:auto;">
    <!--表格-->
    <el-table 
    :data="filterTableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" 
    stripe 
    style="width:100%;border-radius: 12px"
    highlight-current-row
    ref="textDOCRef"
    @sort-change="tableSortChange"
    @selection-change="tableSelectionChange"
    @row-click="textRowClick"
    @select-all="selectAll"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column width="250" sortable label="Title">
        <template #default="scope">
            <el-input
            v-model="editTitle" 
            placeholder="Edit Title" 
            v-if="isEdit && currentRowTitle===scope.row.title"
            clearable
            autofocus
            v-myfocus
            />
            <span v-else><el-tag type="success"><el-link type="success" :href="scope.row.link" :underline="false" target="_blank">{{scope.row.title}}</el-link></el-tag></span>
        </template>
      </el-table-column>
      <el-table-column width="250" :show-overflow-tooltip="true">
        <template #header>
            <span class="el-icon-paperclip" style="margin-right:5px"></span><span>{{"Link"}}</span>
        </template>
        <template #default="scope">
            <el-input 
            v-model="editLink" 
            placeholder="Edit Link" 
            v-if="isEdit && currentRowTitle===scope.row.title"
            clearable
            prefix-icon="el-icon-paperclip" />
            <span v-else><el-tag type="primary"><el-link type="primary" :href="scope.row.link" :underline="false" target="_blank">{{scope.row.link}}</el-link></el-tag></span>
        </template>
      </el-table-column>
      <el-table-column align="right">
        <template #header>
            <el-input 
            v-model="search" 
            size="large" 
            placeholder="Search for Title"
            prefix-icon="el-icon-search"
            clearable 
            />
        </template>
        <template #default="scope">
            <el-button 
            v-if="isEdit && currentRowTitle===scope.row.title" 
            type="primary" 
            size="small" 
            @click="handConfirm(scope.$index, scope.row)">
                Confirm
            </el-button>

            <el-button 
            v-if="isEdit && currentRowTitle===scope.row.title" 
            type="info" 
            size="small" 
            @click="isEdit=false">
                Cancel
            </el-button>

            <el-button 
            v-if="!(isEdit && currentRowTitle===scope.row.title)" 
            size="small" 
            @click="handleEdit(scope.$index, scope.row)"
            >Edit
            </el-button>

            <el-button
            v-if="!(isEdit && currentRowTitle===scope.row.title)" 
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete
            </el-button>

        </template>
      </el-table-column>
    </el-table>
    <!--分页组件-->
    <el-row style="margin-top:25px;margin-bottom:10px">
        <el-col :span="2"><el-button type="primary" @click="clearSelection">ClearSelection</el-button></el-col>
        <el-col :span="12" :offset="10">
            <el-pagination
            style="width:100%"
            :current-page="currentPage"
            :page-size="pageSize"
            :page-sizes="[7,10,15,30,60]"
            :total="filterTableDataLength"
            layout="total,sizes,prev,pager,next,jumper"
            @current-change="handCurrentPageChange"
            @size-change="handPageSizeChange"
            >
        </el-pagination>
        </el-col>
    </el-row>
    <!--添加按钮-->
    <el-button  style="width:100%" @click="handAddItem" type="success">Add Item</el-button>
    <!--添加按钮对话框-->
    <el-dialog
    :visible.sync="isShow"
    width="40%"
    center
    :before-close="handDialogCancel"
    >
    <template #title>
        <span class="el-icon-circle-plus">添加</span>
    </template>
    <template #default>
        <el-form :model="form" label-width="50px">
            <el-form-item label="Title">
                <el-input v-model="form.title" />
            </el-form-item>
            <el-form-item label="Link">
                <el-input v-model="form.link" />
            </el-form-item>
        </el-form>
    </template>
    <template #footer>
        <el-button type="success" @click="handDialogConfirm">确 定</el-button>
        <el-button type="primary" @click="handDialogCancel">取 消</el-button>
    </template>
    </el-dialog>
    </div>
  </template>
  
  <script>
  export default{
    data(){
       return {
        isSelectAll:false,
        selectList:[],
        currentTableSort:"descending",
        currentPage:1,
        pageSize:7,
        currentRowTitle:"",
        editTitle:"",
        editLink:"",
        isEdit:false,
        form:{
            title:'',
            link:''
        },
        isShow:false,
        search:'',
        tableData:[
            {
                title: 'Attensist',
                link: 'https://blog.csdn.net/m0_52119324',
            },
            {
                title: 'yang三毛',
                link: 'https://blog.csdn.net/y15659037739l',
            },
            {
                title: 'xilili24',
                link: 'https://blog.csdn.net/m0_62111261',
            },
            {
                title: 'Yeyeahl',
                link: 'https://blog.csdn.net/m0_62064405',
            },
            {
                title:'Jin4869',
                link:'https://blog.csdn.net/jin4869',
            },
            {
                title:'今天什么歌',
                link:'https://blog.csdn.net/weixin_55703999',
            },
            {
                title:'xzy',
                link:'https://blog.csdn.net/t_eddy',
            },
            {
                title:'dofson',
                link:'https://blog.csdn.net/hhwzs',
            },
            {
                title:'安康',
                link:'https://blog.csdn.net/weixin_51744713',
            },
            {
                title:'硫没有正七价',
                link:'https://weapons.schwefel.me/',
            },
        ]
        }
    },
    methods:{
        handleEdit(index,row){
            this.isEdit=true
            this.currentRowTitle=row.title
        },
        handleDelete(index,row){
            console.log(index, row)
            this.tableData = this.tableData.filter((item)=>{
                return item.title !== row.title
            })
            this.$message({
                message:"delete success",
                type:"success",
                showClose:true,
                duration:1500
            })
        },
        handConfirm(index,row){
            if(this.editTitle===""||this.editLink===""){
                this.$message({
                    message:"Title/Link can not be empty!!",
                    type:"error",
                    showClose:true,
                    duration:1500
                })
            }
            else if(this.tableData.filter((item)=>{
              return item.title ===  this.editTitle || item.link=== this.editLink
            }).length>0){
                this.$message({
                    message:"invalid input",
                    type:"error",
                    showClose:true,
                    duration: 1500,
                })
                this.editTitle=""
                this.editLink=""
            }
            else{
                this.isEdit = false;
                row.title = this.editTitle;
                row.link = this.editLink;
                this.editTitle=""
                this.editLink=""
                this.$message({
                    type:"success",
                    message:"Modify success",
                    showClose:true,
                    duration: 1500,
                 })
            }
        },
        handAddItem(){
            this.isShow = true;
        },
        handDialogCancel(){
            this.isShow = false;
            this.form = {title:"",link:""}
        },
        handDialogConfirm(){
            if(this.tableData.filter((item)=>{
              return item.title ===  this.form.title || item.link=== this.form.link
            }).length>0){
                this.$message({
                    message:"invalid input",
                    type:"error",
                    showClose:true,
                    duration: 1500,
                })
                this.form = { title:"",link:""}
            }
            else if(this.form.link==="" || this.form.title===""){
                this.$message({
                    message:"Title/Link can not be empty!!",
                    type:"error",
                    showClose:true,
                    duration:1500
                })
            }
            else{
                this.$confirm("确认添加？","Tip",{
                    confirmButtonText:"确认",
                    cancelButtonText:"取消",
                    type:"info"
                }).then(()=>{
                    this.tableData.push({title:this.form.title,link:this.form.link})
                    this.isShow = false
                    this.$message({
                        type:"success",
                        message:"添加成功",
                        showClose:true,
                        duration: 1500,
                    })
                    this.form = { title:"",link:""}
                }).catch(()=>{
                    this.$message({
                        type:"info",
                        message:"已取消操作",
                        showClose:true,
                        duration: 1500,
                    })
                    this.form = { title:"",link:""}
                })
            }
        },
        handCurrentPageChange(val){
            this.currentPage=val;
            if(this.isSelectAll){
                this.$refs.textDOCRef.clearSelection();
                this.$refs.textDOCRef.toggleAllSelection();
            }
        },
        handPageSizeChange(val){
            this.pageSize=val;
            this.currentPage=1;
            if(this.isSelectAll){
                this.$refs.textDOCRef.clearSelection();
                this.$refs.textDOCRef.toggleAllSelection();
            }
        },
        tableSortChange(column,prop,order){
            this.currentTableSort  =  column.order
            //console.log(this.currentTableSort)
        },
        tableSelectionChange(itemlist){
            this.selectList=itemlist;
        },
        textRowClick(row){
            console.log(row)
            this.$refs.textDOCRef.toggleRowSelection(row);
        },
        clearSelection(){
            this.$refs.textDOCRef.clearSelection()
            this.isSelectAll=false;
        },
        selectAll(){
            this.isSelectAll = !this.isSelectAll
            if(this.isSelectAll){
                this.$refs.textDOCRef.toggleAllSelection()
            }
            else{
                this.$refs.textDOCRef.clearSelection()
            }
        }
    },
    computed:{
        filterTableData(){
            const tempfilterdata = this.tableData.filter((data) =>
                !this.search || data.title.toLowerCase().includes(this.search.toLowerCase()))
            
            if(this.currentTableSort==="ascending"){
                return tempfilterdata.sort((a,b)=>{
                    return a.title.localeCompare(b.title)
                })
            }
            else{
                //console.log('xxx')
                return tempfilterdata.sort((a,b)=>{
                    return a.title.localeCompare(b.title)
                }).reverse()
            }
        },
        filterTableDataLength(){
            return this.filterTableData.length
        },
    },
    watch:{
        search(){
            this.currentPage=1;
        },
        isEdit(newvalue){
            
        }
    },
    directives:{
        myfocus:{
            inserted(el){
                el.querySelector("input").focus();
            }
        }
    }
  }
  </script>
  
 





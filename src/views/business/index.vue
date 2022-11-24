<template>
    <div style="width: 80%;margin:auto;">
    <el-table 
    :data="filterTableData" 
    stripe 
    style="width:100%;border-radius: 12px"
    :default-sort="{prop:'title',order:'descending'}"
    >
      <el-table-column  label="Title" width="250" sortable>
        <template #default="scope">
            <el-input 
            v-model="editTitle" 
            placeholder="Edit Title" 
            v-if="isEdit && currentRowTitle===scope.row.title" />
            <span v-else><el-link type="success" :href="scope.row.link" :underline="false" target="_blank">{{scope.row.title}}</el-link></span>
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
            v-if="isEdit && currentRowTitle===scope.row.title" />
            <span v-else><el-link type="primary" :href="scope.row.link" :underline="false" target="_blank">{{scope.row.link}}</el-link></span>
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
    <el-button  style="width:100%" @click="handAddItem" type="success">Add Item</el-button>
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
      title: 'asd',
      link: 'https://www.baidu.com',
      
    },
    {
        title: 'github',
        link: '#456555555555555555555555555555',
      
    },
    {
        title: 'csdn',
        link: '#7897777777777777777777777',
    
    } ,
    {
        title: 'df',
        link: '#444999999999999999999999999999',
      
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
        }
        
    },
    computed:{
        filterTableData(){
            return this.tableData.filter((data) =>
                !this.search || data.title.toLowerCase().includes(this.search.toLowerCase()))
        }
    }
  }
  </script>
  
 





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
            <el-input v-model="editTitle" placeholder="Edit Title" v-if="isEdit" />
            <span v-else>{{scope.row.title}}</span>
        </template>
      </el-table-column>
      <el-table-column label="Link" width="250" :show-overflow-tooltip="true">
        <template #default="scope">
            <el-input v-model="editLink" placeholder="Edit Link" v-if="isEdit" />
            <span v-else>{{scope.row.link}}</span>
        </template>
      </el-table-column>
      <el-table-column align="right">
        <template #header>
            <el-input v-model="search" size="large" placeholder="Type to search" />
        </template>
        <template #default="scope">
            <el-button v-if="isEdit" size="small" @click="handConfirm">
                Confirm
            </el-button>
            <el-button v-show="!isEdit" size="small" @click="handleEdit(scope.$index, scope.row)"> 
                Edit
            </el-button>
            <el-button
                v-show="!isEdit"
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
        <span class="el-icon-plus">添加</span>
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
      link: '#12333333333333333333333333',
      
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
            console.log(index, row.link)
            this.isEdit=true
        },
        handleDelete(index,row){
            console.log(index, row)
            this.tableData = this.tableData.filter((item)=>{
                return item.title !== row.title
            })
        },
        handConfirm(){
            this.isEdit = false;
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
            }
            else{
                this.tableData.push({title:this.form.title,link:this.form.link})
                this.isShow = false
            }
            this.form = { title:"",link:""}
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
  
 





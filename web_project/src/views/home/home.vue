<template>
  <div id="home">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="">
          <el-menu 
            default-active="1-4-1" 
            class="el-menu-vertical-demo" 
            @open="handleOpen" 
            @close="handleClose"
            :collapse="isCollapse">
            <el-menu-item index="0" @click="OpenOrClose">
              <i v-if="isCollapse" class="el-icon-d-arrow-right"></i>
              <i v-else class="el-icon-d-arrow-left"></i>
            </el-menu-item>
            
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main style="padding: 0px">
          <el-container style="height: 100%">
            <el-header style="background-color: #42b983">Pages</el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-main>
      </el-container>
    </el-container>
  
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        isCollapse: true,
        value1: 0,
        value2: 0
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      OpenOrClose(){
        if(this.isCollapse === true){
            this.isCollapse=false
        }else{
            this.isCollapse = true;
        }
      }

    }
  }
</script>

<style>
  @import "../../assets/css/home.css";

</style>

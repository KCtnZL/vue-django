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
              <el-tooltip :content="this.tipContent" placement="top" effect="light">
                <i content="Top Left 提示文字" v-if="isCollapse" class="el-icon-d-arrow-right"></i>
                <i v-else class="el-icon-d-arrow-left"></i>
              </el-tooltip>
            </el-menu-item>

            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
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
          <el-container>
            <el-main>
              <el-tabs v-model="editableTabsValue" type="card" closable @edit="handleTabsEdit" @tab-click="tabClick" style="height: 100%">
                <el-tab-pane
                  :key="item.name"
                  v-for="(item, index) in editableTabs"
                  :label="item.titles"
                  :name="item.name"
                >
                  <!--{{item.content}}-->
                  <router-view/>
                </el-tab-pane>
              </el-tabs>
            </el-main>
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
        value2: 0,
        tab0: true,
        tab1: true,
        tab2: true,
        editableTabsValue: '2',
        editableTabs: [{
          titles: 'card',
          name: 'card',
          content: 'Tab 1 content'
        }],
        tabIndex: 2
      };
    },
    computed:{
      tipContent(){
        if (this.isCollapse){
          return "展开"
        } else {
          return "关闭"
        }
      }
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
            this.isCollapse = false
        }else{
            this.isCollapse = true;
        }
      },
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }

          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      },
      tabClick(tag){
        this.$router.push({name:tag.name})
      }

    }
  }
</script>

<style>
  @import "../../assets/css/home.css";

</style>

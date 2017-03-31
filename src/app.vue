<style lang="less">
    * {
        margin: 0;
        padding: 0;
    }
    body {
        font-family: "Bree Serif", "Open Sans", "Arial", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", serif;
    }
    .container {
        max-width: 1080px;
        margin: 0 auto;
        .el-menu-item {
            font-size: 16px;
        }
        .el-menu--horizontal>.el-menu-item:hover, .el-menu--horizontal>.el-submenu.is-active .el-submenu__title, .el-menu--horizontal>.el-submenu:hover .el-submenu__title {
            border-bottom: 0;
        }
        .logo {
            float: left;
            height: 60px;
        }
    }
</style>

<template>
    <div class="container">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <div class="logo">
                <img src="./images/logo.jpg" alt="logo" height="100%">
            </div>
            <el-menu-item index="1">天下贰藏宝阁查询</el-menu-item>
            <!-- <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
        </el-menu>
        <search></search>
        <movie></movie>
        <!-- <data-table></data-table> -->
    </div>
</template>

<script>
import search from './components/search.vue';
import dataTable from './components/dataTable.vue';
import movie from './components/movie.vue';

export default {
    el: "#app",
    data() {
        return {
            activeIndex: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    components: {
        search,
        dataTable,
        movie
    }
}
</script>

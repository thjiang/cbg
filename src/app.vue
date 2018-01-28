<style lang="less">
body {
    font-size: 16px;
    font-weight: 100;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
        "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    background: #dfeff5;
    -webkit-text-size-adjust: 100%;
}

.clear {
    clear: both;
}

.wrap {
    margin: 20px auto;
    width: 1000px;
    .logo {
        float: left;
        width: 60px;
        height: 60px;
    }
    h3 {
        float: left;
        margin-left: 30px;
        height: 60px;
        line-height: 60px;
        font-size: 24px;
        font-weight: 100;
    }
}
</style>

<template>
    <div class="wrap">
        <header>
            <div class="logo"><img src="https://c.icewish.top/const/cbg/logo.png" alt="logo" width="100%"></div>
            <h3>天下贰藏宝阁高级查询</h3>
            <div class="clear"></div>
            <Button>Default</Button>
            <Button type="primary">Primary</Button>
            <Button type="ghost">Ghost</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <br><br>
            <Button type="info">Info</Button>
            <Button type="success">Success</Button>
            <Button type="warning">Warning</Button>
            <Button type="error">Error</Button>
        </header>
        <search></search>
        <!-- <role-list></role-list> -->
    </div>
</template>

<script>
import search from "./components/search.vue";
import roleList from "./components/roleList.vue";

export default {
    el: "#app",
    components: {
        search,
        roleList
    }
};
</script>
<style lang="less">
body {
    font-size: 16px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
        "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-text-size-adjust: 100%;
}

body, html, section, article, div, ul, li, h3, h4, h5, p {
    margin: 0;
    padding: 0;
    font-weight: normal;
}

li {
    list-style-type: none;
}

a {
    color: #409EFF;
    text-decoration: none;
}

html, body {
    height: 100%;
}

.clear {
    clear: both;
}
</style>

<template>
    <div class="nav">
        <router-link to="/" exact>首页</router-link>
        <router-link to="/test" exact>测试模块</router-link>
        <router-link to="/async" exact>异步组件</router-link>
        <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="ghost">Ghost</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    </div>
</template>
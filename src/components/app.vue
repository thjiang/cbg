<style lang="less">
body {
    @color: #FF704F;

    background-color: @color;
    h1 {
        background-color: #eee;
        color: red;
        transform: translate(10%, 10%);
        /*测试自动添加前缀*/
    }
    a {
        display: flex;
    }
    h2 {
        background-color: #ccc;
    }
}
</style>
<template>
<div>
    <a href="#">{{name}}</a>
    <h1>姓名：{{name}}</h1>
    <h2>{{age}}</h2>
</div>
</template>
<script>
export default {
    el: "#app",
    data() {
        return {
            name: "122211",
            age: "222212"
        }
    }
}
</script>

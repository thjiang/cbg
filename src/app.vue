<style lang="less" scoped="scoped">
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
	</header>
	<search></search>
</div>
</template>

<script>
import search from "./views/search.vue";
import "./css/index.less";

export default {
	componets: {
		search: search
	}
};
</script>


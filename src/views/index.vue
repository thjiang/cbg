<style lang="less">
	.content {
		color: green;
		transform: translateY(40px);
	}
</style>

<template>
	<div>
	    这是{{page}}页面
		<div class="content">
			这是一段绿色的字
		</div>
	</div>
</template>

<script>
export default {
    data: function() {
        return {
            page: '首页'
        };
    }
};
</script>

<style lang="less">

</style>
<template>
    <div class="table">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h1 style="line-height: 20px; color: #20A0FF">数据：</h1>
            </div>
            <div class="text item">
                <ul>
                    <li v-for="article in articles">
                        {{article.title}}
                    </li>
                    <li v-for="article in articles">
                        {{article.id}}
                    </li>
                    <li v-for="article in articles">
                        {{article.year}}
                    </li>
                    <li v-for="article in articles">
                        {{article.images.medium}}
                    </li>
                    <li v-for="article in articles">
                        {{article.genres}}
                    </li>
                </ul>
            </div>
        </el-card>

    </div>
</template>
<script>
export default {
    data() {
        return {
            articles: []
        };
    },
    mounted: function() {
        this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        // this.$http.jsonp('http://api.douban.com/v2/movie/weekly?count=10', {}, {
            headers: {
            },
            emulateJSON: true
        }).then(function(response) {
            // 这里是处理正确的回调
            this.articles = response.data.subjects
            // this.articles = response.data["subjects"] 也可以
        }, function(response) {
            // 这里是处理错误的回调
            console.log(response)
        });
    }

}
</script>

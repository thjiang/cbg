<style lang="less">

</style>

<template>
    <el-table :data="articles" style="width: 100%" :default-sort = "{prop: 'year', order: 'descending'}">
        <el-table-column prop="title" label="名称" sortable width="180"></el-table-column>
        <el-table-column prop="year" label="上映时间" sortable width="180"></el-table-column>
        <el-table-column prop="genres" label="题材" sortable></el-table-column>
        <el-table-column label="图片" sortable>
            <template scope="scope">
                <img :src="scope.row.images.small" alt="">
            </template>
        </el-table-column>
        <el-table-column prop="rating.average" label="评分" sortable></el-table-column>
    </el-table>
</template>

<script>
export default {
    data() {
        return {
            articles: [{
                year: '2016-05-02',
                title: '王小虎',
                genres: ["剧情","爱情"],
                images: {
                    small: "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p513344864.jpg",
                    large: "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p513344864.jpg",
                    medium: "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p513344864.jpg"
                },
                rating: {
                    "max": 10,
                    "average": 9.5,
                    "stars": "50",
                    "min": 0
                }
            }]
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

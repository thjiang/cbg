<style lang="less">

</style>

<template>
    <!-- 序号	头像	姓名	价格	装评/修为	金币/元宝	天域/军姿	备注	剩余时间	操作 -->
    <el-table :data="roles" style="width: 100%" :default-sort = "{prop: 'year', order: 'descending'}">
        <el-table-column label="头像" sortable width="100">
            <template scope="scope">
                <img :src="scope.row.avatar" alt="" height="40">
            </template>
        </el-table-column>
        <el-table-column prop="school" label="职业" sortable width=""></el-table-column>
        <el-table-column prop="nickname" label="昵称" sortable width="120"></el-table-column>
        <el-table-column prop="equipscore" label="装评" sortable width=""></el-table-column>
        <el-table-column prop="score" label="修为" sortable width=""></el-table-column>
        <el-table-column prop="lefttime" label="时间" sortable width=""></el-table-column>
        <el-table-column prop="price" label="价格" sortable width=""></el-table-column>
        <el-table-column label="操作" width="270">
            <template scope="scope">
                <el-button type="info" icon="search"><a :href="scope.row.yxblink">英雄榜</a></el-button>
                <el-button type="info" icon="search"><a :href="scope.row.cbglink">去购买</a></el-button>
            </template>
        </el-table-column>
        <!-- <el-table-column prop="year" label="上映时间" sortable width="180"></el-table-column>
        <el-table-column prop="genres" label="题材" sortable></el-table-column>
        <el-table-column label="图片" sortable>
            <template scope="scope">
                <img :src="scope.row.images.small" alt="">
            </template>
        </el-table-column>
        <el-table-column prop="rating.average" label="评分" sortable></el-table-column> -->
    </el-table>
</template>

<script>
export default {
    data() {
        return {
            roles: [{
                // year: '2016-05-02',
                // title: '王小虎',
                // genres: ["剧情","爱情"],
                // images: {
                //     small: "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p513344864.jpg",
                //     large: "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p513344864.jpg",
                //     medium: "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p513344864.jpg"
                // },
                // rating: {
                //     "max": 10,
                //     "average": 9.5,
                //     "stars": "50",
                //     "min": 0
                // }
                "avatar": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p513344864.jpg",
                "school": "天机",
                "nickname": "三千多个天机",
                "equipscore": "103582",
                "score": "634524",
                "lefttime": "1491060879893",
                "price": "124000",
                "yxblink": "http://bang.tx3.163.com/bang/role/39_17647",
                "cbglink": "http://tx3.cbg.163.com/cgi-bin/equipquery.py?act=overall_search_show_detail&serverid=171&equip_id=75154"
            }]
        };
    },
    mounted: function() {
        // this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        this.$http.get('http://127.0.0.1:8081/roleList', {params: {'id':1234567}}, {
            headers: {
            },
            emulateJSON: true
        }).then(function(response) {
            // 这里是处理正确的回调
            this.articles = response.data.result.data;
            // this.articles = response.data["subjects"] 也可以
        }, function(response) {
            // 这里是处理错误的回调
            console.log(response)
        });
    }
}
</script>

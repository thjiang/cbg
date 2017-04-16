<style lang="less">
    .roleList {
        margin: 20px 0;
        a {
            text-decoration: none;
            color: #FFF;
        }
        .el-table_1_column_1 {
            img {
                transform: translateY(4px);
            }
        }
        .el-table_1_column_2 {
            color: #22B8DD;
        }
        .el-table_1_column_3 {
            color: blueviolet;
        }
        .el-table_1_column_4 {
            color: red;
        }
        .el-table_1_column_5 {
            color: #0087ff;
        }
        .el-table_1_column_6 {
            color: #0087ff;
        }
        .el-table_1_column_7 {
            color: #00b56b;
        }
        .el-table_1_column_8 {
            color: red;
        }
    }
</style>

<template>
    <el-table class="roleList" :data="roles" style="width: 100%" :default-sort = "{prop: 'year', order: 'descending'}">
        <el-table-column label="头像" sortable width="100">
            <template scope="scope">
                <img :src="scope.row.avatar" alt="" height="40">
            </template>
        </el-table-column>
        <el-table-column prop="school" label="门派" sortable width=""></el-table-column>
        <el-table-column prop="nickname" label="昵称" sortable width="120"></el-table-column>
        <el-table-column prop="server" label="服务器" sortable width="100"></el-table-column>
        <el-table-column prop="equipscore" label="装评" sortable width=""></el-table-column>
        <el-table-column prop="score" label="修为" sortable width=""></el-table-column>
        <el-table-column prop="lefttime" label="时间" sortable width="110"></el-table-column>
        <el-table-column prop="price" label="价格" sortable width=""></el-table-column>
        <el-table-column label="操作" width="270">
            <template scope="scope">
                <el-button type="info"><a class="link" :href="scope.row.yxblink" target="_blank">英雄榜</a></el-button>
                <el-button type="info"><a class="link" :href="scope.row.cbglink" target="_blank">去购买</a></el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    props: ['dataList'],
    data() {
        return {
            // searchParam: this.searchData,
            roles: this.dataList
            // roles: [{
            //     "avatar": "http://res.tx3.cbg.163.com/images/role/smallface/61.jpg",
            //     "school": "天机",
            //     "nickname": "三千多个天机",
            //     "server": "天下无双",
            //     "equipscore": "103582",
            //     "score": "634524",
            //     "lefttime": "7小时",
            //     "price": "124000",
            //     "yxblink": "http://bang.tx3.163.com/bang/role/39_17647",
            //     "cbglink": "http://tx3.cbg.163.com/cgi-bin/equipquery.py?act=overall_search_show_detail&serverid=171&equip_id=75154"
            // }]
        };
    },
    mounted: function() {
        console.log(111);
        console.log(this.roles);
        console.log(222);


    }
}
</script>

<style lang="less">
    .roleList {
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
            color: red;
        }
        .el-table_1_column_6 {
            color: red;
        }
        .el-table_1_column_7 {
            color: #ff7800;
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
        <el-table-column prop="school" label="职业" sortable width=""></el-table-column>
        <el-table-column prop="nickname" label="昵称" sortable width="120"></el-table-column>
        <el-table-column prop="equipscore" label="装评" sortable width=""></el-table-column>
        <el-table-column prop="score" label="修为" sortable width=""></el-table-column>
        <el-table-column prop="lefttime" label="时间" sortable width=""></el-table-column>
        <el-table-column prop="price" label="价格" sortable width=""></el-table-column>
        <el-table-column label="操作" width="270">
            <template scope="scope">
                <el-button type="info"><a class="link" :href="scope.row.yxblink">英雄榜</a></el-button>
                <el-button type="info"><a class="link" :href="scope.row.cbglink">去购买</a></el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    data() {
        return {
            roles: [{
                "avatar": "http://res.tx3.cbg.163.com/images/role/smallface/61.jpg",
                "school": "天机",
                "nickname": "三千多个天机",
                "equipscore": "103582",
                "score": "634524",
                "lefttime": "7小时",
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
            var tmpRoles = response.data.result.data;
            var nowTime = new Date().getTime();
            for (var i = 0; i < tmpRoles.length; i++) {
                if (tmpRoles[i].lefttime) {
                    // 1天=24*60*60*1000=86400000ms,1小时=60*60*1000=3600000ms
                    if (nowTime - tmpRoles[i].lefttime > 86400000) {
                        tmpRoles[i].lefttime = Math.floor((nowTime - tmpRoles[i].lefttime) / 86400000) + "天" + Math.floor((nowTime - tmpRoles[i].lefttime) % 86400000 / 3600000) + "小时";
                    } else if (nowTime - tmpRoles[i].lefttime > 3600000) {
                        tmpRoles[i].lefttime = Math.floor((nowTime - tmpRoles[i].lefttime) / 3600000) + "小时";
                    } else {
                        tmpRoles[i].lefttime = "不足1小时";
                    }
                }
            }
            this.roles = tmpRoles;
        }, function(response) {
            console.log(response);
        });
    }
}
</script>

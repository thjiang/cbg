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
    .el-pagination {
        float: right;
        margin-bottom: 40px;
    }
</style>

<template>
    <div class="roleListCont">
        <el-table class="roleList" :data="roles" style="width: 100%" :default-sort = "{prop: 'year', order: 'descending'}">
            <el-table-column label="头像" width="100">
                <template scope="scope">
                    <img :src="scope.row.avatar" alt="" height="40">
                </template>
            </el-table-column>
            <el-table-column prop="school" label="门派" width=""></el-table-column>
            <el-table-column prop="nickname" label="昵称" width="140"></el-table-column>
            <el-table-column prop="server" label="服务器" sortable width="100"></el-table-column>
            <el-table-column prop="equipscore" label="装评" sortable width=""></el-table-column>
            <el-table-column prop="score" label="修为" sortable width=""></el-table-column>
            <el-table-column prop="lefttime" label="时间" sortable width="100"></el-table-column>
            <el-table-column prop="price" label="价格" sortable width=""></el-table-column>
            <el-table-column label="操作" width="270">
                <template scope="scope">
                    <el-button type="info"><a class="link" :href="scope.row.yxblink" target="_blank">英雄榜</a></el-button>
                    <el-button type="info"><a class="link" :href="scope.row.cbglink" target="_blank">去购买</a></el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination v-if="total > 15" @current-change="currentChange" :current-page="cur_page" :page-size="15" layout="prev, pager, next, total" :total="total"></el-pagination>
    </div>
</template>

<script>
import bus from '../eventBus.js';
export default {
    data() {
        return {
            roles: [],
            total: 0,
            cur_page: 1
        };
    },
    mounted: function() {
        var _this = this;
        bus.$on("updateList",function(msg){
            _this.roles = msg.roles;
            _this.total = msg.paging.total_num;
            _this.cur_page = msg.paging.cur_page;
        });
    },
    methods: {
        currentChange(nextPage) {
            bus.$emit("changePage", nextPage);
        },
    }
}
</script>

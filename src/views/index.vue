<style lang="less">
.container {
    .header {
        height: 60px;
        line-height: 60px;
        padding-left: 20px;
        margin-bottom: 30px;
        border-bottom: 1px solid #ececec;

        h3 {
            display: inline-block;
        }

        .newAct {
            float: right;
            transform: translateY(10px);
        }
    }

    .el-tabs__content {
        height: 0; // 隐藏tabs组件默认的content
    }

    .myActTable {
        margin: 20px 0;
        .actImgWrap {
            float: left;
            width: 60px;
            height: 60px;
        }
        .actInfoWrap {
            float: left;
            margin-left: 10px;
            h5 {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                max-width: 400px;
            }
            p {
                margin-top: 10px;
            }
        }
    }

    .el-pagination {
        text-align: right;
    }

    .empty {
        position: absolute;
        left: 50%;
        top: 45%;
        width: 320px;
        height: 420px;
        transform: translate(-50%, -50%);
        text-align: center;
        img {
            width: 320px;
            height: 320px;
        }
        p {
            margin-top: 60px;
            color: #666;
            font-size: 18px;
            font-weight: 100;
        }
        .el-button {
            margin-top: 20px;
        }
    }
}
</style>

<template>
    <section class="container">
        <header class="header">
            <h3>我的活动</h3>
            <el-button class="newAct" type="primary" @click="newAct">新建活动</el-button>
        </header>
        <el-tabs v-model="activeName" @tab-click="changeTab">
            <el-tab-pane label="全部" name="first">全部</el-tab-pane>
            <el-tab-pane label="未发布" name="second">未发布</el-tab-pane>
            <el-tab-pane label="未开始" name="third">未开始</el-tab-pane>
            <el-tab-pane label="进行中" name="fourth">进行中</el-tab-pane>
            <el-tab-pane label="已结束" name="fifth">已结束</el-tab-pane>
        </el-tabs>
        <el-table v-if="tableData.length" :data="tableData" class="myActTable" stripe border style="width: 100%">
            <el-table-column label="活动信息">
                <template slot-scope="scope">
                    <div class="actImgWrap">
                        <img :src="scope.row.mainPic[0]" width="100%" height="100%">
                    </div>
                    <div class="actInfoWrap">
                        <h5><router-link :to="'/create/' + scope.row.id" exact>{{scope.row.name}}</router-link></h5>
                        <p>{{scope.row.activityStartTime}} - {{scope.row.activityEndTime}}</p>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="status" label="状态" width="70" align="center">
            </el-table-column>
            <el-table-column prop="applyCount" label="报名人数" width="80" align="center"></el-table-column>
            <el-table-column prop="passCount" label="通过人数" width="80" align="center"></el-table-column>
            <el-table-column prop="payedCount" label="缴费人数" width="80" align="center"></el-table-column>
            <el-table-column fixed="right" label="操作" width="210" align="center">
                <template slot-scope="scope">
                    <el-button type="text" size="small">
                        <router-link :to="'/success/' + scope.row.id" exact>分享</router-link>
                    </el-button>
                    <el-button type="text" size="small">
                        <router-link :to="'/check/' + scope.row.id" exact>审核</router-link>
                    </el-button>
                    <el-button type="text" size="small">
                        <router-link :to="'/create/' + scope.row.id" exact>编辑</router-link>
                    </el-button>
                    <el-button @click="copy(scope.row.id)" type="text" size="small">复制</el-button>
                    <el-button @click="del(scope.row.id)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination v-if="tableData.length" background layout="prev, pager, next" :total="100"></el-pagination>
        <div v-else class="empty">
            <img src="https://si.geilicdn.com/hz_img_004d0000016155e4ac4a0a026860_312_273_unadjust.png" alt="empty">
            <p>您还没有创建活动，快去创建一个吧~</p>
            <el-button type="primary" plain @click="newAct">创建活动</el-button>
        </div>
    </section>
</template>

<script>
export default {
    data: function() {
        return {
            activeName: "first",
            tableData: [
                {
                    activityType: 1,
                    name: "活动名称",
                    mainPic: [
                        "http://img.geilicdn.com/proxy_gateway_1505789951686.jpg",
                        "http://img.geilicdn.com/proxy_gateway_1505789951686.jpg",
                        "http://img.geilicdn.com/proxy_gateway_1505789951686.jpg"
                    ],
                    activityApplyCondition: [{}],
                    address: {
                        address: "西溪谷",
                        province: "浙江",
                        city: "杭州",
                        district: "西湖区",
                        latitude: 120.888888,
                        longitude: 30.666666
                    },
                    activityStartTime: 1516723200000,
                    activityEndTime: 1516723200000,
                    id: 17146,
                    creator: "1932954",
                    status: 3, // (-1 删除， 1: 草稿， 2： 发布， 3： 结束)
                    applyCount: 65536, // 报名人数
                    passCount: 1024, // 通过人数
                    payedCount: 7758520 // 缴费人数
                },
                {
                    activityType: 1,
                    name: "活动名称",
                    mainPic: [
                        "http://img.geilicdn.com/proxy_gateway_1505789951686.jpg",
                        "http://img.geilicdn.com/proxy_gateway_1505789951686.jpg",
                        "http://img.geilicdn.com/proxy_gateway_1505789951686.jpg"
                    ],
                    activityApplyCondition: [{}],
                    address: {
                        address: "西溪谷",
                        province: "浙江",
                        city: "杭州",
                        district: "西湖区",
                        latitude: 120.888888,
                        longitude: 30.666666
                    },
                    activityStartTime: 1516723200000,
                    activityEndTime: 1516723200000,
                    id: 17148,
                    creator: "1932954",
                    status: 3, // (-1 删除， 1: 草稿， 2： 发布， 3： 结束)
                    applyCount: 4, // 报名人数
                    passCount: 4, // 通过人数
                    payedCount: 4 // 缴费人数
                }
            ]
        };
    },
    methods: {
        changeTab(tab, event) {
            // console.log(tab, event);
            // 1 全部 2 未发布 3 未开始 4 进行中 5 已结束
            switch (+ tab.index) {
                case 0:
                    // this.tableData = [];
                    console.log("全部");
                    break;
                case 1:
                    // this.tableData = [];
                    console.log("未发布");
                    break;
                default:
                    break;
            }
        },
        newAct() {
            // this.$router.push({ path: `/create/${userId}` });
            this.$router.push({
                path: `/create/0`
            });
        },
        copy(id) {
            console.log(id);
        },
        del(id) {
           console.log(id);
        }
    },
    mounted() {
        // getData()
    }
};
</script>
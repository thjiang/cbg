<style lang="less">
    .search-collapse {
        margin: 20px 0;
    }
    .search {
        margin-top: 20px;
        .line {
            text-align:center;
        }
    }
    .el-collapse-item__header {
        color: #0087ff;
        font-size: 14px;
    }
</style>
<template>
    <div class="">
        <el-collapse class="search-collapse" v-model="activeNames">
            <el-collapse-item title="点击可切换展开/折叠" name="1">
                <div class="search">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <!-- <el-form-item label="即时配送" prop="delivery">
                        <el-switch on-text="" off-text="" v-model="ruleForm.delivery"></el-switch>
                    </el-form-item> -->
                    <el-form-item label="选择门派：" prop="school">
                        <el-radio-group v-model="ruleForm.school">
                            <el-radio-button label="荒火" name="school"></el-radio-button>
                            <el-radio-button label="天机" name="school"></el-radio-button>
                            <el-radio-button label="翎羽" name="school"></el-radio-button>
                            <el-radio-button label="魍魉" name="school"></el-radio-button>
                            <el-radio-button label="太虚" name="school"></el-radio-button>
                            <el-radio-button label="云麓" name="school"></el-radio-button>
                            <el-radio-button label="冰心" name="school"></el-radio-button>
                            <el-radio-button label="弈剑" name="school"></el-radio-button>
                            <el-radio-button label="鬼墨" name="school"></el-radio-button>
                            <el-radio-button label="龙巫" name="school"></el-radio-button>
                            <el-radio-button label="幽篁" name="school"></el-radio-button>
                        </el-radio-group>
                    </el-form-item>
                    <!-- <el-form :inline="true"> -->
                    <el-form-item label="输入等级：">
                        <el-col :span="5">
                            <el-form-item prop="level1">
                                <el-input type="number" placeholder="请输入最低等级" v-model="ruleForm.level1" min="1" max="80"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="1">-</el-col>
                        <el-col :span="5">
                            <el-form-item prop="level2">
                                <el-input type="number" placeholder="请输入最高等级" v-model="ruleForm.level2" min="1" max="80"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <!-- </el-form> -->
                    <el-form-item label="输入价格：">
                        <el-col :span="5">
                            <el-form-item prop="price1">
                                <el-input type="number" placeholder="请输入最低价格" v-model="ruleForm.price1" min="80" max="300000"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="1">-</el-col>
                        <el-col :span="5">
                            <el-form-item prop="price2">
                                <el-input type="number" placeholder="请输入最高价格" v-model="ruleForm.price2" min="80" max="300000"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <!-- <el-form-item label="选择价格：" prop="price">
                        <el-checkbox-group v-model="ruleForm.price">
                            <el-checkbox label="00080-00300" name="price"></el-checkbox>
                            <el-checkbox label="00301-00800" name="price"></el-checkbox>
                            <el-checkbox label="00801-01500" name="price"></el-checkbox>
                            <el-checkbox label="01501-03000" name="price"></el-checkbox>
                            <br>
                            <el-checkbox label="03001-06000" name="price"></el-checkbox>
                            <el-checkbox label="06001-10000" name="price"></el-checkbox>
                            <el-checkbox label="10001-15000" name="price"></el-checkbox>
                            <el-checkbox label="15001-20000" name="price"></el-checkbox>
                            <br>
                            <el-checkbox label="20001-30000" name="price"></el-checkbox>
                            <el-checkbox label="30001-45000" name="price"></el-checkbox>
                            <el-checkbox label="45001-60000" name="price"></el-checkbox>
                            <el-checkbox label="60000以上" name="price"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item> -->
                    <!-- <el-form-item label="选择时装：" prop="clothes">
                        <el-checkbox-group v-model="ruleForm.clothes">
                            <el-checkbox label="玄素天成" name="clothes"></el-checkbox>
                            <el-checkbox label="黛染青花" name="clothes"></el-checkbox>
                            <el-checkbox label="孤鸿月影" name="clothes"></el-checkbox>
                            <el-checkbox label="海棠未雨" name="clothes"></el-checkbox>
                            <el-checkbox label="夜雨江南" name="clothes"></el-checkbox>
                            <br>
                            <el-checkbox label="岸芷汀兰" name="clothes"></el-checkbox>
                            <el-checkbox label="绛云思暖" name="clothes"></el-checkbox>
                            <el-checkbox label="飞狐华裘" name="clothes"></el-checkbox>
                            <el-checkbox label="仙狐彩袂" name="clothes"></el-checkbox>
                            <el-checkbox label="天狐霓裳" name="clothes"></el-checkbox>
                            <br>
                            <el-checkbox label="沧海桑田" name="clothes"></el-checkbox>
                            <el-checkbox label="大圣金甲" name="clothes"></el-checkbox>
                            <el-checkbox label="碧海惊涛" name="clothes"></el-checkbox>
                            <el-checkbox label="蟾宫折桂" name="clothes"></el-checkbox>
                            <el-checkbox label="疏影横斜" name="clothes"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="选择特技：" prop="skill">
                        <el-checkbox-group v-model="ruleForm.skill">
                            <el-checkbox label="挥砍防护" name="skill"></el-checkbox>
                            <el-checkbox label="钝刺防护" name="skill"></el-checkbox>
                            <el-checkbox label="火元防护" name="skill"></el-checkbox>
                            <el-checkbox label="水风毒防护" name="skill"></el-checkbox>
                            <br>
                            <el-checkbox label="物理防护" name="skill"></el-checkbox>
                            <el-checkbox label="法术防护" name="skill"></el-checkbox>
                            <el-checkbox label="伤害防护" name="skill"></el-checkbox>
                            <el-checkbox label="完封" name="skill"></el-checkbox>
                            <el-checkbox label="护心" name="skill"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item> -->
                    <!-- <el-form-item label="特殊资源" prop="resource">
                        <el-radio-group v-model="ruleForm.resource">
                            <el-radio label="线上品牌商赞助"></el-radio>
                            <el-radio label="线下场地免费"></el-radio>
                        </el-radio-group>
                    </el-form-item> -->
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">搜索</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
                </div>
            </el-collapse-item>
        </el-collapse>
        <role-list></role-list>
    </div>
</template>
<script>
import roleList from './roleList.vue';
import bus from '../eventBus.js';
export default {
    data() {
        var checkLevel = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('请输入等级'));
            }
            setTimeout(() => {
                var tmp = (value.toString()).indexOf(".");
                if (value < 1 || value > 80 || tmp > -1) {
                    callback(new Error('请输入1-80之间的正整数'));
                } else {
                    callback();
                }
            }, 300);
        };
        var checkPrice = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('请输入价格'));
            }
            setTimeout(() => {
                var tmp = (value.toString()).indexOf(".");
                if (value < 80 || value > 300000 || tmp > -1) {
                    callback(new Error('请输入80-300000之间的正整数'));
                } else {
                    callback();
                }
            }, 300);
        };
        return {
            activeNames: ['1'],
            ruleForm: {
                // delivery: false,
                school: '荒火',
                // clothes: [],
                // skill: [],
                price1: '',
                price2: '',
                level1: '',
                level2: '',
                // resource: ''
            },
            rules: {
                school: [{
                    // type: 'array',
                    required: false,
                    message: '请至少选择一个门派',
                    trigger: 'change'
                }],
                // clothes: [{
                //     type: 'array',
                //     required: false,
                //     trigger: 'change'
                // }],
                // skill: [{
                //     type: 'array',
                //     required: false,
                //     trigger: 'change'
                // }],
                level1: [{
                    type: 'number',
                    required: true,
                    validator: checkLevel,
                    // message: '请输入最低等级',
                    trigger: 'blur'
                }],
                level2: [{
                    type: 'number',
                    required: true,
                    validator: checkLevel,
                    // message: '请输入最高等级',
                    trigger: 'blur'
                }],
                price1: [{
                    type: 'number',
                    required: true,
                    validator: checkPrice,
                    // message: '请输入最低价格',
                    trigger: 'blur'
                }],
                price2: [{
                    type: 'number',
                    required: true,
                    validator: checkPrice,
                    // message: '请输入最高价格',
                    trigger: 'blur'
                }]
                // price: [{
                //     type: 'array',
                //     required: true,
                //     message: '请至少选择一个价格范围',
                //     trigger: 'change'
                // }],
                // resource: [{
                //     required: true,
                //     message: '请选择活动资源',
                //     trigger: 'change'
                // }]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$message({
                        showClose: true,
                        message: '查询参数为：门派 ' + this.$refs[formName].model.school + '，等级 ' + this.$refs[formName].model.level1 + '-' +  this.$refs[formName].model.level2 + '，价格 ' + this.$refs[formName].model.price1 + '-' + this.$refs[formName].model.price2
                    });

                    // this.$emit('search', this.$refs[formName].model);
                    this.search(this.$refs[formName].model);
                } else {
                    this.$message({
                        showClose: true,
                        message: '参数有误，请检查后重试'
                    });
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        search(model) {
            if (model.school) {
                var schoolArray = ['荒火', '天机', '翎羽', '魍魉', '太虚', '云麓', '冰心', '弈剑', '鬼墨', '龙巫', '幽篁'];
                var params = {
                    school: schoolArray.indexOf(model.school) + 1,
                    equip_level_min: model.level1,
                    equip_level_max: model.level2,
                    price_min: model.price1 * 100,
                    price_max: model.price2 * 100
                }
                var url = "http://127.0.0.1:8081/roleList";
                if (window.location.href.indexOf("zhounan") > -1) {
                    url = "http://req.zhounan.win/roleList";
                }
                // this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
                // this.$http.get('http://req.zhounan.win/roleList', {params: {params: params}}, {
                // this.$http.get('http://182.254.222.174:8081/roleList', {params: {id:12345}}, {
                // this.$http.get('http://45.77.27.67:8081/roleList', {params: {params: params}}, {
                this.$http.get(url, {
                    params: {params: JSON.stringify(params)}
                }, {
                    headers:{},
                    emulateJSON: true
                }).then(function(response) {
                    var tmpRoles = response.data.result.data;
                    var nowTime = new Date().getTime();
                    for (var i = 0; i < tmpRoles.length; i++) {
                        if (tmpRoles[i].deadline) {
                            // 1天=24*60*60*1000=86400000ms,1小时=60*60*1000=3600000ms
                            if (tmpRoles[i].deadline - nowTime > 86400000) {
                                tmpRoles[i].lefttime = Math.floor((tmpRoles[i].deadline - nowTime) / 86400000) + "天" + Math.floor((tmpRoles[i].deadline - nowTime) % 86400000 / 3600000) + "小时";
                            } else if (tmpRoles[i].deadline - nowTime > 3600000) {
                                tmpRoles[i].lefttime = Math.floor((tmpRoles[i].deadline - nowTime) / 3600000) + "小时";
                            } else {
                                tmpRoles[i].lefttime = "不足1小时";
                            }
                        }
                    }

                    bus.$emit("updateList", tmpRoles);
                }, function(response) {
                    console.log(response);
                });
            }
        }
    },
    components: {
        roleList
    }
}
</script>

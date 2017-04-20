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
    <div class="" v-loading.fullscreen.lock="fullscreenLoading" element-loading-text="查询可能需要较长时间，请稍候">
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
                    <el-form-item label="装备评价：">
                        <el-col :span="5">
                            <el-form-item prop="equip_level_min">
                                <el-input type="number" placeholder="请输入最低装评" v-model="ruleForm.equip_level_min" min="0" max="150000"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="1">-</el-col>
                        <el-col :span="5">
                            <el-form-item prop="equip_level_max">
                                <el-input type="number" placeholder="请输入最高装评" v-model="ruleForm.equip_level_max" min="0" max="150000"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="人物修为：">
                        <el-col :span="5">
                            <el-form-item prop="xiuwei_min">
                                <el-input type="number" placeholder="请输入最低修为" v-model="ruleForm.xiuwei_min" min="0" max="80000"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="1">-</el-col>
                        <el-col :span="5">
                            <el-form-item prop="xiuwei_max">
                                <el-input type="number" placeholder="请输入最高修为" v-model="ruleForm.xiuwei_max" min="0" max="80000"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="装备加护：">
                        <el-col :span="5">
                            <el-form-item prop="equip_jia_hu_min">
                                <el-input type="number" placeholder="请输入最低加护" v-model="ruleForm.equip_jia_hu_min" min="0" max="324"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="1">-</el-col>
                        <el-col :span="5">
                            <el-form-item prop="equip_jia_hu_max">
                                <el-input type="number" placeholder="请输入最高加护" v-model="ruleForm.equip_jia_hu_max" min="0" max="324"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="装备炼护：">
                        <el-col :span="5">
                            <el-form-item prop="equip_lian_hu_min">
                                <el-input type="number" placeholder="请输入最低炼护" v-model="ruleForm.equip_lian_hu_min" min="0" max="80000"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="1">-</el-col>
                        <el-col :span="5">
                            <el-form-item prop="equip_lian_hu_max">
                                <el-input type="number" placeholder="请输入最高炼护" v-model="ruleForm.equip_lian_hu_max" min="0" max="80000"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="基础属性：">
                        <el-col :span="4">
                            <el-input v-model="ruleForm.mhp" type="number">
                                <template slot="prepend">生命≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.attr_basic_li" type="number">
                                <template slot="prepend">力≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.attr_basic_ti" type="number">
                                <template slot="prepend">体≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.attr_basic_min" type="number">
                                <template slot="prepend">敏≥ </template>
                            </el-input>
                        </el-col>
                        <br>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.msp" type="number">
                                <template slot="prepend">技力≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.attr_basic_ji" type="number">
                                <template slot="prepend">疾≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.attr_basic_hun" type="number">
                                <template slot="prepend">魂≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.attr_basic_nian" type="number">
                                <template slot="prepend">念≥ </template>
                            </el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="攻击属性：">
                        <el-col :span="4">
                            <el-input v-model="ruleForm.critical" type="number">
                                <template slot="prepend">会心≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.attadd" type="number">
                                <template slot="prepend">附伤≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.pattack_min" type="number">
                                <template slot="prepend">最小物攻≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.pattack_max" type="number">
                                <template slot="prepend">最大物攻≥ </template>
                            </el-input>
                        </el-col>
                        <br>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.hit" type="number">
                                <template slot="prepend">命中≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.modadd" type="number">
                                <template slot="prepend">重击≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.mattack_min" type="number">
                                <template slot="prepend">最小法攻≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.mattack_max" type="number">
                                <template slot="prepend">最大法攻≥ </template>
                            </el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="防御属性：">
                        <el-col :span="4">
                            <el-input v-model="ruleForm.pdef" type="number">
                                <template slot="prepend">防御≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.avoid" type="number">
                                <template slot="prepend">回避≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.mdef" type="number">
                                <template slot="prepend">法防≥ </template>
                            </el-input>
                        </el-col>
                        <br>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.inprotect" type="number">
                                <template slot="prepend">神明≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.attdef" type="number">
                                <template slot="prepend">化解≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.defhuman" type="number">
                                <template slot="prepend">知彼≥ </template>
                            </el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="高级属性：">
                        <el-col :span="4">
                            <el-input v-model="ruleForm.movespeed" type="number">
                                <template slot="prepend">追电≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.attackspeed" type="number">
                                <template slot="prepend">骤雨≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.castspeed" type="number">
                                <template slot="prepend">疾语≥ </template>
                            </el-input>
                        </el-col>
                        <br>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.spreduce" type="number">
                                <template slot="prepend">明思≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.inbreak" type="number">
                                <template slot="prepend">扰心≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.attackhuman" type="number">
                                <template slot="prepend">人祸≥ </template>
                            </el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="抗性属性：">
                        <el-col :span="4">
                            <el-input v-model="ruleForm.sract" type="number">
                                <template slot="prepend">身法≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.srbody" type="number">
                                <template slot="prepend">坚韧≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.srmind" type="number">
                                <template slot="prepend">定力≥ </template>
                            </el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="特殊属性：">
                        <el-col :span="4">
                            <el-input v-model="ruleForm.cri_add_p" type="number">
                                <template slot="prepend">诛心≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.thump_add_p" type="number">
                                <template slot="prepend">万钧≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.absolutely_attack" type="number">
                                <template slot="prepend">破阵≥ </template>
                            </el-input>
                        </el-col>
                        <br>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.cri_sub_p" type="number">
                                <template slot="prepend">御心≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.thump_sub_p" type="number">
                                <template slot="prepend">铁壁≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input v-model="ruleForm.absolutely_defence" type="number">
                                <template slot="prepend">磐石≥ </template>
                            </el-input>
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
            if (value) {
                setTimeout(() => {
                    var tmp = (value.toString()).indexOf(".");
                    if (value < 1 || value > 80 || tmp > -1) {
                        callback(new Error('请输入1-80之间的正整数'));
                    } else {
                        callback();
                    }
                }, 200);
            }
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
            }, 200);
        };
        var checkEquipLevel = (rule, value, callback) => {
            if (value) {
                setTimeout(() => {
                    var tmp = (value.toString()).indexOf(".");
                    if (value < 0 || value > 150000 || tmp > -1) {
                        callback(new Error('请输入0-150000之间的正整数'));
                    } else {
                        callback();
                    }
                }, 200);
            }
        };
        var checkXiuwei = (rule, value, callback) => {
            if (value) {
                setTimeout(() => {
                    var tmp = (value.toString()).indexOf(".");
                    if (value < 0 || value > 80000 || tmp > -1) {
                        callback(new Error('请输入0-80000之间的正整数'));
                    } else {
                        callback();
                    }
                }, 200);
            }
        };
        return {
            fullscreenLoading: false,
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
                equip_level_min: '',
                equip_level_max: '',
                xiuwei_min: '',
                xiuwei_max: '',
                equip_jia_hu_min: '',
                equip_jia_hu_max: '',
                equip_lian_hu_min: '',
                equip_lian_hu_max: '',
                mhp: "",
                attr_basic_li: "",
                attr_basic_ti: "",
                attr_basic_min: "",
                msp: "",
                attr_basic_ji: "",
                attr_basic_hun: "",
                attr_basic_nian: "",
                critical: "",
                attadd: "",
                pattack_min: "",
                pattack_max: "",
                hit: "",
                modadd: "",
                mattack_min: "",
                mattack_max: "",
                pdef: "",
                avoid: "",
                mdef: "",
                inprotect: "",
                attdef: "",
                defhuman: "",
                movespeed: "",
                attackspeed: "",
                castspeed: "",
                spreduce: "",
                inbreak: "",
                attackhuman: "",
                sract: "",
                srbody: "",
                srmind: "",
                cri_add_p: "",
                thump_add_p: "",
                absolutely_attack: "",
                cri_sub_p: "",
                thump_sub_p: "",
                absolutely_defence: "",
                // resource: ''juexing_level, guizong_level
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
                    required: false,
                    validator: checkLevel,
                    trigger: 'blur'
                }],
                level2: [{
                    type: 'number',
                    required: false,
                    validator: checkLevel,
                    trigger: 'blur'
                }],
                price1: [{
                    type: 'number',
                    required: true,
                    validator: checkPrice,
                    trigger: 'blur'
                }],
                price2: [{
                    type: 'number',
                    required: true,
                    validator: checkPrice,
                    trigger: 'blur'
                }],
                equip_level_min: [{
                    type: 'number',
                    required: false,
                    validator: checkEquipLevel,
                    trigger: 'blur'
                }],
                equip_level_max: [{
                    type: 'number',
                    required: false,
                    validator: checkEquipLevel,
                    trigger: 'blur'
                }],
                xiuwei_min: [{
                    type: 'number',
                    required: false,
                    validator: checkXiuwei,
                    trigger: 'blur'
                }],
                xiuwei_max: [{
                    type: 'number',
                    required: false,
                    validator: checkXiuwei,
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
                    // this.$message({
                    //     showClose: true,
                    //     message: '查询参数为：门派 ' + this.$refs[formName].model.school + '，等级 ' + this.$refs[formName].model.level1 + '-' +  this.$refs[formName].model.level2 + '，价格 ' + this.$refs[formName].model.price1 + '-' + this.$refs[formName].model.price2
                    // });

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
                var _this = this;
                var schoolArray = ['荒火', '天机', '翎羽', '魍魉', '太虚', '云麓', '冰心', '弈剑', '鬼墨', '龙巫', '幽篁'];
                var params = {
                    school: schoolArray.indexOf(model.school) + 1,
                    equip_level_min: model.level1,
                    equip_level_max: model.level2,
                    price_min: model.price1 * 100,
                    price_max: model.price2 * 100,
                    equip_level_min: model.equip_level_min,
                    equip_level_max: model.equip_level_max,
                    xiuwei_min: model.xiuwei_min,
                    xiuwei_max: model.xiuwei_max,
                    equip_jia_hu_min: model.equip_jia_hu_min,
                    equip_jia_hu_max: model.equip_jia_hu_max,
                    equip_lian_hu_min: model.equip_lian_hu_min,
                    equip_lian_hu_max: model.equip_lian_hu_max,
                    mhp: model.mhp,
                    attr_basic_li: model.attr_basic_li,
                    attr_basic_ti: model.attr_basic_ti,
                    attr_basic_min: model.attr_basic_min,
                    msp: model.msp,
                    attr_basic_ji: model.attr_basic_ji,
                    attr_basic_hun: model.attr_basic_hun,
                    attr_basic_nian: model.attr_basic_nian,
                    critical: model.critical,
                    attadd: model.attadd,
                    pattack_min: model.pattack_min,
                    pattack_max: model.pattack_max,
                    hit: model.hit,
                    modadd: model.modadd,
                    mattack_min: model.mattack_min,
                    mattack_max: model.mattack_max,
                    pdef: model.pdef,
                    avoid: model.avoid,
                    mdef: model.mdef,
                    inprotect: model.inprotect,
                    attdef: model.attdef,
                    defhuman: model.defhuman,
                    movespeed: model.movespeed,
                    attackspeed: model.attackspeed,
                    castspeed: model.castspeed,
                    spreduce: model.spreduce,
                    inbreak: model.inbreak,
                    attackhuman: model.attackhuman,
                    sract: model.sract,
                    srbody: model.srbody,
                    srmind: model.srmind,
                    cri_add_p: model.cri_add_p,
                    thump_add_p: model.thump_add_p,
                    absolutely_attack: model.absolutely_attack,
                    cri_sub_p: model.cri_sub_p,
                    thump_sub_p: model.thump_sub_p,
                    absolutely_defence: model.absolutely_defence
                }
                var url = "http://127.0.0.1:8081/roleList";
                if (window.location.href.indexOf("zhounan") > -1) {
                    url = "http://req.zhounan.win/roleList";
                }
                if (window.location.href.indexOf("thjiang") > -1) {
                    url = "http://req.thjiang.com/roleList";
                }

                // this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
                // this.$http.get('http://req.zhounan.win/roleList', {params: {params: params}}, {
                // this.$http.get('http://182.254.222.174:8081/roleList', {params: {id:12345}}, {
                // this.$http.get('http://45.77.27.67:8081/roleList', {params: {params: params}}, {

                this.fullscreenLoading = true;
                this.$http.get(url, {
                    params: {params: JSON.stringify(params)}
                }, {
                    headers:{},
                    emulateJSON: true
                }).then(function(response) {
                    _this.fullscreenLoading = false;

                    if (response.data.result && response.data.result.data && response.data.result.data.length === 0) {
                        this.$message({
                            showClose: true,
                            message: '没有找到符合条件的角色'
                        });
                    } else {
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
                    }
                }, function(response) {
                    console.log(response);
                    this.$message({
                        showClose: true,
                        message: response
                    });
                });
            }
        }
    },
    components: {
        roleList
    }
}
</script>

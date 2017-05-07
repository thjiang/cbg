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
            <el-collapse-item title="查询条件：（点击可切换展开/折叠）" name="1">
                <div class="search">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
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
                        <el-col :span="3">
                            <el-form-item prop="level1">
                                <el-input size="small" type="number" placeholder="最低等级" v-model="ruleForm.level1" min="1" max="80"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="1">-</el-col>
                        <el-col :span="3">
                            <el-form-item prop="level2">
                                <el-input size="small" type="number" placeholder="最高等级" v-model="ruleForm.level2" min="1" max="80"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <!-- </el-form> -->
                    <el-form-item label="输入价格：">
                        <el-col :span="3">
                            <el-form-item prop="price1">
                                <el-input size="small" type="number" placeholder="最低价格" v-model="ruleForm.price1" min="80" max="300000"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="1">-</el-col>
                        <el-col :span="3">
                            <el-form-item prop="price2">
                                <el-input size="small" type="number" placeholder="最高价格" v-model="ruleForm.price2" min="80" max="300000"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="装备加护：">
                        <el-col :span="3">
                            <el-form-item prop="equip_jia_hu_min">
                                <el-input size="small" type="number" placeholder="最低加护" v-model="ruleForm.equip_jia_hu_min" min="0" max="360"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="1">-</el-col>
                        <el-col :span="3">
                            <el-form-item prop="equip_jia_hu_max">
                                <el-input size="small" type="number" placeholder="最高加护" v-model="ruleForm.equip_jia_hu_max" min="0" max="360"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="攻击属性：">
                        <el-col :span="4">
                            <el-input size="small" v-model="ruleForm.critical" type="number">
                                <template slot="prepend">会心≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input size="small" v-model="ruleForm.attadd" type="number">
                                <template slot="prepend">附伤≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input size="small" v-model="ruleForm.pattack_min" type="number">
                                <template slot="prepend">最小物攻≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input size="small" v-model="ruleForm.pattack_max" type="number">
                                <template slot="prepend">最大物攻≥ </template>
                            </el-input>
                        </el-col>
                        <br>
                        <el-col :span="4">
                            <el-input size="small" v-model="ruleForm.hit" type="number">
                                <template slot="prepend">命中≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input size="small" v-model="ruleForm.modadd" type="number">
                                <template slot="prepend">重击≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input size="small" v-model="ruleForm.mattack_min" type="number">
                                <template slot="prepend">最小法攻≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input size="small" v-model="ruleForm.mattack_max" type="number">
                                <template slot="prepend">最大法攻≥ </template>
                            </el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="防御属性：">
                        <el-col :span="4">
                            <el-input size="small" v-model="ruleForm.pdef" type="number">
                                <template slot="prepend">防御≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input size="small" v-model="ruleForm.avoid" type="number">
                                <template slot="prepend">回避≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input size="small" v-model="ruleForm.mdef" type="number">
                                <template slot="prepend">法防≥ </template>
                            </el-input>
                        </el-col>
                        <br>
                        <el-col :span="4">
                            <el-input size="small" v-model="ruleForm.inprotect" type="number">
                                <template slot="prepend">神明≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input size="small" v-model="ruleForm.attdef" type="number">
                                <template slot="prepend">化解≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input size="small" v-model="ruleForm.defhuman" type="number">
                                <template slot="prepend">知彼≥ </template>
                            </el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="高级属性：">
                        <el-col :span="4">
                            <el-input size="small" v-model="ruleForm.movespeed" type="number">
                                <template slot="prepend">追电≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input size="small" v-model="ruleForm.attackspeed" type="number">
                                <template slot="prepend">骤雨≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input size="small" v-model="ruleForm.castspeed" type="number">
                                <template slot="prepend">疾语≥ </template>
                            </el-input>
                        </el-col>
                        <br>
                        <el-col :span="4">
                            <el-input size="small" v-model="ruleForm.spreduce" type="number">
                                <template slot="prepend">明思≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input size="small" v-model="ruleForm.inbreak" type="number">
                                <template slot="prepend">扰心≥ </template>
                            </el-input>
                        </el-col>
                        <el-col class="line" :span="1">&nbsp;</el-col>
                        <el-col :span="4">
                            <el-input size="small" v-model="ruleForm.attackhuman" type="number">
                                <template slot="prepend">人祸≥ </template>
                            </el-input>
                        </el-col>
                    </el-form-item>
                    <el-collapse class="search-collapse" v-model="activeNames2">
                        <el-collapse-item title="高级查询条件：（点击可切换展开/折叠）" name="1">
                            <el-form-item label="装备评价：">
                                <el-col :span="5">
                                    <el-form-item prop="equip_xiuwei_min">
                                        <el-input size="small" type="number" placeholder="请输入最低装评" v-model="ruleForm.equip_xiuwei_min" min="0" max="150000"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col class="line" :span="1">-</el-col>
                                <el-col :span="5">
                                    <el-form-item prop="equip_level_max">
                                        <el-input size="small" type="number" placeholder="请输入最高装评" v-model="ruleForm.equip_level_max" min="0" max="150000"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-form-item>
                            <el-form-item label="人物修为：">
                                <el-col :span="5">
                                    <el-form-item prop="xiuwei_min">
                                        <el-input size="small" type="number" placeholder="请输入最低修为" v-model="ruleForm.xiuwei_min" min="0" max="80000"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col class="line" :span="1">-</el-col>
                                <el-col :span="5">
                                    <el-form-item prop="xiuwei_max">
                                        <el-input size="small" type="number" placeholder="请输入最高修为" v-model="ruleForm.xiuwei_max" min="0" max="80000"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-form-item>
                            <el-form-item label="装备炼护：">
                                <el-col :span="5">
                                    <el-form-item prop="equip_lian_hu_min">
                                        <el-input size="small" type="number" placeholder="请输入最低炼护" v-model="ruleForm.equip_lian_hu_min" min="0" max="80000"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col class="line" :span="1">-</el-col>
                                <el-col :span="5">
                                    <el-form-item prop="equip_lian_hu_max">
                                        <el-input size="small" type="number" placeholder="请输入最高炼护" v-model="ruleForm.equip_lian_hu_max" min="0" max="80000"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-form-item>
                            <el-form-item label="基础属性：">
                                <el-col :span="4">
                                    <el-input size="small" v-model="ruleForm.mhp" type="number">
                                        <template slot="prepend">生命≥ </template>
                                    </el-input>
                                </el-col>
                                <el-col class="line" :span="1">&nbsp;</el-col>
                                <el-col :span="4">
                                    <el-input size="small" v-model="ruleForm.attr_basic_li" type="number">
                                        <template slot="prepend">力≥ </template>
                                    </el-input>
                                </el-col>
                                <el-col class="line" :span="1">&nbsp;</el-col>
                                <el-col :span="4">
                                    <el-input size="small" v-model="ruleForm.attr_basic_ti" type="number">
                                        <template slot="prepend">体≥ </template>
                                    </el-input>
                                </el-col>
                                <el-col class="line" :span="1">&nbsp;</el-col>
                                <el-col :span="4">
                                    <el-input size="small" v-model="ruleForm.attr_basic_min" type="number">
                                        <template slot="prepend">敏≥ </template>
                                    </el-input>
                                </el-col>
                                <br>
                                <el-col :span="4">
                                    <el-input size="small" v-model="ruleForm.msp" type="number">
                                        <template slot="prepend">技力≥ </template>
                                    </el-input>
                                </el-col>
                                <el-col class="line" :span="1">&nbsp;</el-col>
                                <el-col :span="4">
                                    <el-input size="small" v-model="ruleForm.attr_basic_ji" type="number">
                                        <template slot="prepend">疾≥ </template>
                                    </el-input>
                                </el-col>
                                <el-col class="line" :span="1">&nbsp;</el-col>
                                <el-col :span="4">
                                    <el-input size="small" v-model="ruleForm.attr_basic_hun" type="number">
                                        <template slot="prepend">魂≥ </template>
                                    </el-input>
                                </el-col>
                                <el-col class="line" :span="1">&nbsp;</el-col>
                                <el-col :span="4">
                                    <el-input size="small" v-model="ruleForm.attr_basic_nian" type="number">
                                        <template slot="prepend">念≥ </template>
                                    </el-input>
                                </el-col>
                            </el-form-item>
                            <el-form-item label="特殊属性：">
                                <el-col :span="4">
                                    <el-input size="small" v-model="ruleForm.cri_add_p" type="number">
                                        <template slot="prepend">诛心≥ </template>
                                    </el-input>
                                </el-col>
                                <el-col class="line" :span="1">&nbsp;</el-col>
                                <el-col :span="4">
                                    <el-input size="small" v-model="ruleForm.thump_add_p" type="number">
                                        <template slot="prepend">万钧≥ </template>
                                    </el-input>
                                </el-col>
                                <el-col class="line" :span="1">&nbsp;</el-col>
                                <el-col :span="4">
                                    <el-input size="small" v-model="ruleForm.absolutely_attack" type="number">
                                        <template slot="prepend">破阵≥ </template>
                                    </el-input>
                                </el-col>
                                <br>
                                <el-col :span="4">
                                    <el-input size="small" v-model="ruleForm.cri_sub_p" type="number">
                                        <template slot="prepend">御心≥ </template>
                                    </el-input>
                                </el-col>
                                <el-col class="line" :span="1">&nbsp;</el-col>
                                <el-col :span="4">
                                    <el-input size="small" v-model="ruleForm.thump_sub_p" type="number">
                                        <template slot="prepend">铁壁≥ </template>
                                    </el-input>
                                </el-col>
                                <el-col class="line" :span="1">&nbsp;</el-col>
                                <el-col :span="4">
                                    <el-input size="small" v-model="ruleForm.absolutely_defence" type="number">
                                        <template slot="prepend">磐石≥ </template>
                                    </el-input>
                                </el-col>
                            </el-form-item>
                            <el-form-item label="抗性属性：">
                                <el-col :span="4">
                                    <el-input size="small" v-model="ruleForm.sract" type="number">
                                        <template slot="prepend">身法≥ </template>
                                    </el-input>
                                </el-col>
                                <el-col class="line" :span="1">&nbsp;</el-col>
                                <el-col :span="4">
                                    <el-input size="small" v-model="ruleForm.srbody" type="number">
                                        <template slot="prepend">坚韧≥ </template>
                                    </el-input>
                                </el-col>
                                <el-col class="line" :span="1">&nbsp;</el-col>
                                <el-col :span="4">
                                    <el-input size="small" v-model="ruleForm.srmind" type="number">
                                        <template slot="prepend">定力≥ </template>
                                    </el-input>
                                </el-col>
                            </el-form-item>
                            <el-form-item label="选择时装：" prop="clothes">
                                <el-checkbox-group v-model="ruleForm.clothes">

                                    <!-- 玄素天成 21121,21122,21123,21124,21326,21327,88326,88327
                                    黛染青花 21189,21190,21202,21203,121533,121534,121572,121573
                                    海棠未雨 121705,121706,210037,210038,210039,210040,210073,210074
                                    孤鸿月影 21293,21294,21323,21324,121576,121577
                                    祈福同心 21059
                                    岸芷汀兰 21335,21336,121529,121530
                                    蟾宫折桂 21487,21488,121515,121516,121580,121581
                                    绛云思暖 21339,21340,121531,121532
                                    沧海桑田 210000,210001,210002,210003,210004,210005
                                    疏影横斜 121745,121746,121747,121748,121749,121750,121751,121752
                                    天狐霓裳 210148,210149,210210,210211
                                    仙狐彩袂 210144,210145,210206,210207 -->
                                    <el-checkbox label="玄素天成" name="clothes"></el-checkbox>
                                    <el-checkbox label="黛染青花" name="clothes"></el-checkbox>
                                    <el-checkbox label="海棠未雨" name="clothes"></el-checkbox>
                                    <el-checkbox label="孤鸿月影" name="clothes"></el-checkbox>
                                    <br>
                                    <el-checkbox label="祈福同心" name="clothes"></el-checkbox>
                                    <el-checkbox label="岸芷汀兰" name="clothes"></el-checkbox>
                                    <el-checkbox label="蟾宫折桂" name="clothes"></el-checkbox>
                                    <el-checkbox label="绛云思暖" name="clothes"></el-checkbox>
                                    <br>
                                    <el-checkbox label="沧海桑田" name="clothes"></el-checkbox>
                                    <el-checkbox label="疏影横斜" name="clothes"></el-checkbox>
                                    <el-checkbox label="天狐霓裳" name="clothes"></el-checkbox>
                                    <el-checkbox label="仙狐彩袂" name="clothes"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                        </el-collapse-item>
                    </el-collapse>


                    <!-- <el-form-item label="选择特技：" prop="skill">
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
        return {
            fullscreenLoading: false,
            activeNames: ['1'],
            activeNames2: ['0'],
            ruleForm: {
                school: '荒火',
                clothes: [],
                // skill: [],
                price1: '',
                price2: '',
                level1: '',
                level2: '',
                equip_xiuwei_min: '',
                equip_xiuwei_max: '',
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
                }]
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
                    equip_xiuwei_min: model.equip_xiuwei_min,
                    equip_xiuwei_max: model.equip_xiuwei_max,
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

                var special_clothes = "";
                // 玄素天成 21121,21122,21123,21124,21326,21327,88326,88327
                // 黛染青花 21189,21190,21202,21203,121533,121534,121572,121573
                // 海棠未雨 121705,121706,210037,210038,210039,210040,210073,210074
                // 孤鸿月影 21293,21294,21323,21324,121576,121577
                // 祈福同心 21059
                // 岸芷汀兰 21335,21336,121529,121530
                // 蟾宫折桂 21487,21488,121515,121516,121580,121581
                // 绛云思暖 21339,21340,121531,121532
                // 沧海桑田 210000,210001,210002,210003,210004,210005
                // 疏影横斜 121745,121746,121747,121748,121749,121750,121751,121752
                // 天狐霓裳 210148,210149,210210,210211
                // 仙狐彩袂 210144,210145,210206,210207
                // var clothesArray = ['玄素天成', '黛染青花', '海棠未雨', '孤鸿月影', '祈福同心',
                // '岸芷汀兰', '蟾宫折桂', '绛云思暖', '沧海桑田', '疏影横斜', '天狐霓裳', '仙狐彩袂'];
                // for (var i = 0; i < this.clothes.length; i++) {
                //     if (this.clothes.length == 1) {
                //         special_clothes = ""
                //     }
                //     // for (var j = 0; j < clothesArray.length; j++) {
                //     //     if (this.clothes[i] == clothesArray[j]) {
                //     //
                //     //     }
                //     // }
                // }

                var url = "http://127.0.0.1:8081/roleList";
                if (window.location.href.indexOf("zhounan") > -1) {
                    url = "//req.zhounan.win/roleList";
                } else if (window.location.href.indexOf("thjiang") > -1) {
                    url = "//req.thjiang.com/roleList";
                } else if (window.location.href.indexOf("106.14.179.201") > -1) { // 临时 域名解析要备案
                    url = "//106.14.179.201:8081/roleList";
                }

                // this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
                // this.$http.get('//req.zhounan.win/roleList', {params: {params: params}}, {
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

                    if (response.data.result && response.data.result.data && response.data.result.data.msg && response.data.result.data.msg.length === 0) {
                        _this.$message({
                            showClose: true,
                            message: '没有找到符合条件的角色'
                        });
                    } else {
                        var tmpRoles = response.data.result.data.msg;

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

                        var list = {
                            roles: tmpRoles,
                            paging: response.data.result.data.paging
                        }

                        bus.$emit("updateList", list);

                        _this.activeNames = ['0'];
                        _this.activeNames2 = ['1'];
                    }
                }, function(response) {
                    console.log(response);
                    _this.$message({
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

<style lang="less">
    .search-collapse {
        margin: 20px 0;
    }

    .search {
        margin-top: 20px;
        .line {
            text-align: center;
        }
    }

    .el-collapse-item__header {
        color: #0087ff;
        font-size: 14px;
    }

    .fly {
        margin-left: -8px;
        .fly-select {
            display: inline-block;
            width: 85px;
        }
    }
</style>
<template>
<div v-loading.fullscreen.lock="fullscreenLoading" element-loading-text="查询可能需要较长时间，请稍候">
    <el-collapse class="search-collapse" v-model="activeNames">
        <el-collapse-item title="查询条件：（点击可切换展开/折叠）" name="1">
            <div class="search">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <!-- <el-form-item label="选择门派：" prop="school"> -->
                    <el-form-item label="选择门派：">
                        <el-radio-group v-model="ruleForm.school">
                            <el-radio-button label="荒火"></el-radio-button>
                            <el-radio-button label="天机"></el-radio-button>
                            <el-radio-button label="翎羽"></el-radio-button>
                            <el-radio-button label="魍魉"></el-radio-button>
                            <el-radio-button label="太虚"></el-radio-button>
                            <el-radio-button label="云麓"></el-radio-button>
                            <el-radio-button label="冰心"></el-radio-button>
                            <el-radio-button label="弈剑"></el-radio-button>
                            <el-radio-button label="鬼墨"></el-radio-button>
                            <el-radio-button label="龙巫"></el-radio-button>
                            <el-radio-button label="幽篁"></el-radio-button>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="等级范围：">
                        <el-col :span="3">
                            <el-form-item prop="level1">
                                <el-input size="small" type="number" v-model="ruleForm.level1" min="1" max="80"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="1">-</el-col>
                        <el-col :span="3">
                            <el-form-item prop="level2">
                                <el-input size="small" type="number" v-model="ruleForm.level2" min="1" max="80"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="1">&nbsp;</el-col>
                        <el-col class="fly" :span="9">
                            神启境界 ≥
                            <el-select v-model="flyValue11" @change="flyValue1Change" class="fly-select" size="small">
                                <el-option v-for="item in flyOptions" :key="item.value" :value="item.value"></el-option>
                            </el-select>
                            <el-select v-model="flyValue22" @change="flyValue2Change" class="fly-select" size="small">
                                <el-option v-for="item in flyOptions2" :key="item.value" :value="item.value"></el-option>
                            </el-select>
                            <el-select v-model="flyValue33" @change="flyValue3Change" class="fly-select" size="small">
                                <el-option v-for="item in flyOptions3" :key="item.value" :value="item.value"></el-option>
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="价格范围：">
                        <el-col :span="3">
                            <el-form-item prop="price1">
                                <el-input size="small" type="number" v-model="ruleForm.price1" min="80" max="300000"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="1">-</el-col>
                        <el-col :span="3">
                            <el-form-item prop="price2">
                                <el-input size="small" type="number" v-model="ruleForm.price2" min="80" max="300000"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="加护范围：">
                        <el-col :span="3">
                            <el-form-item prop="equip_jia_hu_min">
                                <el-input size="small" type="number" v-model="ruleForm.equip_jia_hu_min" min="0" max="360"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="1">-</el-col>
                        <el-col :span="3">
                            <el-form-item prop="equip_jia_hu_max">
                                <el-input size="small" type="number" v-model="ruleForm.equip_jia_hu_max" min="0" max="360"></el-input>
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
                            <el-form-item label="特殊等级：">
                                <el-col :span="4">
                                    <el-input size="small" v-model="ruleForm.juexing_level" type="number">
                                        <template slot="prepend">觉醒≥ </template>
                                    </el-input>
                                </el-col>
                                <el-col class="line" :span="1">&nbsp;</el-col>
                                <el-col :span="4">
                                    <el-input size="small" v-model="ruleForm.guizong_level" type="number">
                                        <template slot="prepend">归宗≥ </template>
                                    </el-input>
                                </el-col>
                                <el-col class="line" :span="1">&nbsp;</el-col>
                                <el-col :span="4">
                                    <el-input size="small" v-model="ruleForm.yinghun_level" type="number">
                                        <template slot="prepend">英魂≥ </template>
                                    </el-input>
                                </el-col>
                                <el-col class="line" :span="1">&nbsp;</el-col>
                                <el-col :span="4">
                                    <el-input size="small" v-model="ruleForm.child_level" type="number">
                                        <template slot="prepend">孩子≥ </template>
                                    </el-input>
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
                                <el-checkbox-group v-model="clothes">
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

                            <!-- <el-form-item label="元 魂 珠：" prop="pearls">
                                <el-checkbox-group v-model="pearls">
                                    <el-checkbox label="喜气洋羊" name="pearls"></el-checkbox>
                                    <el-checkbox label="昴日星官" name="pearls"></el-checkbox>
                                    <el-checkbox label="万圣天尊" name="pearls"></el-checkbox>
                                    <el-checkbox label="八杀骑劫" name="pearls"></el-checkbox>
                                    <el-checkbox label="马王爷" name="pearls"></el-checkbox>
                                    <el-checkbox label="业火" name="pearls"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item> -->
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
                juexing_level: "",
                guizong_level: "",
                child_level: "",
                yinghun_level: ""
            },
            rules: {
                school: [{
                    type: 'string',
                    required: false,
                    message: '请至少选择一个门派',
                    trigger: 'change'
                }]
            },
            flyOptions: [{
                value: '天魂'
            }, {
                value: '地魂'
            }],
            flyOptions2: [],
            flyOptions3: [{
                value: '不限'
            }, {
                value: '壹境界'
            }, {
                value: '贰境界'
            }, {
                value: '叁境界'
            }, {
                value: '肆境界'
            }, {
                value: '伍境界'
            }, {
                value: '陆境界'
            }, {
                value: '柒境界'
            }, {
                value: '捌境界'
            }, {
                value: '玖境界'
            }],
            flyValue1: "",
            flyValue2: "",
            flyValue3: "",
            flyValue11: "",
            flyValue22: "",
            flyValue33: "",
            queryStr: "",
            clothes: [],
            pearls: [],
            // skill: []
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.search(this.$refs[formName].model);
                } else {
                    this.$message({
                        showClose: true,
                        message: '参数有误，请检查后重试',
                        type: 'error'
                    });
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        flyValue1Change(value) {
            if (value == "天魂") {
                this.flyValue1 = 2;
                this.flyOptions2 = [{
                    value: '不限'
                }, {
                    value: '壹天'
                }, {
                    value: '贰天'
                }, {
                    value: '叁天'
                }, {
                    value: '肆天'
                }, {
                    value: '伍天'
                }, {
                    value: '陆天'
                }]
            } else {
                this.flyValue1 = 1;
                this.flyOptions2 = [{
                    value: '不限'
                }, {
                    value: '壹天'
                }, {
                    value: '贰天'
                }, {
                    value: '叁天'
                }, {
                    value: '肆天'
                }]
            }
        },
        flyValue2Change(value) {
            switch (value) {
                case '壹天':
                    this.flyValue2 = 1;
                    break;
                case '贰天':
                    this.flyValue2 = 2;
                    break;
                case '叁天':
                    this.flyValue2 = 3;
                    break;
                case '肆天':
                    this.flyValue2 = 4;
                    break;
                case '伍天':
                    this.flyValue2 = 5;
                    break;
                case '陆天':
                    this.flyValue2 = 6;
                    break;
                default:
                    this.flyValue2 = 0;
            }
        },
        flyValue3Change(value) {
            switch (value) {
                case '壹境界':
                    this.flyValue3 = 1;
                    break;
                case '贰境界':
                    this.flyValue3 = 2;
                    break;
                case '叁境界':
                    this.flyValue3 = 3;
                    break;
                case '肆境界':
                    this.flyValue3 = 4;
                    break;
                case '伍境界':
                    this.flyValue3 = 5;
                    break;
                case '陆境界':
                    this.flyValue3 = 6;
                    break;
                case '柒境界':
                    this.flyValue3 = 7;
                    break;
                case '捌境界':
                    this.flyValue3 = 8;
                    break;
                case '玖境界':
                    this.flyValue3 = 9;
                    break;
                default:
                    this.flyValue3 = 0;
            }
        },
        search(model, page) {
            if (model.school) {
                var schoolArray = ['荒火', '天机', '翎羽', '魍魉', '太虚', '云麓', '冰心', '弈剑', '鬼墨', '龙巫', '幽篁'];
                model.school = schoolArray.indexOf(model.school) + 1;
                model.price_min = model.price1 * 100;
                model.price_max = model.price2 * 100;

                delete model.price1;
                delete model.price2;

                model.equip_level_min = model.level1;
                model.equip_level_max = model.level2;

                delete model.level1;
                delete model.level2;

                if (this.flyValue1) {
                    model.fly_level = ((this.flyValue1 + "") + (this.flyValue2 + "") + (this.flyValue3 + "")) * 1;
                }

                var x;
                for (x in model) {
                    if (model[x]) {
                        this.queryStr += x + "=" + model[x] + "&";
                    }
                }

                if (this.clothes.length > 0) {
                    var clothesStr = '';
                    for (var i = 0; i < this.clothes.length; i++) {
                        if (this.clothes[i] == '玄素天成') {
                            clothesStr = clothesStr + '21121,21122,21123,21124,21326,21327,88326,88327|';
                        }
                        if (this.clothes[i] == '黛染青花') {
                            clothesStr = clothesStr + '21189,21190,21202,21203,121533,121534,121572,121573|';
                        }
                        if (this.clothes[i] == '海棠未雨') {
                            clothesStr = clothesStr + '121705,121706,210037,210038,210039,210040,210073,210074|';
                        }
                        if (this.clothes[i] == '孤鸿月影') {
                            clothesStr = clothesStr + '21293,21294,21323,21324,121576,121577|';
                        }
                        if (this.clothes[i] == '祈福同心') {
                            clothesStr = clothesStr + '21059|';
                        }
                        if (this.clothes[i] == '岸芷汀兰') {
                            clothesStr = clothesStr + '21335,21336,121529,121530|';
                        }
                        if (this.clothes[i] == '蟾宫折桂') {
                            clothesStr = clothesStr + '21487,21488,121515,121516,121580,121581|';
                        }
                        if (this.clothes[i] == '绛云思暖') {
                            clothesStr = clothesStr + '21339,21340,121531,121532|';
                        }
                        if (this.clothes[i] == '沧海桑田') {
                            clothesStr = clothesStr + '210000,210001,210002,210003,210004,210005|';
                        }
                        if (this.clothes[i] == '疏影横斜') {
                            clothesStr = clothesStr + '121745,121746,121747,121748,121749,121750,121751,121752|';
                        }
                        if (this.clothes[i] == '天狐霓裳') {
                            clothesStr = clothesStr + '210148,210149,210210,210211|';
                        }
                        if (this.clothes[i] == '仙狐彩袂') {
                            clothesStr = clothesStr + '210144,210145,210206,210207|';
                        }
                    }
                    clothesStr = 'special_clothes_logic=and&special_clothes=' + clothesStr + "&";

                    this.queryStr = this.queryStr + clothesStr;
                }

                // if (this.pearls.length > 0) {
                //     var pearlsStr = 'pet_special_kind_logic=and&pet_special_kind=';
                //     for (var i = 0; i < this.pearls.length; i++) {
                //         if (this.pearls[i] == '喜气洋羊') {
                //             pearlsStr = pearlsStr + '喜气洋羊,';
                //         }
                //         if (this.pearls[i] == '昴日星官') {
                //             pearlsStr = pearlsStr + '昴日星官,';
                //         }
                //         if (this.pearls[i] == '万圣天尊') {
                //             pearlsStr = pearlsStr + '万圣天尊,';
                //         }
                //         if (this.pearls[i] == '八杀骑劫') {
                //             pearlsStr = pearlsStr + '八杀骑劫,';
                //         }
                //         if (this.pearls[i] == '马王爷') {
                //             pearlsStr = pearlsStr + '马王爷,';
                //         }
                //         if (this.pearls[i] == '业火') {
                //             pearlsStr = pearlsStr + '业火,';
                //         }
                //     }
                //     pearlsStr = pearlsStr.substring(0, pearlsStr.length-1);
                //     pearlsStr = pearlsStr + "&";
                //
                //     this.queryStr = this.queryStr + pearlsStr;
                // }

                this.request(this.queryStr);
            }
        },
        request(queryStr, page) {
            var _this = this;
            var param = "";
            !!page ? param = "page=" + page + "&" + queryStr : param = "page=1&" + queryStr;

            // var url = "http://127.0.0.1:8081/roleList";
            // if (window.location.href.indexOf("zhounan") > -1) {
            //     url = "//req.zhounan.win/roleList";
            // } else if (window.location.href.indexOf("thjiang") > -1) {
            //     url = "//req.thjiang.com/roleList";
            // } else if (window.location.href.indexOf("icewish") > -1) {
            //     url = "//req.icewish.top/roleList";
            // }

            var url = "//req.icewish.top/roleList";

            this.fullscreenLoading = true;
            this.$http.get(url, {
                // params: {params: JSON.stringify(model)}
                params: {
                    params: param
                }
            }, {
                headers: {},
                emulateJSON: true
            }).then(function(response) {
                _this.fullscreenLoading = false;

                _this.flyValue1 = '';
                _this.flyValue2 = '';
                _this.flyValue3 = '';
                _this.flyValue11 = '';
                _this.flyValue22 = '';
                _this.flyValue33 = '';
                _this.clothes = [];
                _this.pearls = [];

                var x;
                for (x in _this.ruleForm) {
                    if (_this.ruleForm[x]) {
                        _this.ruleForm[x] = '';
                    }
                }

                _this.ruleForm.school = '荒火';

                if (response.data.result && (response.data.result.success == false)) {
                    _this.$message({
                        showClose: true,
                        message: response.status.message
                    });
                } else if (response.data.result && response.data.result.data && response.data.result.data.msg && response.data.result.data.msg.length === 0) {
                    _this.$message({
                        showClose: true,
                        message: '没有找到符合条件的角色'
                    });
                } else if (response.data.result && response.data.result.data && response.data.result.data.msg && response.data.result.data.msg.length > 0) {
                    var tmpRoles = response.data.result.data.msg;

                    var nowTime = new Date().getTime();
                    for (var i = 0; i < tmpRoles.length; i++) {
                        if (tmpRoles[i].deadline) {
                            // 1天=24*60*60*1000=86400000ms,1小时=60*60*1000=3600000ms
                            if (tmpRoles[i].deadline - nowTime > 86400000) {
                                tmpRoles[i].lefttime = Math.floor((tmpRoles[i].deadline - nowTime) / 86400000) + "天" + Math.floor((tmpRoles[i].deadline - nowTime) % 86400000 / 3600000) + "时";
                            } else if (tmpRoles[i].deadline - nowTime > 3600000) {
                                tmpRoles[i].lefttime = Math.floor((tmpRoles[i].deadline - nowTime) / 3600000) + "小时";
                            } else {
                                tmpRoles[i].lefttime = "< 1小时";
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
                } else {
                    _this.$message({
                        showClose: true,
                        message: '获取数据失败，请联系作者'
                    });
                }
            }, function(response) {
                _this.$message({
                    showClose: true,
                    message: response
                });
            });
        }
    },
    mounted: function() {
        var _this = this;
        bus.$on("changePage", function(nextPage) {
            _this.request(_this.queryStr, nextPage);
        });
    },
    components: {
        roleList
    }
}
</script>

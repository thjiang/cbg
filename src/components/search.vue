<style lang="less">
    .line {
        text-align: center;
    }
</style>
<template>
    <div class="search">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="即时配送" prop="delivery">
            <el-switch on-text="" off-text="" v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="选择门派：" prop="school">
            <el-checkbox-group v-model="ruleForm.school">
                <el-checkbox label="荒火" name="school"></el-checkbox>
                <el-checkbox label="天机" name="school"></el-checkbox>
                <el-checkbox label="翎羽" name="school"></el-checkbox>
                <el-checkbox label="魍魉" name="school"></el-checkbox>
                <el-checkbox label="太虚" name="school"></el-checkbox>
                <el-checkbox label="云麓" name="school"></el-checkbox>
                <el-checkbox label="冰心" name="school"></el-checkbox>
                <el-checkbox label="弈剑" name="school"></el-checkbox>
                <el-checkbox label="鬼墨" name="school"></el-checkbox>
                <el-checkbox label="龙巫" name="school"></el-checkbox>
                <el-checkbox label="幽篁" name="school"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <!-- <el-form :inline="true"> -->
        <el-form-item label="输入价格：">
            <el-col :span="4">
                <el-form-item prop="price1">
                    <el-input type="input" placeholder="请输入最低价格" v-model="ruleForm.price1"></el-input>
                </el-form-item>
            </el-col>
            <el-col class="line" :span="1">-</el-col>
            <el-col :span="4">
                <el-form-item prop="price2">
                    <el-input type="input" placeholder="请输入最高价格" v-model="ruleForm.price2"></el-input>
                </el-form-item>
            </el-col>
        </el-form-item>
        <!-- </el-form> -->
        <!-- <el-form-item label="价格" prop="price">
            <el-checkbox-group v-model="ruleForm.price">
                <el-checkbox label="80-300" name="price"></el-checkbox>
                <el-checkbox label="301-800" name="price"></el-checkbox>
                <el-checkbox label="801-1500" name="price"></el-checkbox>
                <el-checkbox label="1501-3000" name="price"></el-checkbox>
                <el-checkbox label="3001-6000" name="price"></el-checkbox>
                <el-checkbox label="6001-10000" name="price"></el-checkbox>
                <el-checkbox label="10001-15000" name="price"></el-checkbox>
                <el-checkbox label="15001-20000" name="price"></el-checkbox>
                <el-checkbox label="20001-30000" name="price"></el-checkbox>
                <el-checkbox label="30001-45000" name="price"></el-checkbox>
                <el-checkbox label="45001-60000" name="price"></el-checkbox>
                <el-checkbox label="60000以上" name="price"></el-checkbox>
            </el-checkbox-group>
        </el-form-item> -->
        <el-form-item label="特殊资源" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            ruleForm: {
                delivery: false,
                school: [],
                price: [],
                price1: '',
                price2: '',
                resource: ''
            },
            rules: {
                school: [{
                    type: 'array',
                    required: true,
                    message: '请至少选择一个门派',
                    trigger: 'change'
                }],
                price1: [{
                    type: 'number',
                    required: true,
                    message: '请輸入最低价格',
                    trigger: 'change'
                }],
                price2: [{
                    type: 'number',
                    required: true,
                    message: '请輸入最高价格',
                    trigger: 'blur'
                }],
                // price: [{
                //     type: 'array',
                //     required: true,
                //     message: '请至少选择一个门派',
                //     trigger: 'change'
                // }],
                resource: [{
                    required: true,
                    message: '请选择活动资源',
                    trigger: 'change'
                }]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>

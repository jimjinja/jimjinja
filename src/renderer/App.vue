<template>
  <div id="app">
    <landing-page></landing-page>
    <div class="block">
      <span class="demonstration">スライダー</span>
      <el-slider v-model="ruleForm.age"></el-slider>
    </div>
    <div> {{ ruleForm.age }} </div>
    <span class="demonstration">日付</span>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="日付を選んでください">
    </el-date-picker>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item label="年齢" prop="age">
        <el-input type="number" v-model="ruleForm.age" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import LandingPage from '@/components/LandingPage';

  export default {
    name: 'electron-vue-template',
    components: {
      LandingPage,
    },
    data() {
      return {
        value2: '',
        ruleForm: {
          age: 0,
        },
        rules: {
          age: [
            {
              validator: (rule, value, callback) => {
                if (!value) {
                  return callback(new Error('値を入力してください'));
                }
                if (value > 51) {
                  return callback(new Error('年齢は50歳以下にしてください'));
                }
                return true;
              },
              trigger: 'change',
            },
          ],
        },
      };
    },
  };
</script>

<style>
  /* CSS */
</style>

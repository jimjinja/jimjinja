<template>
  <el-container style="height: 500px; border: 0px solid #eee">
    <el-aside width="200px" style="background-color: rgb(255, 255, 255)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>Navigator One</template>
          <el-menu-item-group>
            <template slot="title">Group 1</template>
            <el-menu-item index="1-1">Option 1</el-menu-item>
            <el-menu-item index="1-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="1-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">Option4</template>
            <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>Navigator Two</template>
          <el-menu-item-group>
            <template slot="title">Group 1</template>
            <el-menu-item index="2-1">Option 1</el-menu-item>
            <el-menu-item index="2-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="2-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">Option 4</template>
            <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>Navigator Three</template>
          <el-menu-item-group>
            <template slot="title">Group 1</template>
            <el-menu-item index="3-1">Option 1</el-menu-item>
            <el-menu-item index="3-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="3-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">Option 4</template>
            <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>    
    <el-container>
      <el-header style="text-align: right; font-size: 10px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><router-link to="/">setup1</router-link></el-dropdown-item>
            <el-dropdown-item><router-link to="/about">setup2</router-link></el-dropdown-item>
            <el-dropdown-item><router-link to="/preferences">setup3</router-link></el-dropdown-item>
            <el-dropdown-item><router-link to="/counter">setup4</router-link></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>      
      <el-main>
        <el-row>
          <el-col>
            スライダー {{ ruleForm.age }}
            <el-slider v-model="ruleForm.age"></el-slider>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col>
            <span class="demonstration">日付</span>
            <el-date-picker
              v-model="value2"
              type="date"
              placeholder="日付を選んでください">
            </el-date-picker>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
              <el-form-item label="年齢" prop="age">
                <el-input type="number" v-model="ruleForm.age" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'preferences',
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
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

  body { font-family: 'Source Sans Pro', sans-serif; }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  .el-row {
    margin-bottom: 20px;
  }

  .el-col {
    border-radius: 4px;
  }
</style>

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
        Clicked: {{ this.$store.state.Counter.count}} times, count is {{ evenOrOdd }}.
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">Increment if odd</button>
        <button @click="incrementAsync">Increment async</button>
        <div>
          <div>Recent History (last 5 entries): {{ recentHistory }}</div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    computed: mapGetters([
      'evenOrOdd',
      'recentHistory',
    ]),
    methods: mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync',
    ]),
  };
</script>

<style>
</style>

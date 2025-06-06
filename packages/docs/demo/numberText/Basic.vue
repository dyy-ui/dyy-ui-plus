<template>
  <el-row>
    <el-col :span="8">
      <lx-number-text :from="186.23" class="font-size-26px font-bold" />
    </el-col>
    <el-col :span="8">
      <lx-number-text :to="30000" :from="39827.234" :duration="2000" class="font-size-26px font-bold" />
    </el-col>
    <el-col :span="8">
      <lx-number-text :from="892834.6761" class="font-size-26px font-bold" />
    </el-col>
  </el-row>
</template>
<script setup>
  import { ElRow, ElCol } from 'element-plus'
  import { LxNumberText } from 'dyy-ui-plus'
</script>

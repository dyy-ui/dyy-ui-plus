<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
const onSubmit = (data:any) => {
  ElMessage({
    message: JSON.stringify(data),
    grouping: true,
    type: 'success',
  })
  console.log(JSON.stringify(data))
}

const itemList = ref([
  {
    label: '姓名',
    prop: 'name',
    type: 'input',
    attrs: { clearable: true, placeholder: '请输入姓名' },
    value: '',
  },
  {
    label: 'InputSlot',
    prop: 'InputSlot',
    type: 'input',
    attrs: { clearable: true, placeholder: '请输入姓名', slots: ['prefix', 'suffix'] },
    value: '',
  },
])
</script>

<template>
  <div>
    <el-button type="primary" @click="onSubmit">提交</el-button>
    <lx-search-form :item-list="itemList" @handleSubmit="onSubmit"></lx-search-form>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

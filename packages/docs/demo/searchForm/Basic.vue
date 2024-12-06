<template>
   
   <lx-search-form :item-list="itemList" @handleSubmit="onSubmit" label-width="80px"></lx-search-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
const onSubmit = (data: any) => {
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

<script setup lang="ts">
  import { ref, watch, watchEffect } from 'vue'
  import { ElMessage } from 'element-plus'
  import type { SearchFormItem } from 'dyy-ui-plus'
  import { LxSearchForm } from 'dyy-ui-plus'

  const count = ref(0)

  watch(count, (val) => console.log('watch:', val))
  watchEffect(() => console.log('effect:', count.value))

  setTimeout(() => (count.value = 1), 1000)
  Promise.resolve().then(() => (count.value = 2))

  const onSubmit = (data: any) => {
    ElMessage({
      message: JSON.stringify(data),
      grouping: true,
      type: 'success',
    })
    console.log(JSON.stringify(data))
  }

  const itemList = ref<SearchFormItem[]>([
    {
      label: '姓名',
      prop: 'name',
      type: 'input',
      attrs: { clearable: true, placeholder: '请输入姓名', slots: ['prefix'] },
      value: '',
    },
    {
      label: '数量',
      prop: 'number',
      type: 'inputNumber',
      attrs: { clearable: true, placeholder: '请输入数量' },
      value: '',
    },
    {
      label: 'InputSlot',
      prop: 'InputSlot',
      type: 'input',
      attrs: { clearable: true, placeholder: '请输入姓名', slots: ['prefix', 'suffix'] },
      value: '',
    },
    {
      label: '级联选择',
      prop: 'cascader',
      type: 'cascader',
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
            },
          ],
        },
      ],
      value: [],
    },
    {
      label: '年龄',
      prop: 'age',
      type: 'select',
      attrs: { clearable: true, placeholder: '请输选择年龄' },
      options: [
        { label: '18岁', value: '18' },
        { label: '19岁', value: '19' },
        { label: '20岁', value: '20' },
      ],
      value: '',
    },
    {
      label: '年龄虚拟',
      prop: 'age1',
      type: 'selectV2',
      attrs: {
        clearable: true,
        placeholder: '请输选择年龄虚拟',
        options: [
          { label: '180岁', value: '18' },
          { label: '190岁', value: '19' },
          { label: '200岁', value: '20' },
        ],
      },
      value: '',
    },
    {
      label: '日期',
      prop: 'date',
      type: 'datePicker',
      attrs: { type: 'date', clearable: true, placeholder: '请输选择日期' },
      value: '',
    },
    {
      label: '日期范围',
      prop: 'daterange',
      type: 'datePicker',
      attrs: { type: 'daterange', clearable: true, placeholder: '请输选择日期' },
      value: '',
    },
    {
      label: '时间范围',
      prop: 'timePicker',
      type: 'timePicker',
      attrs: { clearable: true, placeholder: '请输选择日期' },
      value: '',
    },
    {
      label: '时间选择',
      prop: 'timeSelect',
      type: 'timeSelect',
      attrs: { clearable: true, placeholder: '请输选择日期' },
      value: '',
    },

    {
      label: '复选',
      prop: 'checkbox',
      type: 'checkbox',
      attrs: { clearable: true, placeholder: '请输选择年龄虚拟' },
      options: [
        { label: '180岁', value: '18' },
        { label: '190岁', value: '19' },
      ],
      value: [],
    },
    {
      label: '单选',
      prop: 'radio',
      type: 'radio',
      attrs: { clearable: true, placeholder: '请输选择年龄虚拟' },
      options: [
        { label: '180岁', value: '18' },
        { label: '190岁', value: '19' },
      ],
      value: '',
    },
  ])
</script>
<template>
  <lx-search-form :item-list="itemList" @handleSubmit="onSubmit" label-width="80px">
    <template #prefix="{ item }">
      <template v-if="item.prop === 'name'">{{ item.prop }}</template>
    </template>
  </lx-search-form>
</template>

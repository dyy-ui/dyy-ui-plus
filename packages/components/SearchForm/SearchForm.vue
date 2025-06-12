<template>
  <el-form :model="form" ref="formRef" v-bind="formAttrs">
    <el-row>
      <el-col
        v-for="(item, index) in itemList"
        :key="item.type"
        :span="24 / cols"
        v-show="index < rows * cols - 1 || showMore"
      >
        <!-- slot start-->
        <template v-if="item.slot">
          <slot :name="item.slot" :item="item"></slot>
        </template>
        <!-- slot end -->
        <el-form-item v-if="item.type !== 'cascader'" :label="item.label" :prop="item.prop">
          <component
            v-if="componentMap[item.type]"
            :is="componentMap[item.type]"
            v-model="form[item?.prop]"
            :type="item.attrs?.type as DateType"
            :options="item.options"
            v-bind="item.attrs"
            v-on="item.event"
            class="w-100%"
          >
            <template v-for="slotItem in item.attrs?.slots" #[slotItem] :key="slotItem">
              <slot :name="slotItem" :item="item"></slot>
            </template>
            <template v-if="item.options && item.type === 'select'">
              <el-option
                v-for="option in validOptions(item.options ?? [])"
                :key="option.value"
                :label="option.label"
                :value="option.value"
              ></el-option>
            </template>
            <template v-if="item.options && item.type === 'checkbox'">
              <el-checkbox v-for="option in item.options" :key="option.value" v-bind="option"></el-checkbox>
            </template>
            <template v-if="item.options && item.type === 'radio'">
              <el-radio v-for="option in item.options" :key="option.value" v-bind="option"></el-radio>
            </template>
          </component>
        </el-form-item>
        <!-- TODO  cascader 用上面的方法 node-content.ts renderLabelFn 会返回有值，导致label渲染不出来 -->
        <el-form-item v-if="item.type === 'cascader'" :label="item.label" :prop="item.prop">
          <el-cascader v-model="form[item?.prop]" :options="item.options" v-bind="item.attrs as any" v-on="item.event">
            <template v-for="slotItem in item.attrs?.slots" #[slotItem]>
              <slot :name="slotItem" :item="item"></slot>
            </template>
          </el-cascader>
        </el-form-item>
      </el-col>
      <el-col :span="6" class="text-right m-l-a">
        <el-button @click="handleSearch" type="primary">查询</el-button>
        <el-button @click="handleReset(formRef)">重置</el-button>
        <el-button @click="handleMore" type="text" v-if="itemList.length > rows * cols - 1">
          {{ showMore ? '收起' : '展开' }}
          <el-icon v-if="showMore"><ArrowUpBold /></el-icon>
          <el-icon v-else><ArrowDownBold /></el-icon>
        </el-button>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts" setup>
  import {
    ElInput,
    ElInputNumber,
    ElSelect,
    ElSelectV2,
    ElDatePicker,
    ElTimePicker,
    ElTimeSelect,
    ElCascader,
    ElCheckboxGroup,
    ElRadioGroup,
  } from 'element-plus'
  import { ref, computed, defineProps, defineEmits, withDefaults, onBeforeMount } from 'vue'
  import type { FormInstance } from 'element-plus'
  import type { SearchFormItem, SearchFormProps, OptionType, DateType } from './types'
  import { getValueByPath } from '@dyy-ui-plus/utils'

  defineOptions({
    name: 'LxSearchForm',
  })
  const formRef = ref<FormInstance>()
  const form = ref<any>({})
  const showMore = ref(false)

  const componentMap = {
    input: ElInput,
    inputNumber: ElInputNumber,
    select: ElSelect,
    selectV2: ElSelectV2,
    datePicker: ElDatePicker,
    timePicker: ElTimePicker,
    timeSelect: ElTimeSelect,
    cascader: ElCascader,
    checkbox: ElCheckboxGroup,
    radio: ElRadioGroup,
  } as const

  const props = withDefaults(defineProps<SearchFormProps>(), {
    formAttrs: () => ({
      labelWidth: '90px',
    }),
    itemList: () => [],
    rows: 2,
    cols: 4,
  })

  const selectApi = computed<SearchFormProps['itemList']>(() => {
    return props.itemList.filter((item: SearchFormItem) => ['select', 'selectV2'].includes(item.type) && item.api)
  })

  const emit = defineEmits(['handleSubmit'])

  const handleSearch = () => {
    formRef.value?.validate((valid) => {
      if (valid) {
        emit('handleSubmit', form.value)
      }
    })
  }

  selectApi.value.forEach(async (item: SearchFormItem) => {
    const { data } = await item.api

    let tempArr = getValueByPath(data, item.optionsPath ?? '')
    if (item.optionAttrs) {
      tempArr.forEach((temp: any) => {
        temp.label = temp[item.optionAttrs?.label as string]
        temp.value = temp[item.optionAttrs?.value as string]
      })
    }

    item.options = tempArr
  })

  onBeforeMount(() => {
    console.log('1.0.8-0')
    // 初始化form
    initForm()
  })

  // 重置
  const handleReset = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }

  // 初始化form
  const initForm = () => {
    props.itemList.forEach((item: SearchFormItem) => {
      form.value[item?.prop] = item.value
    })
  }

  const handleMore = () => {
    showMore.value = !showMore.value
  }

  const validOptions = (options: OptionType[]): OptionType[] => {
    return options.filter((option: OptionType) => option.value !== undefined)
  }

  defineExpose({
    form,
    handleReset,
  })
</script>
<style scoped lang="scss">
  @import './style.css';
</style>

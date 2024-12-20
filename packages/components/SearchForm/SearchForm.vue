<template>
  <el-form :model="form" ref="formRef" v-bind="formAttrs">
    <el-row>
      <el-col v-for="(item, index) in itemList" :key="item.type" :span="24 / cols" v-show="index < rows * cols - 1 || showMore">
        <!-- slot start-->
        <template v-if="item.slot">
          <slot :name="item.slot" :item="item"></slot>
        </template>
        <!-- slot end -->
        <el-form-item v-if="item.type === 'input'" :label="item.label" :prop="item.prop">
          <el-input v-model="form[item?.prop]" v-bind="item.attrs" v-on="item.event">
            <template v-for="slotItem in item.attrs?.slots" #[slotItem]>
              <slot :name="slotItem" :item="item"></slot>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item v-if="item.type === 'inputNumber'" :label="item.label" :prop="item.prop">
          <el-input-number v-model="form[item?.prop]" v-bind="item.attrs" v-on="item.event">
            <template v-for="slotItem in item.attrs?.slots" #[slotItem]>
              <slot :name="slotItem" :item="item"></slot>
            </template>
          </el-input-number>
        </el-form-item>
        <el-form-item v-if="item.type === 'select'" :label="item.label" :prop="item.prop">
          <el-select v-model="form[item?.prop]" v-bind="item.attrs" v-on="item.event" class="w-100%">
            <template v-for="slotItem in item.attrs?.slots" #[slotItem]>
              <slot :name="slotItem" :item="item"></slot>
            </template>
            <el-option v-for="option in item.options" :key="option.value" v-bind="option"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item v-if="item.type === 'selectV2'" :label="item.label" :prop="item.prop">
          <el-select-v2 v-model="form[item?.prop]" :options="item.options" v-bind="item.attrs" v-on="item.event" class="w-100%">
            <template v-for="slotItem in item.attrs?.slots" #[slotItem]>
              <slot :name="slotItem" :item="item"></slot>
            </template>
          </el-select-v2>
        </el-form-item>
        <el-form-item
          v-if="['year', 'month', 'date', 'dates', 'datetime', 'week', 'datetimerange', 'daterange', 'monthrange'].includes(item.type)"
          :label="item.label"
          :prop="item.prop"
        >
          <el-date-picker v-model="form[item?.prop]" :type="item.type" v-bind="item.attrs" v-on="item.event" class="important-w-100%">
            <template v-for="slotItem in item.attrs?.slots" #[slotItem]>
              <slot :name="slotItem" :item="item"></slot>
            </template>
          </el-date-picker>
        </el-form-item>
        <el-form-item v-if="item.type === 'timePicker'" :label="item.label" :prop="item.prop">
          <el-time-picker v-model="form[item?.prop]" v-bind="item.attrs" v-on="item.event" class="important-w-100%" />
        </el-form-item>
        <el-form-item v-if="item.type === 'timeSelect'" :label="item.label" :prop="item.prop">
          <el-time-select v-model="form[item?.prop]" v-bind="item.attrs" v-on="item.event" class="important-w-100%" />
        </el-form-item>
        <el-form-item v-if="item.type === 'cascader'" :label="item.label" :prop="item.prop">
          <el-cascader v-model="form[item?.prop]" :options="item.options" v-bind="item.attrs" v-on="item.event">
            <template v-for="slotItem in item.attrs?.slots" #[slotItem]>
              <slot :name="slotItem" :item="item"></slot>
            </template>
          </el-cascader>
        </el-form-item>
        <el-form-item v-if="item.type === 'checkbox'" :label="item.label" :prop="item.prop">
          <el-checkbox-group v-model="form[item?.prop]" v-bind="item.attrs" v-on="item.event">
            <template v-for="slotItem in item.attrs?.slots" #[slotItem]>
              <slot :name="slotItem" :item="item"></slot>
            </template>
            <el-checkbox v-for="option in item.options" :key="option.value" v-bind="option"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item v-if="item.type === 'radio'" :label="item.label" :prop="item.prop">
          <el-radio-group v-model="form[item?.prop]" v-bind="item.attrs" v-on="item.event">
            <template v-for="slotItem in item.attrs?.slots" #[slotItem]>
              <slot :name="slotItem" :item="item"></slot>
            </template>
            <el-radio v-for="option in item.options" :key="option.value" v-bind="option"></el-radio>
          </el-radio-group>
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
import { ref, computed, defineProps, defineEmits, withDefaults, onBeforeMount } from 'vue'
import type { FormInstance } from 'element-plus'
import type { SearchFormItem, SearchFormProps } from './types'
import { getValueByPath } from '@dyy-ui/utils'

defineOptions({
  name: "LxSearchForm",
});
const formRef = ref<FormInstance>()
const form = ref<any>({})
const showMore = ref(false)

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

  let tempArr = getValueByPath(data, item.optionsPath)
  if (item.optionAttrs) {
    tempArr.forEach((temp: any) => {
      temp.label = temp[item.optionAttrs?.label as string]
      temp.value = temp[item.optionAttrs?.value as string]
    })
  }

  item.options = tempArr
})

onBeforeMount(() => {
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

defineExpose({
  form,
})
</script>
<style scoped lang="scss">
@import "./style.css"

</style>

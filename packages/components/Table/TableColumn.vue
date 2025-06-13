<!-- 递归这个组件 -->
<template>
  <el-table-column v-for="item in columns" v-bind="omitChildrenAndSlots(item)" :key="item.prop || item.label">
    <template v-if="item.headerSlot" #header="scope">
      <slot :name="item.headerSlot" v-bind="{ ...scope, item }"></slot>
    </template>
    <template v-if="item.slot" #default="scope">
      <slot :name="item.slot" v-bind="{ ...scope, item }"></slot>
    </template>
    <template v-if="item.children && item.children.length">
      <table-column v-if="item.children && item.children.length" :columns="item.children">
        <template v-for="temp in item.children" #[temp.slot]="scope" :key="temp.slot">
          <slot v-if="temp.slot" :name="temp.slot" v-bind="{ ...scope, temp }"></slot>
        </template>
      </table-column>
    </template>
  </el-table-column>
</template>
<script setup lang="ts">
  import { defineProps, withDefaults } from 'vue'
  import type { DTableColumnsProps } from './types.ts'

  function omitChildrenAndSlots(col: any) {
    const { children, ...rest } = col
    return rest
  }

  withDefaults(defineProps<Partial<DTableColumnsProps>>(), {
    columns: () => [],
  })
</script>

<!-- 递归这个组件 -->
<template>
  <el-table-column v-for="item in columns" v-bind="item" :key="item.prop || item.label">
    <template v-if="item.headerSlot" #header="scope">
      <slot :name="item.headerSlot" v-bind="{ ...scope, item }"></slot>
    </template>
    <template v-if="item.slot" #default="scope">
      <slot :name="item.slot" v-bind="{ ...scope, item }"></slot>
    </template>
    <template v-if="item.children && item.children.length">
      <table-column v-if="item.children && item.children.length" :columns="item.children">
        <template v-for="temp in item.children" #[temp.slot]="scope" :key="temp.slot">
          <slot v-if="temp.slot" :name="temp.slot" v-bind="{ ...scope }"></slot>
        </template>
      </table-column>
    </template>
  </el-table-column>
</template>
<script setup lang="ts">
import type { DTableColumnsProps } from './types.ts'
withDefaults(defineProps<Partial<DTableColumnsProps>>(), {
  columns: () => [],
})
</script>

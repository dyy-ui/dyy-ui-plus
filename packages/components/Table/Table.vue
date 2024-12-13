<template>
  <el-table v-bind="tableAttrs" :data="tableData || data" v-on="tableEvents">
    <table-column :columns="columns">
      <template v-for="item in Object.keys(slots)" #[item]="scope">
        <slot :name="item" v-bind="{...scope}"></slot>
      </template>
    </table-column>
  </el-table>
</template>
<script setup lang="ts">
import { computed, ref, useSlots, withDefaults, defineProps } from 'vue'
import TableColumn from './TableColumn.vue';
import type { DTableProps } from './types.ts'
defineOptions({
  name: "LxTable",
});
const data = ref([])
const slots = useSlots()



const props = withDefaults(defineProps<Partial<DTableProps>>(), {
  columns: () => [],
  tableAttrs: () => ({ data: [] }),
  tableEvents: () => ({}),
})

const tableData = computed(() => {
  return props.tableAttrs.data
})
</script>

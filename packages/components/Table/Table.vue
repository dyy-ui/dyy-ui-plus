<template>
  <el-table v-bind="tableAttrs" :data="tableData || data" v-on="tableEvents">
    <TableColumn v-for="col in columns" :key="col.prop || col.label" :column="col">
      <!-- 透传所有自定义slot -->
      <template v-for="(_, name) in slots" #[name]="scope">
        <slot :name="name" v-bind="scope" />
      </template>
    </TableColumn>
  </el-table>
</template>
<script setup lang="ts">
  import { computed, ref, useSlots, withDefaults, defineProps } from 'vue'
  import TableColumn from './TableColumn.vue'
  import type { DTableProps } from './types.ts'
  defineOptions({
    name: 'LxTable',
  })

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

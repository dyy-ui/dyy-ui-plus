<script setup lang="ts">
  import { defineProps, useSlots } from 'vue'

  const props = defineProps<{
    column: any
  }>()

  const slots = useSlots()
  function omitChildrenAndSlots(col: any) {
    const { children, slots, ...rest } = col
    return rest
  }

  function getColumnSlots(col: any, parentSlots: any) {
    // 支持 columns 配置里的 slots: { default: 'mySlot', header: 'headerSlot' }
    const slotObj: Record<string, any> = {}
    if (col.slots) {
      Object.keys(col.slots).forEach((slotName) => {
        const parentSlotName = col.slots[slotName]
        if (parentSlots[parentSlotName]) {
          slotObj[slotName] = parentSlots[parentSlotName]
        }
      })
    }
    return slotObj
  }
</script>

<template>
  <component
    :is="'el-table-column'"
    v-bind="omitChildrenAndSlots(props.column)"
    v-slots="getColumnSlots(props.column, slots)"
  >
    <!-- 递归渲染子列 -->
    <template v-if="props.column.children" #default="scope">
      <TableColumn
        v-for="child in props.column.children"
        :key="child.prop || child.label"
        :column="child"
        v-slots="slots"
        v-bind="scope"
      />
    </template>
  </component>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'TableColumn',
  })
</script>

import type { TableColumnCtx, TableProps } from 'element-plus'
type ColumnProps = TableColumnCtx<any> & { slot: string; headerSlot: string; children: ColumnProps[] }
export interface DTableProps {
  columns: ColumnProps[]
  tableAttrs?: TableProps<any>
  tableEvents?: any
  api?: Awaited<Promise<any>>
  dataPath?: string
  autoLoad?: boolean
  pagination?: boolean
}

export interface DTableColumnsProps {
  columns: ColumnProps[]
}

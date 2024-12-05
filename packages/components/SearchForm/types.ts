import type { FormItemProps, FormRules } from 'element-plus'

export interface ItemTypesProps extends FormItemProps {
  slots: string[]
}
type TypeProps =
  | 'input'
  | 'inputNumber'
  | 'select'
  | 'selectV2'
  | 'date'
  | 'datetime'
  | 'daterange'
  | 'year'
  | 'month'
  | 'dates'
  | 'week'
  | 'datetimerange'
  | 'monthrange'
  | 'timePicker'
  | 'timeSelect'
  | 'cascader'
  | 'checkbox'
  | 'radio'
export interface SearchFormItem extends FormItemProps {
  type: TypeProps
  value?: any
  label: string
  prop: string
  slot?: string
  api?: Promise<any>
  optionsPath: string
  options?: {
    label?: string | number
    value?: string | number
  }[]
  optionAttrs?: {
    label?: string
    value?: string
  }
  attrs?: ItemTypesProps
  event?: Object
}

type LabelPosition = 'left' | 'right' | 'top'
type AsteriskPosition = 'left' | 'right'
type FormSize = '' | 'large' | 'default' | 'small'

export interface SearchFormProps {
  formAttrs?: {
    labelWidth?: string | number
    labelPosition?: LabelPosition
    requireAsteriskPosition?: AsteriskPosition
    labelSuffix?: string
    hideRequiredAsterisk?: boolean
    inline?: boolean
    inlineMessage?: boolean
    statusIcon?: boolean
    size?: FormSize
    rules?: FormRules
  }
  itemList: Array<SearchFormItem>
  rows?: number
  cols?: number
}

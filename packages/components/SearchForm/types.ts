import type { FormItemProps, FormRules, CascaderOption } from 'element-plus'
type OptionCommon = Record<string, any>;
export type Option = OptionCommon & {
    created?: boolean;
};
export type OptionGroup = OptionCommon;
export type OptionType = Option | OptionGroup;
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

  export type DateType =
    | 'year'
    | 'month'
    | 'date'
    | 'dates'
    | 'datetime'
    | 'week'
    | 'daterange'
    | 'monthrange'
    | 'datetimerange'
export interface SearchFormItem extends FormItemProps {
  type: TypeProps
  value?: any
  label: string
  prop: string
  slot?: string
  api?: Promise<any>
  optionsPath: string
  options?: CascaderOption[]
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

import type { FormRules, CascaderOption, InputProps, InputNumberProps, CascaderProps  } from 'element-plus'
type OptionCommon = Record<string, any>;
export type Option = OptionCommon & {
    created?: boolean;
};
export type OptionGroup = OptionCommon;
export type OptionType = Option | OptionGroup;
export interface ItemTypesProps {
  slots?: string[]
  type?: TypeProps
}

type AttrsMap = {
  input: Partial<InputProps> & ItemTypesProps
  inputNumber: Partial<InputNumberProps> & ItemTypesProps
  cascader: Partial<CascaderProps> & ItemTypesProps
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
  | 'datePicker'
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
export type SearchFormItem<T extends keyof  AttrsMap = keyof AttrsMap> = {
  type: TypeProps | T
  value?: any
  label: string
  prop: string
  slot?: string
  api?: Promise<any>
  optionsPath?: string
  options?: CascaderOption[]
  optionAttrs?: {
    label?: string
    value?: string
  }
  attrs?: AttrsMap[T]
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

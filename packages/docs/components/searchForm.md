
# SearchForm 提示

## 基础用法

::: preview
demo-preview=../demo/searchForm/Basic.vue
:::

## 属性

| 参数     | 类型                                     | 默认值 | 说明             |
| :------- | :--------------------------------------- | :----- | :--------------- |
| itemList | Array[[SearchFormItem]](#searchformitem) | []     | 输入框的提示文字 |
| rows     | Number                                   | 2      | 展示几行         |
| cols     | Number                                   | 4      | 展示几列         |

## SearchFormItem

type 可以为 `input` `inputNumber` `select` `selectV2` `date` `datetime` `daterange` `year` `month` `dates` `week` `datetimerange` `monthrange` `timePicker` `timeSelect` `cascader` `checkbox` `radio`

| 参数        | 类型                                      | 默认值 | 可选值 | 说明                                                                               |
| :---------- | :---------------------------------------- | :----- | :----- | :--------------------------------------------------------------------------------- |
| type        | String                                    | ''     | `enum` | 表单元素类型                                                                       |
| lebal       | String                                    | ''     |        | 表单 label                                                                         |
| prop        | String                                    | ''     |        | v-model 绑定                                                                       |
| slot        | String                                    | ''     |        | 自定义 slot                                                                        |
| value       | String                                    | ''     |        | 默认值                                                                             |
| attrs       | Object[[ItemTypesProps]](#itemtypesprops) | {}     |        | element-plus 表单元素自带属性                                                      |
| event       | Object                                    | {}     |        | element-plus 表单元素自带事件                                                      |
| api         | Promise                                   |        |        | `type=select` 时需要请求后端接口获取数据时使用                                     |
| optionsPath | string                                    |        |        | `type=select` 时需要请求后端接口获取数据时使用嵌套数据格式路径，例子：`data.items` |
| optionAttrs | Object      |        |        | `type=select` 数据字段                                                             |

## ItemTypesProps

| 参数  | 类型     | 默认值 | 说明                               |
| :---- | :------- | :----- | :--------------------------------- |
| slots | String[] | ''     | element-plus 表单元素所拥有的 slot |

## 事件

| 事件名       | 类型           | 说明                     |
| :----------- | :------------- | :----------------------- |
| handleSubmit | Function(data) | 查询方法 data 为表单数据 |

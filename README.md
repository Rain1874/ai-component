# 创意通用组件库 Troyfe-component

## Troyfe-component

### install

```javaScript

  npm install troyfe-component

```

### Use

```ES6

  import { Icon, ProcessManage, DynamicForm, BarAndLineChart } from 'troyfe-component'

```

### Example Icon

```ES6

  <Icon
    type=""
    // type是必填项
    scriptUrl="//at.alicdn.com/t/font_385790_4939zqugz3c.js"
    // url可以是图标库地址。阿里https://www.iconfont.cn/
    extraCommonProps={{ className: 'myIcon' }}
    style={{
      fontSize: '40px'
    }}
  />

```

### Example ProcessManage

```ES6

  <ProcessManage
    xml=""
    onSave={(xml) => {
      console.log(xml);
    }}
  />

```

### Example DynamicForm

```ES6
import React, { useRef } from 'react';
import { NewSelectWidget, NewTreeSelectWidget, NewUploadWidget } from '../../components/CustomDynamicFormItem'
// 这些组件是用户自己子定义
  const refs = useRef(null) // 获取动态表单实例

  <DynamicForm
    settings={[
      {
        title: '自定义组件',
        widgets: [
          {
            text: '下拉框',
            name: 'apiSelect',
            schema: {
              title: '下拉框',
              type: 'string',
              widget: 'NewSelectWidget',
            },
            setting: {
              url: { title: 'url', type: 'string' },
              key: { title: '键', type: 'string' },
              valueKey: { title: '值', type: 'string' },
            }
          },
          {
            text: '树形下拉框',
            name: 'apiTreeSelect',
            schema: {
              title: '树形下拉',
              type: 'string',
              widget: 'NewTreeSelectWidget'
            },
            setting: {
              url: { title: 'url', type: 'string' },
              key: { title: '键', type: 'string' },
              label: { title: '名称', type: 'string' },
            }
          },
          {
            text: '上传文件',
            name: 'apiUpload',
            schema: {
              title: '上传文件',
              type: 'array',
              widget: 'NewUploadWidget',
              enum: ['xlsx', 'docx', 'mp4'],
            },
            setting: {
              enum: { enum: [], props: {mode: "tags"}, title: "文件格式", type: "array", widget: "select" },
            }
          }
        ],
      }
    ]}
    ref={refs}
    widgets={{ NewSelectWidget, NewTreeSelectWidget, NewUploadWidget }}
  />

```

### 动态表单获取设置表单值

```javaScript

  const schema = JSON.stringify(refs.current.getValue()) // 获取表单值
  refs.current.setValue(JSON.parse(res.data.metaData)) // 设置表单值

```

### props

| 参数           | 说明                     | 类型    | 类型                             |
| -------------- | ------------------------ | ------- | -------------------------------- |
| hideId         | 隐藏组件 ID              | boolean | false                            |
| defaultValue   | 默认表单 schema          | object  | DEFAULT_SCHEMA                   |
| transformer    | schema 双向转换          | object  | { fromFormRender, toFormRender } |
| extraButtons   | 操作栏按钮               | array   | extraButton[]                    |
| controlButtons | 选中项操作按钮           | array   | controlButton[]                  |
| settings       | 左右侧栏配置             | array   | defaultSettings                  |
| commonSettings | 通用配置                 | object  | defaultCommonSettings            |
| globalSettings | 全局配置                 | object  | defaultGlobalSettings            |
| widgets        | 自定义组件               | object  | {}                               |
| mapping        | 组件和 schema 的映射规则 | object  | {}                               |

### extraButton

| 属性    | 说明             | 类型            |
| ------- | ---------------- | --------------- |
| text    | 按钮文案         | string          |
| onClick | 按钮点击回调函数 | (event) => void |

### controlButton

| 属性    | 说明             | 类型                    |
| ------- | ---------------- | ----------------------- |
| text    | 按钮文案         | string                  |
| onClick | 按钮点击回调函数 | (event, schema) => void |

### Methods

| 事件名    | 说明                       | 入参   |
| --------- | -------------------------- | ------ |
| getValue  | 获取导出的 schema 值       | -      |
| setValue  | 从外部强制修改 schema      | schema |
| copyValue | 将现有 schema 拷贝到剪贴板 | -      |

### Example BarAndLineProps

```ES6

  <BarAndLineProps
    option={createOption()}
    notMerge={true}
    lazyUpdate={true}
    style={{ width: '100%', height: '100%' }}
  />

```

### 参数

```javaScript
  {
    title?: {};
    legend?: {[key: string]: any};
    grid?: {
      top: string | number;
      left: string | number;
      right: string | number;
      bottom: string | number;
      containLabel: boolean;
    },
    xAxisKey: string,
    xAxisOption?: {},
    yAxisKey?: Array<{
      [key: string]: any
    }>
    seriesKey: Array<{
      type: string;
      key: string | string[];
      color: string;
      yIndex?: number;
      noTansfrom?: boolean;
    }>
    data: Array<{}>;
    horizontal?: boolean;
    tooltipFormatter?: (param: {}) => string
  }
```

### 运行该项目执行

### `yarn dev or npm run dev`

运行开发模式
在浏览器中打开[http://localhost:6006](http://localhost:6006)

### `yarn build or npm run build`

运行该命名进行项目的打包

### `yarn build build-storybook`

运行该项目进行文档打包

### `yarn start or npm start`

运行组件库的文档

**Note:**

部署组件库文档需要上传如下文件：
config
server
storybook-static
package.json

并在 config 中的 config.prod.js 文件中修改端口

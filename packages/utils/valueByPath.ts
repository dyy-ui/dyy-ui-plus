export function getValueByPath<T, K extends keyof T>(obj: T, path: string): T[K] | undefined {
  const keys = /\./.test(path) ? path.split('.') : [path]
  let current = obj as any

  for (const key of keys) {
    const indexMatch = /^\d+$/.test(key) // 检查是否为数字
    if (indexMatch) {
      // 数字键，处理数组
      const index = Number(key)
      if (Array.isArray(current) && index < current.length) {
        current = current[index]
      } else {
        // 数组索引无效或当前值非数组
        return undefined
      }
    } else {
      // 字符串键，处理对象属性
      if (current.hasOwnProperty(key)) {
        current = current[key]
      } else {
        return undefined
      }
    }
  }

  return current
}

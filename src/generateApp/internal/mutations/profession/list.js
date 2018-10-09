/**
 * Created by Administrator on 2018/9/30.
 */
export function mutationCreater (config) {
  if (config.mutationKey) {
    throw new Error('没有对应的mutation方法')
  }
  return {
    [config.mutationKey]: (state, data) => {
      if (config.value === undefined || config.value === null) {
        throw new Error('取回的数据没有可绑定的变量')
      }
      if (!data) {
        return
      }
      state[config.value] = data
    }
  }
}

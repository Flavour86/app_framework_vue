export default function getLists (...args) {
  return new Promise((resolve, reject) => {
    console.log(args, 'getLists')
    setTimeout(() => {
      const data = [
        {
          title: '测试数据1',
          des: '这是一个测试的数据，哈哈哈哈'
        },
        {
          title: '测试数据2',
          des: '这是一个测试的数据2222，哈哈哈哈1111111111'
        }
      ]
      // commit('setLists', data)
      resolve(data)
    }, 2000)
  })
}

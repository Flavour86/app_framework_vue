import switchToRouter from './switchToRouter'

export default function itemClickToDetail ($route, detailPath, item) {
  if (!item) return
  console.log('itemClickToDetail', $route, detailPath, item)
  const {id} = item
  const self = this
  if (id) {
    const path = `${detailPath}/${id}`
    switchToRouter.call(self, path)
  }
}

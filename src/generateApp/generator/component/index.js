import generateRender from './render/'
import generateMethods from './method'
import generateLifecycle from './lifecycle'
import generateDataFn from './data'

export default function (page) {
  const {name} = page
  return {
    name,
    data: generateDataFn(page),
    ...generateLifecycle(page),
    methods: generateMethods(page),
    render (h) {
      return generateRender(page, this)(h)
    }
  }
}

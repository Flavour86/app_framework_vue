import generateRender from './render/'
import generateMethods from './method'
import generateLifecycle from './lifecycle'
import generateDataFn from './data'
import generateCompute from './compute'
import initMixin from './mixins'
// import generateComponents from './component'

export default function (page) {
  const {name} = page
  return {
    name,
    mixins: [initMixin],
    // components: generateComponents(components),
    data: generateDataFn(page),
    ...generateLifecycle(page),
    computed: generateCompute(page),
    methods: generateMethods(page),
    render (h) {
      return generateRender(page, this)(h)
    }
  }
}

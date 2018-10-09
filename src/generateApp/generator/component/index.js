import generateRender from './render'
import generateMethods from './method'
import generateLifecycle from './lifecycle'

export default function (config) {
  return {
    ...generateLifecycle(config),
    methods: generateMethods(config),
    render (h) {
      return generateRender(config, this)(h)
    }
  }
}

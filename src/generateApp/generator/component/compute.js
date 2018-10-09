import { mapGetters } from 'vuex'
import {warn} from '@/utils/helpers'

export default function generateCompute (page) {
  let { variable } = page
  let compute = {}
  variable = variable.filter(vari => vari.isShare)
  variable.reduce((computes, vari) => {
    if (!computes[vari.props]) {
      computes[vari.props] = `${vari.props}Getter`
    } else {
      warn('Duplicate variable, please check')
    }
    return computes
  }, compute)

  return {
    ...mapGetters(compute)
  }
}

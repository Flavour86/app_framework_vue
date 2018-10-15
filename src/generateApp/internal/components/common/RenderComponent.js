import Vue from 'vue'

export default Vue.extend({
  name: 'RenderComponent',
  functional: true,
  props: {
    renderComponents: Function,
    loadState: {
      type: String,
      default: 'loading'
    }
  },
  render: (h, ctx) => {
    // if (ctx.props.loadState === 'loading') {
    //   return h('Spin', {
    //     props: {
    //       size: 'large'
    //     },
    //     style: {
    //       width: '50px',
    //       margin: 'auto'
    //     }
    //   })
    // }
    // console.log(ctx, ctx.slots())
    return h('div', {
      style: {
        height: '100%',
        width: '100%'
      }
    }, ctx.slots().default)
  }
})

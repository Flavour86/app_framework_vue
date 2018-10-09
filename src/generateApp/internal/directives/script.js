import { completed } from '@/utils/helpers'

export default function (el, bind, vnode) {
  const {value} = bind
  const script = document.createElement('script')
  script.text = value
  try {
    completed(function () {
      document.head.appendChild(script)
    })
  } catch (e) {
    console.error('error: ' + e)
  }
}

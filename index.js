import { reactive } from 'vue'

let _ = Object.create(null)

// function breakpoint (el, binding, vnode) {
//   binding.value(el, vnode.context.$media.current)
// }

const defaultBreakpoints = {
  mobile: 'screen and (max-width: 768px)',
  desktop: 'screen and (min-width: 769px)'
}

function setup (options = defaultBreakpoints) {
  let bps = options

  _ = reactive({
    current: null,
    ...Object.keys(bps).reduce((acc,e) => (acc[e] = null, acc), {})
  })
  Object.keys(bps).forEach(media => {
    const query = window.matchMedia(bps[media])
    const callback = (e) => {
      _[media] = e.matches
      _.current = Object.keys(_).filter(e => e !== 'current' && _[e])
    }
    query.addListener(callback)
    callback(query)
  })

  // Vue.directive('breakpoint', breakpoint)
}

export { _ as useMedia, setup }

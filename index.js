let _ = Object.create(null)

function breakpoint (el, binding, vnode) {
  binding.value(el, vnode.context.$media.current)
}

const defaultBreakpoints = {
  mobile: 'screen and (max-width: 768px)',
  desktop: 'screen and (min-width: 768px)'
}

export function install (Vue, options = defaultBreakpoints) {
  Vue.util.defineReactive(_, 'current', null)
  Object.keys(options).forEach(media => {
    Vue.util.defineReactive(_, media, null)
    const query = window.matchMedia(options[media])
    const callback = (e) => {
      _[media] = e.matches
      _.current = Object.keys(_).filter(e => e !== 'current' && _[e])
    }
    query.addListener(callback)
    callback(query)
  })

  Object.defineProperty(Vue.prototype, '$media', {
    get () { return _ }
  })

  Vue.directive('breakpoint', breakpoint)
}


export default { install }

const VueSimpleMedia: any = {}

let _ = Object.create(null)

function breakpoint (el, binding, vnode) {
  binding.value(el, vnode.context.$media.current)
}

const defaultBreakpoints = {
  mobile: 'screen and (max-width: 768px)',
  desktop: 'screen and (min-width: 769px)'
}

VueSimpleMedia.install = function (Vue, options = defaultBreakpoints) {
  let bps = (<any>window).breakpoints || options

  _ = Vue.observable({
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

  Object.defineProperty(Vue.prototype, '$media', {
    get: () => _
  })

  Vue.directive('breakpoint', breakpoint)
}

if (typeof window !== 'undefined' && (<any>window).Vue) {
  (<any>window).Vue.use(VueSimpleMedia)
}

export default VueSimpleMedia
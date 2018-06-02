let _ = Object.create(null)

function breakpoint (el, binding, vnode) {
  const specificMedia = binding.arg
  if ((specificMedia && vnode.context.$media[specificMedia]) || !specificMedia) binding.value(el)
}

export function install (Vue, options) {
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

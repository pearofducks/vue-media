let _ = Object.create(null)

export function install (Vue) {
  Vue.util.defineReactive(_, 'isMobile', null)
  Vue.util.defineReactive(_, 'isDesktop', null)
  
  Object.defineProperty(Vue.prototype, '$mq', {
    get () { return _ }
  })

  const query = window.matchMedia('screen and (max-width: 768px)')
  const callback = (e) => {
    _.isMobile = e.matches
    _.isDesktop = !_.isMobile
  }
  query.addListener(callback)
  callback(query)
}

// bind(el, binding, vnode) {
//   if (vnode.context.$mq.isMobile) {
//     el.classList.add('hidden')
//   } else { 
//     el.classList.remove('hidden')
//   }
// },
// update(el, binding, vnode) {
//   if (vnode.context.$mq.isMobile) {
//     el.classList.add('hidden')
//   } else { 
//     el.classList.remove('hidden')
//   }
// } 

export default { install }

<template>
  <div>
    <h1 v-llama>Hello, this layout is - mobile: {{$mq.isMobile}}, desktop: {{$mq.isDesktop}}</h1>
    <h2>second line</h2>
  </div>
</template>

<script>
export default {
  name: 'app',
  directives: {
    llama: {
      bind(el, binding, vnode) {
        if (vnode.context.$mq.isMobile) {
          el.classList.add('hidden')
        } else { 
          el.classList.remove('hidden')
        }
      },
      update(el, binding, vnode) {
        if (vnode.context.$mq.isMobile) {
          el.classList.add('hidden')
        } else { 
          el.classList.remove('hidden')
        }
      } 
    }
  },
  computed: {
    foobar() {
      return this.$mq.isMobile
    }
  }
}
</script>

<template>
  <h1>Hello, this layout is <br/>
    mobile: {{$media.mobile}}<br/>
    desktop: {{$media.desktop}}<br/>
    current: {{$media.current}}
  </h1>
</template>

<script>
export default {
  name: 'app',
  methods: {
    mediaCallback(el) {
      console.log("NOW ON DESKTOP?", this.$media.isDesktop)
      console.log("GOT EL", el)
    }
  },
}
</script>

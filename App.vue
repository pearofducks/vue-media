<template>
  <h1 v-breakpoint="mediaChangeCallback">Hello, this layout is <br/>
    mobile: {{$media.mobile}}<br/>
    desktop: {{$media.desktop}}<br/>
    current: {{$media.current}}
  </h1>
</template>

<script>
export default {
  name: 'app',
  methods: {
    mediaChangeCallback(el, currentMedia) {
      if (currentMedia.includes('desktop')) {
        el.style.color = 'red'
        el.style.opacity = '0.8'
      } else {
        el.style.color = 'blue'
        el.style.opacity = '0.5'
      }
    },
  },
}
</script>

> vue-simple-media

an alternative to other mediaMatch plugins with a focus on simplicity and minimal module size (less than 1kb minified)

# use

#### install

This plugin requires Vue 2.6 or greater.

`npm install vue-simple-media`

`Vue.use(media)` will use the default breakpoints (shown below)

To specify your own media queries:

```javascript
Vue.use(media, {
  mobile: 'screen and (max-width: 768px)',
  desktop: 'screen and (min-width: 768px)'
})
```

Note: if sourcing this plugin from a browser script tag, put breakpoints on `window.breakpoints` before this plugin loads

Keys used will then be available on the _$media_ object.

#### $media global

- `this.$media.current` - provides an **array** of the currently matched media
- `this.$media.KEY` - provides a **boolean** of whether this specified media is currently matched

Example:

`if (this.$media.desktop) // do stuff`

#### v-breakpoint directive

The function provided to the directive is called whenever media changes are detected.

The callback is given the element and `$media.current` as its parameters.

Example:

`<div v-breakpoint="mediaChangeCallback"></div>`

```javascript
mediaChangeCallback(element, currentMediaList) {
  if (currentMediaList.includes('desktop')) {
    element.style.color = 'red'
  }
}
```

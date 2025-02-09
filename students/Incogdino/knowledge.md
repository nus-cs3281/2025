### Vue components
- Properties are being passed to vue components as props. These properties specifies the different configurations of the html templates. 
- Content passed by the `slots` API are considered to be owned by the parent component that passes them in and so styles do not apply to them. To apply styles to these components, target the surrounding container and then the style using a CSS selector such as `.someClass > *`

#### Testing:
Vue component test utilities library: [Wrapper](https://v1.test-utils.vuejs.org/api/wrapper/#properties)

According to my current understanding:
- Testing is done by first creating a wrapper with the component to be tested.
- The `$nextTick()` function of the vm of the wrapper is then called which waits for the next DOM update flush.
- The generated HTML is then compared with the snapshot that is generated. 

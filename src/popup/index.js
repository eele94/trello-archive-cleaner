import Vue from 'vue'
import 'bulma-fluent/bulma.sass'

import App from './App.vue'

// eslint-disable-next-line
new Vue({
  el: '#app',
  render: h => h(App),
})

chrome.tabs.executeScript({
  code: `console.log(‘hi there’)`
})

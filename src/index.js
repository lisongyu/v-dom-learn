import h from './mysnabbdom/h.js'

var myVode1 = h('div', {}, [
  h('p', {}, '哈哈')
])

var myVode2 = h('ul', {}, [
  h('li', {}, '苹果'),
  h('li', {}, '西瓜'),
  h('li', {}, '香蕉')


])
console.log(myVode2)
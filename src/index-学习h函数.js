import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";
const patch = init([classModule, propsModule, styleModule, eventListenersModule])
var myVnode1 = h('a', {
  props: {
    href: 'http://www.atguigu.com'
  }
}, '尚硅谷')
var myVnode2 = h('div', {}, '我是一个盒子')
var myVnode3 = h('ul', [
  h('li', '苹果'),
  h('li', '西瓜'),
  h('li', '香蕉')


])
console.log(myVnode1)
const container = document.getElementById('container')
patch(container, myVnode3)
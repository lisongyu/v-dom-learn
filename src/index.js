import h from './mysnabbdom/h.js'
import patch from './mysnabbdom/patch.js'

const myVnode1 = h('ul', {}, [
  h('li', { key: 'A' }, 'A'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'D' }, 'D')
]);

// const myVnode2 = h('ul', {}, [
//   h('li', { key: 'A' }, 'A'),
//   h('li', { key: 'B' }, 'B'),
//   h('li', { key: 'C' }, 'C'),
// ]);
const myVnode2 = h('ul', {}, '你好');
const container = document.getElementById('container');
const btn = document.getElementById('btn');
patch(container, myVnode1)
btn.onclick = function () {
  patch(myVnode1, myVnode2)
}

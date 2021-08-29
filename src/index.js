import h from './mysnabbdom/h.js'
import patch from './mysnabbdom/patch.js'

const myVnode1=h('ul',{},[
  h('li',{},'A'),
  h('li',{},'B'),
  h('li',{},'C'),
  h('li',{},'D')
]);
const container=document.getElementById('container');
patch(container,myVnode1)

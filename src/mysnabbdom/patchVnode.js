import createElement from "./createElement";
import updateChildren from "./updateChildren";
export default function patchVnode(oldVnode, newVnode) {
  // 判断新旧vnode是否是同一个对象
  if (oldVnode === newVnode) {
    return
  }
  // 判断新vnode有没有text属性
  if (newVnode.text != undefined && newVnode.children == undefined ||
    newVnode.children.length === 0) {
    console.log('新vnode有text属性')
    if (newVnode.text != oldVnode.text) {
      // 如果新虚拟节点中的text和老得虚拟节点的text不同，那么直接让你的text写入老的
      // elm中即可。
      oldVnode.elm.innerText = newVnode.text;
    }
  } else {
    // 新vnode没有text属性
    console.log('新vnode没有text属性')
    // 判断老得有没有children
    if (oldVnode.children != undefined && oldVnode.children.length > 0) {
      // 老得有children,此时就是最复杂的情况，就是新老都有children
      updateChildren(oldVnode.elm,oldVnode.children,newVnode.children)
    

    } else {
      // 老得没有children，新的有children
      // 新空老得节点的内容
      oldVnode.elm.innerHTML = '';
      // 遍历新的vnode的子节点，创建Dom,上树
      for (let i = 0; i < newVnode.children.length; i++) {
        let dom = createElement(newVnode.children[i]);
        oldVnode.elm.appendChild(dom)
      }
    }
  }
}
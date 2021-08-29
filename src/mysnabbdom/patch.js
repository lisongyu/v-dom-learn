import vnode from './vnode.js'
import createElement from './createElement.js'
export default function(oldVnode,newVnode){
    // 判断传入的第一个参数，是DOM节点还是虚拟节点？
    if(oldVnode.sel==''||oldVnode.sel==undefined){
        // DOM 节点 ，此时要包装为虚拟节点
        oldVnode=vnode(oldVnode.tagName.toLowerCase(),{},[],undefined,
        oldVnode)
    }
    if(oldVnode.key==newVnode.key&&oldVnode.sel==newVnode.sel){
        console.log('是同一个节点')
    }else{
        console.log('不是同一个节点，暴力插入新的，删除旧的')
        let newVnodeElm=createElement(newVnode,oldVnode.elm)
        // 插入到老节点之前
        oldVnode.elm.parentNode.insertBefore(newVnodeElm,oldVnode.elm)

    }
}
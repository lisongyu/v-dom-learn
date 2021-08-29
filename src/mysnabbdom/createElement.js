// 真正创建节点,将vnode创建为DOM，不进行插入
export default function (vnode){
    console.log('目的是把虚拟节点',vnode,'插入到标杆',pivot,'前')
    let domNode=document.createElement(vnode.sel)
    // 有子节点还是有文本
    if(vnode.text!=''&&(vnode.children == undefined || vnode.children.length ==0)){
        // 它内部是文字
      
        domNode.innerText=vnode.text;
        
        // 补充elm属性
        vnode.elm=domNode
    }else if(Array.isArray(vnode.children)&&vnode.children.length>0){
        // 它内部是子节点，就是递归创建节点
        for(let i=0;i<node.children.length;i++){
            let ch=vnode.children[i]
            console.log(ch)
        }

    }

    // 返回elm
    return vnode.elm


}
import vnode from './vnode'

// 编写一个低配版本的h函数，这个函数必须接受3个参数，缺一不可
// 也就是调用的形式必须是下面三种之一
// 形态1 h('div',{},'文字')
// 形态2 h('div',{},[])
// 形态3 h('div',{},h())
export default function (sel, data, c) {
  // 检查参数的个数
  if (arguments.length != 3) {
    throw new Error('对不起，h函数必须传入3个参数')
  }
  if (typeof c == 'string' || typeof c == 'number') {
    // 说明现在调用的h函数的形态1
    return vnode(sel, data, undefined, c, undefined)
  } else if (Array.isArray(c)) {
    let children = []
    // 说明现在调用h函数是形态2
    for (let i = 0; i < c.length; i++) {
      if (!(typeof c[i] == 'object' && c[i].hasOwnProperty('sel'))) {
        throw new Error('传入的数组参数中有项不是h函数')
      }
      // 此时只需要收集好就可以了
      children.push(c[i])
    }
    return vnode(sel, data, children, undefined, undefined)
  } else if (typeof c == 'object' && c.hasOwnProperty('sel')) {
    // 说明现在调用h函数是形态3
    let children = [c]
    return vnode(sel, data, children, undefined, undefined)
  } else {
    throw new Error('传入的三个参数类型不对')
  }
}
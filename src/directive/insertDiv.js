// flex的space-between布局中最后补位空div，用法：v-insert-div="{index: index,style:'margin-left: 11px;'}"
// 此指令在news页出现卡浏览器bug，待查找
// 已弃用
let len = 0
export default {
    bind() {
        len = 0
        console.log(123456)
    },
    updated() {
        console.log(789798)
    },
    inserted(el, binding, vnode) {
        if (binding.value.index === 0) {
            // let len = 0
            let clearance = 0
            let everyItemNum = 0
            let num = 0
            len = el.parentNode.children.length
            console.log(len)
            if (len === 1) {
                return
            }
            // 两个item的间隙
            clearance =
                el.nextSibling.getBoundingClientRect().right -
                el.getBoundingClientRect().right -
                el.nextSibling.clientWidth
            // 算出一行有多少个item
            everyItemNum = Math.floor(
                (el.parentNode.clientWidth + clearance) /
                    (el.clientWidth + clearance)
            )
            num = everyItemNum - (len % everyItemNum)
            const div = document.createElement('div')
            div.setAttribute(
                'style',
                'width:' + el.clientWidth + 'px;' + (binding.value.style || '')
            )
            for (let i = 0; i < num; i++) {
                el.parentNode.appendChild(div.cloneNode())
            }
        }
    }
}

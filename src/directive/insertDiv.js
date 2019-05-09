// flex的space-between布局中最后补位空div，用法：v-insert-div:margin-left:11px
export default {
    inserted(el, binding, vnode) {
        let item = el.children[0]
        let len = el.children.length
        let clearance =
            el.children[1].getBoundingClientRect().right -
            item.getBoundingClientRect().right -
            item.clientWidth // 两个item的间隙
        // 算出一行有多少个item
        let everyItemNum = Math.floor(
            (el.clientWidth + clearance) / (item.clientWidth + clearance)
        )
        let num = everyItemNum - (len % everyItemNum)
        let div = document.createElement('div')
        div.setAttribute(
            'style',
            'width:' + item.clientWidth + 'px;' + (binding.arg || '')
        )
        for (let i = 0; i < num; i++) {
            el.appendChild(div.cloneNode())
        }
    }
}

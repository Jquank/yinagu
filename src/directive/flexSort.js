export default {
    inserted(el, binding, vnode) {
        console.log(vnode.elm)

        // el.appendChild('<div class="item-wrapper"></div>')
        // let item = el.querySelector('.item-wrapper')
        // let num = Math.floor(el.clientWidth / item.clientWidth)
        // let html = el
        // for (let i = 0; i < num; i++) {
        //     html += '<div class="item-wrapper"></div>'
        // }
        // console.log('<' + html.split(']<')[1])
        // el.innerHTML = '<' + html.split(']<')[1]
    }
}

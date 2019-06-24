import jsonp from 'jsonp'
const serverUrl = 'admin.yinagu.com'

export function $jsonp(url, param, fn) {
    // if (Object.prototype.toString.call(param) !== '[object Object]') {
    //     throw TypeError('the second param of $jsonp should be a object')
    // }
    var context = this
    const obj = { name: 'callback' }

    if (!fn) {
        fn = param
        return jsonp(serverUrl + url, obj, fn.bind(context))
    } else {
        param = Object.assign({}, obj, param)
        return jsonp(serverUrl + url, param, fn.bind(context))
    }
}

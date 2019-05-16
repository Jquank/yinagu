import jsonp from 'jsonp'

const serverUrl = 'http://47.110.250.78/api'

export function $jsonp(url, param, fn) {
    if (Object.prototype.toString.call(param) !== '[object Object]') {
        throw TypeError('the second param of $jsonp should be a object')
    }
    var context = this
    const obj = { name: 'callback' }
    param = Object.assign({}, obj, param)
    return jsonp(serverUrl + url, param, fn.bind(context))
}

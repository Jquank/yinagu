export function priceFormat(num) {
  num += ''
  let arr = [...num].reverse()
  let len = arr.length
  if (len < 4) {
    return num + '.00'
  }
  for (let i = 0, j = 0; i < len; i += 3) {
    if (i > 0) {
      j += 3
      arr.splice(j, 0, ',')
      j++
    }
  }
  return arr.reverse().join('') + '.00'
}

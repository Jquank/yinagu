const navMenu = [
  {
    title: '新品',
    router: '/newGoods'
  },
  {
    title: '服装',
    router: '/costume'
  },
  {
    title: '鞋履',
    router: '/newGoods'
  },
  {
    title: '首饰',
    router: '/newGoods'
  },
  {
    title: '配饰',
    router: '/newGoods'
  }
]
const dropDownMenu = {
  '/newGoods': ['服装', '手袋', '鞋履'],
  '/costume': ['1', '2', '3']
}
export { navMenu, dropDownMenu }

import Mock from 'mockjs'

const addr = 'http://abc:3030/api/test'

const data = Mock.mock(addr, {
  'placeholder|5': [
    {
      name: '@name',
      email: '@email',
      color: '@color',
      time: '@time',
      url: Mock.Random.url(),
    },
  ],
})
export default data

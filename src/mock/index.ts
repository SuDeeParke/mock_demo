import Mock from 'mockjs'

const data: object = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      'numRange|0-100': 60,
      'floatNum|1-10.0-3': 5.2,
      'str|1-5': '⭐',
      'strRepeat|3': 'A',
    },
  ],
  'mockTest|5': [
    {
      'key|+1': 1,
      'mockTitle|1': ['哑巴', 'Butter-fly', '肆无忌惮', '摩天大楼', '初学者'],
      'mockContent|1': [
        '你翻译不了我的声响',
        '数码宝贝主题曲',
        '摩天大楼太稀有',
        '像海浪撞破了山丘',
      ],
      'mockAction|1': ['下载', '试听', '喜欢'],
    },
  ],
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

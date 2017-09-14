module.exports = {
    menus: [
      {
        key: 1,
        name: 'Home',
        icon: 'home',
        url: '/home'
      },
      {
        key: 2,
        name: '工具',
        icon: 'laptop',
        child: [
          {
            name: '记账',
            key: 102,
            url: '/cost/create'
          },
          {
            name: '查账',
            key: 103,
            url: '/cost/list'
          },
        ]
      },
      {
        key: 3,
        name: 'Components',
        icon: 'user',
        child: [
          {
            name: 'Cards',
            key: 201,
            url: '/cards'
          },
          {
            name: '选项2',
            key: 202
          },
          {
            name: '选项3',
            key: 203
          },
          {
            name: '选项4',
            key: 204
          }
        ]
      },
    ]
  }

export default [
  {
    path: '/collection',
    layout: false,
    name: 'Collection',
    icon: 'homeOutlined',
    component: './Collection',
  },
  {
    path: '/index',
    layout: false,
    routes: [
      {
        name: 'index',
        path: '/index',
        component: './User/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'home',
    icon: 'homeOutlined',
    component: './Welcome',
  },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   routes: [
  //     {
  //       path: 'admin/sub-page',
  //       name: 'sub-page',
  //       icon: 'smile',
  //       component: './Welcome',
  //     },
  //     {
  //       component: './404',
  //     },
  //   ],
  // },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/Welcome',
  },
  {
    path: '/*',
    redirect: '/Welcome',
  },
  {
    component: './404',
  },
];

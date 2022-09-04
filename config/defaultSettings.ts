import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '小白云工作站',
  // title: '上海师范大学',
  pwa: false,
  logo: 'https://ccdn.goodq.top/caches/82fee4717198948d6253764710980ee2/aHR0cDovL3d3dy55M3EubmV0L3FmeS1jb250ZW50L3VwbG9hZHMvMjAyMS8wNi9lOTI4Nzk3ZTY0NGZjNDE0NWM5YjAzYmRiOWQ3NWExNi0yMTB4MjEwLnBuZw_p_p100_p_3D_p_p100_p_3D.png',
  // logo: 'https://imgsa.baidu.com/forum/pic/item/f2d3572c11dfa9ec12ace86265d0f703908fc1c1.jpg',
  iconfontUrl: '',
};

export default Settings;

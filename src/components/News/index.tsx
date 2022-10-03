import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
import React from 'react';

const data = [
  {
    id: 'ARTIxlxFtYZ9Qp3dJ3hmGIvn220913',
    title: '多国人士认为上海合作组织展现强大生命力 期待习近平主席访问哈萨克斯坦和乌兹别克斯坦',
    focus_date: '2022-09-13 23:17:35',
    url: 'https://news.cctv.com/2022/09/13/ARTIxlxFtYZ9Qp3dJ3hmGIvn220913.shtml',
    image: 'https://p2.img.cctvpic.com/photoworkspace/2022/09/13/2022091323125182732.jpg',
    image2: '',
    image3: '',
    brief:
      '多国人士表示，上海合作组织展现出强大生命力，中国在其中发挥着重要的建设性作用。哈萨克斯坦和乌兹别克斯坦各界人士期待习近平主席访问进一步深化双边务实合作。',
    ext_field: '',
    keywords: '习近平 多国人士 上海合作',
    count: '',
  },
  {
    id: 'ARTIhLaFsVA7qvKR22JP8iRA220913',
    title: '中国这十年：水安全保障能力全面提升',
    focus_date: '2022-09-13 22:57:26',
    url: 'https://news.cctv.com/2022/09/13/ARTIhLaFsVA7qvKR22JP8iRA220913.shtml',
    image: 'https://p4.img.cctvpic.com/photoworkspace/2022/09/13/2022091322555825030.jpg',
    image2: '',
    image3: '',
    brief:
      '9月13日，中共中央宣传部举行“中国这十年”系列主题新闻发布会。水利部负责人介绍了党的十八大以来，我国水利发展成就。',
    ext_field: '',
    keywords: '中国 这十年 水安全',
    count: '',
  },
  {
    id: 'ARTIaD3DNlcEAugpMInBWpDb220913',
    title: '中国这十年：综合国力显著增强',
    focus_date: '2022-09-13 22:49:34',
    url: 'https://news.cctv.com/2022/09/13/ARTIaD3DNlcEAugpMInBWpDb220913.shtml',
    image: 'https://p3.img.cctvpic.com/photoworkspace/2022/09/13/2022091322482423895.jpg',
    image2: '',
    image3: '',
    brief:
      '国家统计局9月13日发布的报告显示，党的十八大以来，我国经济持续健康发展，综合国力显著增强，国际影响力稳步提升。',
    ext_field: '',
    keywords: '中国 这十年 综合国力',
    count: '',
  },
];

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const News: React.FC = () => {
  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
            ]}
            extra={<img width={272} alt="logo" src={item.image} />}
          >
            <List.Item.Meta
              avatar={<Avatar src="http://www.cntv.cn/favicon.ico" />}
              title={<a href={item.url}>{item.title}</a>}
              description={item.keywords}
            />
            {item.brief}
          </List.Item>
        )}
      />
    </div>
  );
};
export default News;

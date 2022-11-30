import { getNewsList } from '@/services/ant-design-pro/api';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
import React, { useEffect, useState } from 'react';

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const News: React.FC = () => {
  const [newsResp, setNewsResp] = useState<API.NewsList>({});
  // const [newsList, setNewsList] = useState<API.NewsDetail[]>([]);

  const get = async () => {
    setNewsResp(await getNewsList());
  };

  useEffect(() => {
    get().then();
  }, []);

  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={newsResp.newsList}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
              <span key="time">{item.focus_date}</span>,
            ]}
            extra={
              <a href={item.url}>
                <img width={272} alt="logo" src={item.image} />
              </a>
            }
          >
            <List.Item.Meta
              avatar={
                <Avatar src="https://sf3-cdn-tos.douyinstatic.com/obj/eden-cn/uhbfnupkbps/toutiao_favicon.ico" />
              }
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

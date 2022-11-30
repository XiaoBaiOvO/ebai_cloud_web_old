import { MoreOutlined, SmileOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import {
  Button,
  Descriptions,
  Divider,
  Dropdown,
  Menu,
  PageHeader,
  Row,
  Tag,
  Timeline,
} from 'antd';
import React from 'react';

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            3rd menu item
          </a>
        ),
      },
    ]}
  />
);

const DropdownMenu = () => (
  <Dropdown key="more" overlay={menu} placement="bottomRight">
    <Button type="text" icon={<MoreOutlined style={{ fontSize: 20 }} />} />
  </Dropdown>
);

const IconLink = ({ src, text }: { src: string; text: string }) => (
  <a className="example-link">
    <img className="example-link-icon" src={src} alt={text} />
    {text}
  </a>
);

const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Row>
    <div style={{ flex: 1 }}>{children}</div>
  </Row>
);

const PersonalInfo: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  // @ts-ignore
  const { currentUser } = initialState;

  return (
    <div>
      <PageHeader
        title={currentUser.name}
        className="site-page-header"
        subTitle="高级会员"
        tags={<Tag color="blue">LV: 60</Tag>}
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2">Operation</Button>,
          <Button key="1" type="primary">
            Primary
          </Button>,
          <DropdownMenu key="more" />,
        ]}
        avatar={{ src: currentUser.avatar }}
      >
        <Content>
          <Divider style={{ marginTop: 0, marginBottom: 10 }} />
          <Descriptions layout="vertical">
            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Telephone">18888888888</Descriptions.Item>
            <Descriptions.Item label="Live">Shanghai, China</Descriptions.Item>
          </Descriptions>
          <Divider style={{ marginTop: 0, marginBottom: 10 }} />{' '}
          <Descriptions layout="vertical">
            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Telephone">18888888888</Descriptions.Item>
            <Descriptions.Item label="Live">Shanghai, China</Descriptions.Item>
          </Descriptions>
          <Divider style={{ marginTop: 0, marginBottom: 20 }} />
          <div>
            <IconLink
              src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
              text=" aaa"
            />
            <Divider type="vertical" />
            <IconLink
              src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
              text=" bbb"
            />
            <Divider type="vertical" />
            <IconLink
              src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
              text=" ccc"
            />
            <Divider type="vertical" />
            <IconLink
              src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
              text=" aaa"
            />
            <Divider type="vertical" />
            <IconLink
              src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
              text=" bbb"
            />
            <Divider type="vertical" />
            <IconLink
              src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
              text=" ccc"
            />
          </div>
          <Divider style={{ marginTop: 20, marginBottom: 20 }} />
          <Timeline>
            <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item color="red">
              <p>Solve initial network problems 1</p>
              <p>Solve initial network problems 2</p>
              <p>Solve initial network problems 3 2015-09-01</p>
            </Timeline.Item>
            <Timeline.Item>
              <p>Technical testing 1</p>
              <p>Technical testing 2</p>
              <p>Technical testing 3 2015-09-01</p>
            </Timeline.Item>
            <Timeline.Item color="gray">
              <p>Technical testing 1</p>
              <p>Technical testing 2</p>
              <p>Technical testing 3 2015-09-01</p>
            </Timeline.Item>
            <Timeline.Item color="gray">
              <p>Technical testing 1</p>
              <p>Technical testing 2</p>
              <p>Technical testing 3 2015-09-01</p>
            </Timeline.Item>
            <Timeline.Item color="#00CCFF" dot={<SmileOutlined />}>
              <p>Custom color testing</p>
            </Timeline.Item>
          </Timeline>
        </Content>
      </PageHeader>
    </div>
  );
};
export default PersonalInfo;

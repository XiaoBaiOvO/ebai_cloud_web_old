import {
  ProForm,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormUploadButton,
} from '@ant-design/pro-components';
import { message } from 'antd';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default () => {
  return (
    <ProForm<{
      class?: string;
      name?: string;
      location?: string;
    }>
      submitter={{}}
      onFinish={async (values) => {
        await waitTime(100);
        console.log(values);
        message.success('提交成功');
      }}
      params={{}}
      request={async () => {
        return {
          class: '2',
          location: '在家',
        };
      }}
    >
      <ProFormSelect
        options={[
          {
            value: '1',
            label: '地科1班',
          },
          {
            value: '2',
            label: '地科2班',
          },
        ]}
        width="md"
        name="class"
        label="班级"
      />
      <ProFormText width="md" name="name" label="姓名" placeholder="请输入姓名" />
      <ProFormRadio.Group label="居住地" name="location" options={['在校', '在家', '居无定所']} />
      <ProFormUploadButton label="健康码" name="healthCode" title="上传健康码" />
      <ProFormUploadButton label="行程卡" name="tripCode" title="上传行程卡" />
    </ProForm>
  );
};

import { CloudFilled } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'Ebai.Cloud Teams',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ebai Cloud Workstations',
          title: 'Ebai Cloud Workstations',
          href: '',
          blankTarget: false,
        },
        {
          key: 'github',
          title: <CloudFilled />,
          href: '',
          blankTarget: false,
        },
        {
          key: 'Author',
          title: 'Ethan & Daisy',
          href: '',
          blankTarget: false,
        },
      ]}
    />
  );
};

export default Footer;

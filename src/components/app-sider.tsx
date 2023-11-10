
import React from 'react';
import { Layout } from 'antd';

const { Sider } = Layout;
const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};

const AppSider: React.FC = () => (
	<Sider style={siderStyle}>Sider</Sider>
);
  
export default AppSider;
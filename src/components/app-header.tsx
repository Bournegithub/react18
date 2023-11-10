import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	height: 64,
	paddingInline: 50,
	lineHeight: '64px',
	backgroundColor: '#7dbcea',
  };

const AppHeader: React.FC = () => (
  <Header style={headerStyle}>Header</Header>
);

export default AppHeader;
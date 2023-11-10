import React from 'react';
import { Layout } from 'antd';

import AppHeader from '../components/app-header';
import AppSider from '../components/app-sider';

const { Content } = Layout;
const contentStyle: React.CSSProperties = {
	textAlign: 'center',
	minHeight: 120,
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#108ee9',
};

const defaultLayout = (props: any) => {
	let children = React.Children.toArray(props?.children);
	return (
		<Layout>
			<AppHeader></AppHeader>
			<Layout hasSider>
				<AppSider></AppSider>
				<Content style={contentStyle}>
					{
						children.map(item => {
							return item
						})
					}
				</Content>
			</Layout>
		</Layout>
	)
};

// const App: React.FC = () => (
//   <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
//     <Layout>
//       <Header style={headerStyle}>Header</Header>
//       <Content style={contentStyle}>Content</Content>
//       <Footer style={footerStyle}>Footer</Footer>
//     </Layout>
//     <Layout>
//       <Header style={headerStyle}>Header</Header>
//       <Layout hasSider>
//         <Sider style={siderStyle}>Sider</Sider>
//         <Content style={contentStyle}>Content</Content>
//       </Layout>
//       <Footer style={footerStyle}>Footer</Footer>
//     </Layout>
//     <Layout>
//       <Header style={headerStyle}>Header</Header>
//       <Layout hasSider>
//         <Content style={contentStyle}>Content</Content>
//         <Sider style={siderStyle}>Sider</Sider>
//       </Layout>
//       <Footer style={footerStyle}>Footer</Footer>
//     </Layout>
//     <Layout>
//       <Sider style={siderStyle}>Sider</Sider>
//       <Layout>
//         <Header style={headerStyle}>Header</Header>
//         <Content style={contentStyle}>Content</Content>
//         <Footer style={footerStyle}>Footer</Footer>
//       </Layout>
//     </Layout>
//   </Space>
// );

export default defaultLayout;
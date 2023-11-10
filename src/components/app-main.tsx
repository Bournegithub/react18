import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;
const contentStyle: React.CSSProperties = {
	textAlign: 'center',
	minHeight: 120,
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#108ee9',
  };



// const connect = function (Component: React.FC): React.FC<Props> {
// 	const ComponentWrapper = function (props: Props): JSX.Element {
// 		return <Component {...props} />;
// 	};

// 	return ComponentWrapper;
// };

const AppMain= () => {
	return (
		<Content style={contentStyle}></Content>
	)
};
  
export default AppMain;
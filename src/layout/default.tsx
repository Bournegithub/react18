// import React, { Fragment, ReactNode } from 'react';


const defaultLayout: () => JSX.Element = () => {
	const content = (
			<div className="default-layout">
				<slot></slot>
			</div>

	);
	return content;
}

export default defaultLayout;


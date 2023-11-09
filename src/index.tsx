import './public-path';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// 严格模式下, 页面会加载两次
root.render(
  <React.StrictMode>
    <BrowserRouter basename={(window as any).__MICRO_APP_BASE_ROUTE__ || '/react18'} >
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
// 去掉严格模式
// root.render(
//   <BrowserRouter>
//       <App />
//   </BrowserRouter>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

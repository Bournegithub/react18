// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import './App.css';
import { useRoutes } from 'react-router';
import routes from './router';
import DefaultLayout from './layout/default';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        {useRoutes(routes)}
      </DefaultLayout>
    </div>
  );
}

export default App;

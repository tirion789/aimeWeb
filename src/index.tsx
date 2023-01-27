import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home';
import './assets/scss/global.scss';

const rootElem = document.getElementById('root');

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  root.render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>,
  );
}

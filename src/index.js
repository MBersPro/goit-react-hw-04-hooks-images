import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { app } from './components/App.module.css';

ReactDOM.render(
  <>
    <App className={app}/>
  </>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './EmojiGenerator';
// import App from './TokenApp';
// import App from './AppEffect';
// import App from './TodoList';
// import App from './UseEffectDemo';
import App from './MemoDemo';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

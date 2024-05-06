import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; // I imported Provider from react-redux
import { store } from './redux/store/store';// I imported the store from redux folder

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap my application with the Provider and pass the Redux store as a prop */}
     <Provider store={store}>
      <App/>
  </Provider>,
  </React.StrictMode>
);

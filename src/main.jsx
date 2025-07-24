import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css';
import './index.css'
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </React.StrictMode>
);



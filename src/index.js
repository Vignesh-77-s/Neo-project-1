import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the import from 'react-dom/client'
import App from './App';
import './index.css';

// Create a root element for the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component using the new createRoot() method
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

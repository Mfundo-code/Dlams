import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Add this import
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
    <style>{`
      body, html, #root {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }
      * {
        box-sizing: border-box;
      }
    `}</style>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
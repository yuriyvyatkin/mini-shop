import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/styles.scss';
import App from './App';

let root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

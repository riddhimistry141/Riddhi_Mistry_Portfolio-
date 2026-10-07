import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
//import App1 from './App1.tsx';
import './index.css';
//import './index1.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <App1 /> */}
  </StrictMode>
);

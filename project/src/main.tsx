import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext';
import { initAnalytics } from './lib/analytics';
import App from './App';
import './index.css';

initAnalytics();

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined;

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <DarkModeProvider>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </DarkModeProvider>
  </StrictMode>
);

if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}

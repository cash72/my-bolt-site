import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import DisclaimerPage from './pages/DisclaimerPage';
import MaterialLandingPage from './pages/MaterialLandingPage';
import GuidePage from './pages/GuidePage';
import GuidesIndexPage from './pages/GuidesIndexPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="disclaimer" element={<DisclaimerPage />} />
        <Route path="guides" element={<GuidesIndexPage />} />
        <Route path="guides/:slug" element={<GuidePage />} />
        <Route path=":slug" element={<MaterialLandingPage />} />
      </Route>
    </Routes>
  );
}

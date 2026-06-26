import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import DisclaimerPage from './pages/DisclaimerPage';
import ConversionLandingPage from './pages/ConversionLandingPage';
import ConversionsHubPage from './pages/ConversionsHubPage';
import GuidesIndexPage from './pages/GuidesIndexPage';
import GuidePageRoute from './pages/GuidePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="conversions" element={<ConversionsHubPage />} />
        <Route path="guides" element={<GuidesIndexPage />} />
        <Route path="guides/:guideSlug" element={<GuidePageRoute />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="disclaimer" element={<DisclaimerPage />} />
        <Route path=":slug" element={<ConversionLandingPage />} />
      </Route>
    </Routes>
  );
}

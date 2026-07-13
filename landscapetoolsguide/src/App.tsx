import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ToolsIndexPage from './pages/ToolsIndexPage';
import ToolPage from './pages/ToolPage';
import CompareIndexPage from './pages/CompareIndexPage';
import ComparePage from './pages/ComparePage';
import AlternativesPage from './pages/AlternativesPage';
import BestPage from './pages/BestPage';
import GuidesIndexPage from './pages/GuidesIndexPage';
import GuidePage from './pages/GuidePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import DisclaimerPage from './pages/DisclaimerPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tools" element={<ToolsIndexPage />} />
        <Route path="tools/:slug" element={<ToolPage />} />
        <Route path="compare" element={<CompareIndexPage />} />
        <Route path="compare/:slug" element={<ComparePage />} />
        <Route path="alternatives/:slug" element={<AlternativesPage />} />
        <Route path="best/:slug" element={<BestPage />} />
        <Route path="guides" element={<GuidesIndexPage />} />
        <Route path="guides/:slug" element={<GuidePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="disclaimer" element={<DisclaimerPage />} />
      </Route>
    </Routes>
  );
}

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import DisclaimerPage from './pages/DisclaimerPage';
import ToolLandingPage from './pages/ToolLandingPage';
import RecipesIndexPage from './pages/RecipesIndexPage';
import RecipePage from './pages/RecipePage';
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
        <Route path="recipes" element={<RecipesIndexPage />} />
        <Route path="recipes/:slug" element={<RecipePage />} />
        <Route path="guides" element={<GuidesIndexPage />} />
        <Route path="guides/:slug" element={<GuidePage />} />
        <Route path=":slug" element={<ToolLandingPage />} />
      </Route>
    </Routes>
  );
}

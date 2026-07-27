import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import DisclaimerPage from './pages/DisclaimerPage';
import TermsPage from './pages/TermsPage';
import ToolLandingPage from './pages/ToolLandingPage';
import RecipesIndexPage from './pages/RecipesIndexPage';
import RecipePage from './pages/RecipePage';
import RecipeHubPage from './pages/RecipeHubPage';
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
        <Route path="terms" element={<TermsPage />} />
        <Route path="recipes" element={<RecipesIndexPage />} />
        <Route path="recipes/breakfast" element={<RecipeHubPage hubId="breakfast" />} />
        <Route path="recipes/lunch" element={<RecipeHubPage hubId="lunch" />} />
        <Route path="recipes/dinner" element={<RecipeHubPage hubId="dinner" />} />
        <Route path="recipes/snack" element={<RecipeHubPage hubId="snack" />} />
        <Route path="recipes/keto" element={<RecipeHubPage hubId="keto" />} />
        <Route path="recipes/under-10g-net-carbs" element={<RecipeHubPage hubId="under-10g-net-carbs" />} />
        <Route path="recipes/:slug" element={<RecipePage />} />
        <Route path="guides" element={<GuidesIndexPage />} />
        <Route path="guides/:slug" element={<GuidePage />} />
        <Route path=":slug" element={<ToolLandingPage />} />
      </Route>
    </Routes>
  );
}

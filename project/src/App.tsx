import { lazy, Suspense, type ReactNode } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PageLoader from './components/PageLoader';
import HomePage from './pages/HomePage';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const DisclaimerPage = lazy(() => import('./pages/DisclaimerPage'));
const ConversionLandingPage = lazy(() => import('./pages/ConversionLandingPage'));
const ConversionsHubPage = lazy(() => import('./pages/ConversionsHubPage'));
const BitcoinFeeCalculatorPage = lazy(() => import('./pages/BitcoinFeeCalculatorPage'));
const GuidesIndexPage = lazy(() => import('./pages/GuidesIndexPage'));
const GuidePageRoute = lazy(() => import('./pages/GuidePage'));

function LazyPage({ children }: { children: ReactNode }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="conversions"
          element={
            <LazyPage>
              <ConversionsHubPage />
            </LazyPage>
          }
        />
        <Route
          path="bitcoin-fee-calculator"
          element={
            <LazyPage>
              <BitcoinFeeCalculatorPage />
            </LazyPage>
          }
        />
        <Route
          path="guides"
          element={
            <LazyPage>
              <GuidesIndexPage />
            </LazyPage>
          }
        />
        <Route
          path="guides/:guideSlug"
          element={
            <LazyPage>
              <GuidePageRoute />
            </LazyPage>
          }
        />
        <Route
          path="about"
          element={
            <LazyPage>
              <AboutPage />
            </LazyPage>
          }
        />
        <Route
          path="contact"
          element={
            <LazyPage>
              <ContactPage />
            </LazyPage>
          }
        />
        <Route
          path="privacy"
          element={
            <LazyPage>
              <PrivacyPage />
            </LazyPage>
          }
        />
        <Route
          path="disclaimer"
          element={
            <LazyPage>
              <DisclaimerPage />
            </LazyPage>
          }
        />
        <Route
          path=":slug"
          element={
            <LazyPage>
              <ConversionLandingPage />
            </LazyPage>
          }
        />
      </Route>
    </Routes>
  );
}

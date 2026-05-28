import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./services/ScrollToTop";
import SiteLoader from "./Components/Loader/SiteLoader";

// Lazy-loaded routes — reduces initial bundle size and parse time on mobile
const HomePage = lazy(() => import("./Pages/HomePage"));
const Portfolio = lazy(() => import("./Pages/Portfolio"));
const ContactUs = lazy(() => import("./sections/ContactUs"));
const AboutCompany = lazy(() => import("./Components/company/AboutCompany"));
const Awards = lazy(() => import("./Components/company/Awards"));
const Careers = lazy(() => import("./Components/company/Careers"));
const ChooseUs = lazy(() => import("./Components/company/ChooseUs"));
const FAQ = lazy(() => import("./Components/company/FAQ"));
const LeadershipTeam = lazy(() => import("./Components/company/LeadershipTeam"));
const Locations = lazy(() => import("./Components/company/Locations"));
const Vision = lazy(() => import("./Components/company/Vision"));
const Media = lazy(() => import("./Components/company/Media"));
const BackendDevelopment = lazy(() => import("./Components/itSolutions/BackendDevelopment"));
const FrontendDevelopment = lazy(() => import("./Components/itSolutions/FrontendDevelopment"));
const GoogleAds = lazy(() => import("./Components/itSolutions/GoogleAds"));
const ReactDevelopment = lazy(() => import("./Components/itSolutions/ReactDevelopment"));
const SEOoptimization = lazy(() => import("./Components/itSolutions/SEOoptimization"));
const SoftwareMaintenance = lazy(() => import("./Components/itSolutions/SoftwareMaintenance"));
const UIUX = lazy(() => import("./Components/itSolutions/UIUX"));
const WebDevelopment = lazy(() => import("./Components/itSolutions/WebDevelopment"));
import Footer from "./Components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="">
      {loading && <SiteLoader />}
      <Router>
        <ScrollToTop />
        <Navbar />
        <div>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contactus" element={<ContactUs />} />

              {/* Company Routes */}
              <Route path="/company/aboutcompany" element={<AboutCompany />} />
              <Route path="/company/awards" element={<Awards />} />
              <Route path="/company/careers" element={<Careers />} />
              <Route path="/company/why-choose-us" element={<ChooseUs />} />
              <Route path="/company/faq" element={<FAQ />} />
              <Route path="/company/team" element={<LeadershipTeam />} />
              <Route path="/company/locations" element={<Locations />} />
              <Route path="/company/vision-mission" element={<Vision />} />
              <Route path="/company/media" element={<Media />} />

              {/* It solutions */}
              <Route
                path="/solutions/backend-development"
                element={<BackendDevelopment />}
              />
              <Route
                path="/solutions/frontend-development"
                element={<FrontendDevelopment />}
              />
              <Route
                path="/solutions/google-advertising"
                element={<GoogleAds />}
              />
              <Route
                path="/solutions/react-development"
                element={<ReactDevelopment />}
              />
              <Route
                path="/solutions/seo-optimization"
                element={<SEOoptimization />}
              />
              <Route
                path="/solutions/software-maintenanace"
                element={<SoftwareMaintenance />}
              />
              <Route path="/solutions/ui-ux" element={<UIUX />} />
              <Route
                path="/solutions/web-development"
                element={<WebDevelopment />}
              />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;


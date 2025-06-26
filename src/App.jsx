import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Portfolio from "./Pages/Portfolio";
import ContactUs from "./sections/ContactUs";
import AboutCompany from "./Components/company/AboutCompany";
import Awards from "./Components/company/Awards";
import Careers from "./Components/company/Careers";
import ChooseUs from "./Components/company/ChooseUs";
import FAQ from "./Components/company/FAQ";
import LeadershipTeam from "./Components/company/LeadershipTeam";
import Locations from "./Components/company/Locations";
import Vision from "./Components/company/Vision";
import Media from "./Components/company/Media";
import BackendDevelopment from "./Components/itSolutions/BackendDevelopment";
import FrontendDevelopment from "./Components/itSolutions/FrontendDevelopment";
import GoogleAds from "./Components/itSolutions/GoogleAds";
import ReactDevelopment from "./Components/itSolutions/ReactDevelopment";
import SEOoptimization from "./Components/itSolutions/SEOoptimization";
import SoftwareMaintenance from "./Components/itSolutions/SoftwareMaintenance";
import UIUX from "./Components/itSolutions/UIUX";
import WebDevelopment from "./Components/itSolutions/WebDevelopment";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import ScrollToTop from "./services/ScrollToTop";
import SiteLoader from "./Components/Loader/SiteLoader";

const App = () => {
  const [loading, setLoading] = useState(true);
   useEffect(() => {
    // Simulate content loading (e.g., fetching data, loading other components)
    // In a real application, you'd replace this with actual data fetching logic.
    const timer = setTimeout(() => {
      setLoading(false); // Hide the loader after a simulated delay
    }, 500); // Adjust this delay based on your typical load time

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);
  return (
    <div className="">
       {loading && <SiteLoader />} Conditionally render the loader
      <Router>
        <ScrollToTop/>
        <Navbar />
        <div>
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
        </div>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;

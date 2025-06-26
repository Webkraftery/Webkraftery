import React, { useEffect, useRef } from "react";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Clients from "../sections/Clients";
import OurValues from "../sections/OurValues";
import OurCompany from "../sections/OurCompany";
import TestimonialsSection from "../sections/TestimonialsSection";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Test from "../sections/Test";
import CTA from "../Components/Common/CTA";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const navigate = useNavigate();
  const sectionRefs = useRef([]);


  return (
    <div className="relative min-h-screen  text-white overflow-x-hidden bg-white">
      <div className="relative  ">
        {/* Hero (No scroll animation) */}
        <div className="z-10">
          <Hero />
        </div>

        {/* Animated sections */}
        <div  className=" z-10" >
          <OurCompany />
        </div>
        <div  className="-mt-1 z-10" >
          <Services />
        </div>
        <div  className="-mt-1 z-10" >
          <OurValues />
        </div>
        <div  className="-mt-1 z-10" >
          <TestimonialsSection />
        </div>
         

        {/* Final CTA - clean and solid look */}
        <CTA/>
      </div>
    </div>
  );
};

export default HomePage;

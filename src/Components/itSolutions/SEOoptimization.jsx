import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/SEO1.jpeg'
import img2 from '../../assets/seo2.jpeg'

gsap.registerPlugin(ScrollTrigger);

const SEOoptimization = () => {
  const navigate = useNavigate();
  const heroTextRef = useRef(null); // Ref for the hero section text
  const heroImageRef = useRef(null); // Ref for the hero section image
  const section2Ref = useRef(null); // Ref for the second content section (text)
  const section2ImageRef = useRef(null); // Ref for the second content section (image)
  const ctaRef = useRef(null);         // Ref for the Call to Action section

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.2, ease: 'power3.out' } });

    // Initial animation for the hero section (text and first image)
    tl.fromTo(
      heroTextRef.current,
      { x: -100, opacity: 0, scale: 0.9 },
      { x: 0, opacity: 1, scale: 1 }
    )
    .fromTo(
      heroImageRef.current,
      { x: 100, opacity: 0, scale: 0.9 },
      { x: 0, opacity: 1, scale: 1 },
      '-=0.8'
    );

    // Scroll-triggered animations for subsequent sections
    // Section 2 animation (text and image)
    gsap.fromTo(
      section2Ref.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section2Ref.current,
          start: 'top 80%', // When top of trigger hits 80% of viewport
          toggleActions: 'play none none none', // Play animation once
        }
      }
    );

    gsap.fromTo(
      section2ImageRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: section2ImageRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );

    // CTA section animation
    gsap.fromTo(
      ctaRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 90%', // Adjust as needed
          toggleActions: 'play none none none',
        }
      }
    );

  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-200 min-h-screen py-2 px-4 sm:px-6 lg:px-8 mt-15">
      <div className="max-w-[90vw] mx-auto rounded-xl shadow-2xl overflow-hidden bg-white">
        {/* Hero Section for SEO Optimization */}
        <div className="paraFont-900 relative p-4 md:p-6 lg:p-8 text-center bg-gradient-to-b from-purple-950 to-purple-300 text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            SEO Optimization
          </h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
            Boost your online visibility and drive organic traffic with our expert SEO strategies.
          </p>
        </div>

        {/* Content Section 1: Introduction to SEO */}
        <div className="noto-serif flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 lg:p-16">
          <div ref={heroTextRef} className="md:w-1/2 text-gray-800">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
              Dominate Search Rankings and Attract More Customers
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              Search Engine Optimization (SEO) is the process of improving your website's visibility on search engines like Google. Our comprehensive SEO services are designed to help your business rank higher for relevant keywords, attract qualified organic traffic, and convert visitors into loyal customers.
            </p>
            <p className="text-purple-900 font-semibold mb-2">Our SEO Process Includes:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>In-depth Keyword Research & Analysis</li>
              <li>On-Page SEO Optimization (Content, Meta Tags, Structure)</li>
              <li>Technical SEO Audits & Fixes (Site Speed, Mobile-Friendliness)</li>
              <li>Off-Page SEO & Link Building Strategies</li>
              <li>Local SEO for Geographic Targeting</li>
              <li>Regular Performance Monitoring & Reporting</li>
            </ul>
          </div>

          <div ref={heroImageRef} className="md:w-1/2 flex justify-center items-center">
            <img
              src={img1}
              alt="SEO Optimization Illustration"
              className="w-full h-auto rounded-lg shadow-xl border border-purple-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/8B5CF6/ffffff?text=SEO+Image"; }} // Fallback
            />
          </div>
        </div>

        {/* Content Section 2: Why SEO is Crucial */}
        <div ref={section2Ref} className="noto-serif flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 lg:p-16 bg-purple-50 rounded-b-xl">
          <div ref={section2ImageRef} className="md:w-1/2 flex justify-center items-center">
            <img
              src={img2}
              alt="SEO Benefits Illustration"
              className="w-full h-auto rounded-lg shadow-xl border border-purple-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/8B5CF6/ffffff?text=SEO+Benefits"; }} // Fallback
            />
          </div>
          <div className="md:w-1/2 text-gray-800">
            <h3 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
              The Long-Term Benefits of Effective SEO
            </h3>
            <p className="mb-4 text-lg leading-relaxed">
              Unlike paid advertising, SEO provides sustainable, long-term results. By improving your organic search rankings, you build credibility and trust with your audience. This leads to consistent, high-quality traffic to your website without ongoing ad spend.
            </p>
            <p className="text-lg leading-relaxed">
              Effective SEO also enhances user experience, making your website faster, more mobile-friendly, and easier to navigate. These improvements not only please search engines but also keep your visitors engaged, ultimately boosting conversions and brand authority.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Increased Organic Traffic & Visibility</li>
              <li>Higher Brand Credibility & Trust</li>
              <li>Improved User Experience (UX)</li>
              <li>Cost-Effective Long-Term Marketing</li>
              <li>Better Return on Investment (ROI)</li>
            </ul>
          </div>
        </div>

        {/* Call to Action or Additional Info */}
        <div ref={ctaRef} className="paraFont-900 bg-gradient-to-t from-purple-950 to-purple-300 text-white p-8 md:p-12 lg:p-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to climb the search rankings?</h3>
          <p className="text-lg mb-6">
            Let's craft an SEO strategy that gets your business noticed and drives real results.
          </p>
          <button onClick={()=>{navigate('/contactus')}}
          className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-100 hover:text-purple-900 transition-colors duration-300">
            Get a Free SEO Audit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SEOoptimization;

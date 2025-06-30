import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/About1.jpg'
import img2 from '../../assets/About2.jpg'
import CTA from '../Common/CTA';
gsap.registerPlugin(ScrollTrigger);

const AboutCompany = () => {
  const navigate = useNavigate();
  // Refs for GSAP animations
  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);
  const servicesHeadingRef = useRef(null);
  const servicesListRef = useRef(null);
  const approachHeadingRef = useRef(null);
  const approachListRef = useRef(null);
  const approachImageRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Initial hero section animation
    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });

    tl.fromTo(
      heroTextRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 }
    )
    .fromTo(
      heroImageRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1 },
      '-=0.6' // Stagger this animation slightly after the text
    );

    // Scroll-triggered animations for subsequent sections
    // Services section animations
    gsap.fromTo(
      servicesHeadingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: servicesHeadingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      servicesListRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: servicesListRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Approach section animations
    gsap.fromTo(
      approachHeadingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: approachHeadingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      approachListRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: approachListRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      approachImageRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: approachImageRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    // CTA section animation
    gsap.fromTo(
      ctaRef.current,
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );

  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-100 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* Hero Section: Modern & Engaging */}
        <section className=" paraFont-600 relative overflow-hidden bg-gradient-to-r from-purple-700 to-purple-800 text-white rounded-3xl shadow-xl mb-16 p-8 md:p-16 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div ref={heroTextRef} className="md:w-3/5 text-center md:text-left z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
              WebKraftery: Innovating Your Digital Future
            </h1>
            <p className="text-lg sm:text-xl opacity-95 max-w-2xl mx-auto md:mx-0">
              Empowering businesses with cutting-edge web services that drive growth, enhance user experience, and define digital excellence.
            </p>
            <button className="mt-8 bg-white text-purple-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-purple-100 hover:text-purple-900 transition-all duration-300 transform hover:-translate-y-1">
              Discover Our Solutions
            </button>
          </div>
          <div ref={heroImageRef} className="md:w-2/5 flex justify-center md:justify-end z-10">
            <img
              src={img1}
              alt="webkraftery Innovation"
              className="w-full max-w-sm rounded-lg shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/6D28D9/ffffff?text=Digital+Innovation"; }}
            />
          </div>
          {/* Subtle background graphics */}
          <div className="absolute inset-0 z-0 opacity-10">
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
              <circle cx="20" cy="80" r="15" />
              <circle cx="80" cy="20" r="15" />
              <rect x="0" y="50" width="100" height="2" />
            </svg>
          </div>
        </section>

        {/* Section: Our Expertise - Enhanced Grid Layout */}
        <section className="noto-serif bg-white rounded-2xl shadow-lg p-8 md:p-12 lg:p-16 mb-16">
          <div className="text-center mb-12">
            <h2 ref={servicesHeadingRef} className="text-4xl font-extrabold text-purple-800 mb-4">
              Full-Spectrum Web Solutions for Every Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At webkraftery, we offer a comprehensive suite of web services designed to elevate your digital presence and drive business success.
            </p>
          </div>

          <div ref={servicesListRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Item 1 */}
            <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-purple-600 text-5xl mb-4">🌐</div> {/* Icon */}
              <h4 className="text-2xl font-bold text-purple-700 mb-2">Custom Website Design & Development</h4>
              <p className="text-gray-700">Crafting responsive, visually stunning, and highly functional websites tailored to your brand.</p>
            </div>
            {/* Service Item 2 */}
            <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-purple-600 text-5xl mb-4">💻</div>
              <h4 className="text-2xl font-bold text-purple-700 mb-2">Frontend & Backend Development</h4>
              <p className="text-gray-700">Building robust and scalable architectures for seamless user experiences and powerful data management.</p>
            </div>
            {/* Service Item 3 */}
            <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-purple-600 text-5xl mb-4">🛒</div>
              <h4 className="text-2xl font-bold text-purple-700 mb-2">E-commerce Solutions</h4>
              <p className="text-gray-700">Developing secure, user-friendly online stores that convert visitors into loyal customers.</p>
            </div>
            {/* Service Item 4 */}
            <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-purple-600 text-5xl mb-4">🎨</div>
              <h4 className="text-2xl font-bold text-purple-700 mb-2">UI/UX Design & Prototyping</h4>
              <p className="text-gray-700">Designing intuitive interfaces and engaging user experiences for maximum impact.</p>
            </div>
            {/* Service Item 5 */}
            <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-purple-600 text-5xl mb-4">📈</div>
              <h4 className="text-2xl font-bold text-purple-700 mb-2">SEO & Digital Marketing</h4>
              <p className="text-gray-700">Improving your online visibility and driving targeted traffic through strategic optimization.</p>
            </div>
            {/* Service Item 6 */}
            <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-purple-600 text-5xl mb-4">🛠️</div>
              <h4 className="text-2xl font-bold text-purple-700 mb-2">Software Maintenance & Support</h4>
              <p className="text-gray-700">Ensuring your digital assets run smoothly with ongoing maintenance and dedicated support.</p>
            </div>
          </div>
        </section>

        {/* Section: Our Approach - Visually Distinct */}
        <section className="noto-serif flex flex-col md:flex-row items-center gap-12 bg-purple-50 rounded-2xl shadow-lg p-8 md:p-12 lg:p-16 mb-16">
          <div ref={approachImageRef} className="md:w-1/2 flex justify-center items-center order-2 md:order-1">
            <img
              src={img2}
              alt="Digital Transformation"
              className="w-full max-w-md h-auto rounded-xl shadow-2xl border-4 border-purple-200 transform -rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/4F46E5/ffffff?text=Our+Approach+Image"; }}
            />
          </div>
          <div className="md:w-1/2 text-gray-800 order-1 md:order-2">
            <h3 ref={approachHeadingRef} className="text-4xl font-extrabold text-purple-800 mb-6 leading-tight">
              Our Collaborative Approach to Digital Transformation
            </h3>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              We partner with businesses to navigate the complexities of the digital world. Our approach is collaborative, agile, and results-oriented, ensuring that every solution we deliver is not just technically sound but also strategically aligned with your long-term objectives. We focus on creating measurable impact.
            </p>
            <ul ref={approachListRef} className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 text-2xl mr-3">✔️</span>
                <p><strong className="text-purple-800">Client-Centric Development:</strong> Your vision is at the core of our process.</p>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 text-2xl mr-3">🚀</span>
                <p><strong className="text-purple-800">Performance & Security First:</strong> Building robust solutions that are fast, secure, and scalable.</p>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 text-2xl mr-3">🤝</span>
                <p><strong className="text-purple-800">Transparent Communication:</strong> Keeping you informed every step of the way.</p>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 text-2xl mr-3">💡</span>
                <p><strong className="text-purple-800">Innovative Solutions:</strong> Leveraging the latest tech to give you a competitive edge.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Call to Action: Prominent & Action-Oriented */}
        <CTA/>

      </div>
    </div>
  );
};

export default AboutCompany;
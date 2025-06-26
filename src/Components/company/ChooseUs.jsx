import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import CTA from '../Common/CTA';

gsap.registerPlugin(ScrollTrigger);

const ChooseUs = () => {
  const navigate = useNavigate();
  // Refs for GSAP animations
  const headingRef = useRef(null);
  const introTextRef = useRef(null);
  const reasonsGridRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Animation for the main heading and intro text
    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });

    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 }
    )
    .fromTo(
      introTextRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1 },
      '-=0.5' // Stagger slightly after the heading
    );

    // Scroll-triggered animation for the reasons grid
    gsap.fromTo(
      reasonsGridRef.current.children, // Animate each child of the grid
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2, // Stagger the animation of each reason card
        scrollTrigger: {
          trigger: reasonsGridRef.current,
          start: 'top 80%', // When the top of the grid enters the viewport
          toggleActions: 'play none none none',
        },
      }
    );

    // Scroll-triggered animation for the CTA section
    gsap.fromTo(
      ctaRef.current,
      { y: 50, opacity: 0, scale: 0.95 },
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
    <div className=" bg-gradient-to-br paraFont-900 from-indigo-50 to-purple-100 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <section className="text-center paraFont-900 mb-16">
          <h1 ref={headingRef} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-purple-800 mb-6 leading-tight">
            Why Partner with WebKraftery?
          </h1>
          <p ref={introTextRef} className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Choosing the right digital partner is crucial for your business success. At WebKraftry, we combine expertise, innovation, and a client-first approach to deliver unparalleled web solutions.
          </p>
        </section>

        {/* Reasons Grid Section */}
        <section ref={reasonsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {/* Reason 1: Unmatched Expertise */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 text-center border border-purple-100">
            <div className="text-6xl mb-4 text-purple-600">💡</div> {/* Icon */}
            <h3 className="text-2xl font-bold text-purple-700 mb-3">
              <span className="block text-indigo-700">Expertise & Innovation</span>
              Cutting-Edge Web Development
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our team comprises seasoned professionals in web development, UI/UX design, and digital marketing. We leverage the latest technologies and innovative strategies to build future-proof solutions that drive your business forward.
            </p>
          </div>

          {/* Reason 2: Tailored Solutions */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 text-center border border-purple-100">
            <div className="text-6xl mb-4 text-purple-600">✨</div> {/* Icon */}
            <h3 className="text-2xl font-bold text-purple-700 mb-3">
              <span className="block text-indigo-700">Custom Solutions</span>
              Designed for Your Success
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We understand that every business is unique. We provide custom web solutions tailored precisely to your specific needs, ensuring your online presence perfectly reflects your brand and achieves your unique objectives.
            </p>
          </div>

          {/* Reason 3: Measurable Results & ROI */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 text-center border border-purple-100">
            <div className="text-6xl mb-4 text-purple-600">📈</div> {/* Icon */}
            <h3 className="text-2xl font-bold text-purple-700 mb-3">
              <span className="block text-indigo-700">Results-Driven Approach</span>
              Maximizing Your ROI
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our focus is on delivering tangible results. From SEO optimization to conversion-focused design, we implement strategies that boost your online visibility, attract more customers, and generate a significant return on investment (ROI).
            </p>
          </div>

          {/* Reason 4: Client-Centric Partnership */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 text-center border border-purple-100">
            <div className="text-6xl mb-4 text-purple-600">🤝</div> {/* Icon */}
            <h3 className="text-2xl font-bold text-purple-700 mb-3">
              <span className="block text-indigo-700">Client-Centric Partnership</span>
              Your Success is Our Priority
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We believe in building long-term partnerships. Our transparent communication, dedicated support, and collaborative process ensure you are always informed and involved, making your journey with us seamless and productive.
            </p>
          </div>

          {/* Reason 5: Scalability & Security */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 text-center border border-purple-100">
            <div className="text-6xl mb-4 text-purple-600">🔒</div> {/* Icon */}
            <h3 className="text-2xl font-bold text-purple-700 mb-3">
              <span className="block text-indigo-700">Scalable & Secure Solutions</span>
              Built for Growth
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We engineer scalable web applications and robust websites that grow with your business. Security is paramount; we implement industry best practices to protect your data and ensure a safe online environment.
            </p>
          </div>

          {/* Reason 6: Comprehensive Service Portfolio */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 text-center border border-purple-100">
            <div className="text-6xl mb-4 text-purple-600">✅</div> {/* Icon */}
            <h3 className="text-2xl font-bold text-purple-700 mb-3">
              <span className="block text-indigo-700">Full-Spectrum Services</span>
              Your One-Stop Digital Partner
            </h3>
            <p className="text-gray-700 leading-relaxed">
              From responsive website design and e-commerce development to ongoing maintenance and digital advertising, WebKraftry offers a complete suite of web services under one roof, simplifying your digital journey.
            </p>
          </div>
        </section>

        {/* Call to Action Section */}
        <CTA/>

      </div>
    </div>
  );
};

export default ChooseUs;

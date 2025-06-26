import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
  // Refs for GSAP animations
  const headingRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const valuesRef = useRef(null);

  useEffect(() => {
    // Animation for the main heading
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    // Scroll-triggered animations for each section
    const sections = [missionRef, visionRef, valuesRef];

    sections.forEach((sectionRef, index) => {
      gsap.fromTo(
        sectionRef.current,
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%', // When the top of the section enters 80% of the viewport
            toggleActions: 'play none none none', // Play animation once
            // Uncomment the line below for debugging ScrollTrigger
            // markers: true,
          },
        }
      );
    });

  }, []);

  return (
    <div className="paraFont-900 bg-gradient-to-br from-indigo-50 to-purple-100 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 ref={headingRef} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 mb-6 leading-tight">
            Our Mission, Vision & Core Values
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            At WebKraftry, our purpose is clear, our future is defined, and our actions are guided by unwavering principles. Discover what drives us.
          </p>
        </section>

        {/* Our Mission Section */}
        <section ref={missionRef} className="bg-white rounded-2xl shadow-lg p-8 md:p-12 lg:p-16 mb-16 border border-purple-100">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3 flex justify-center items-center mb-6 md:mb-0">
              <div className="text-8xl text-indigo-600">🎯</div> {/* Mission Icon */}
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-4">
                Our Mission: Empowering Digital Excellence
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                WebKraftry's mission is to empower businesses of all sizes by providing innovative, high-quality web solutions that drive growth, enhance user engagement, and streamline operations. We are dedicated to transforming digital challenges into opportunities for our clients, ensuring their online presence is not just functional, but truly exceptional.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We achieve this through expert web development, strategic digital marketing, and a relentless commitment to client success.
              </p>
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section ref={visionRef} className="bg-purple-50 rounded-2xl shadow-lg p-8 md:p-12 lg:p-16 mb-16 border border-purple-100">
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="md:w-1/3 flex justify-center items-center mb-6 md:mb-0">
              <div className="text-8xl text-purple-600">🔭</div> {/* Vision Icon */}
            </div>
            <div className="md:w-2/3 text-center md:text-right">
              <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-4">
                Our Vision: Shaping the Future of Web Services
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Our vision at WebKraftry is to be the leading innovator in web services, recognized globally for our cutting-edge solutions, unparalleled client satisfaction, and significant contributions to the digital landscape. We aim to be the go-to partner for businesses seeking to transform their online presence and achieve sustainable digital growth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We envision a future where every business, regardless of size, can harness the full potential of the internet with our support.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section ref={valuesRef} className="bg-white rounded-2xl shadow-lg p-8 md:p-12 lg:p-16 mb-16 border border-purple-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-4">
              Our Core Values: Guiding Principles
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              These values are the foundation of our culture and the compass for our decisions, ensuring we always deliver with integrity and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1: Innovation */}
            <div className="p-6 bg-indigo-50 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-3 text-indigo-700">🚀</div>
              <h3 className="text-xl font-bold text-indigo-800 mb-2">Innovation</h3>
              <p className="text-gray-700">Continuously exploring new technologies and creative solutions to stay ahead.</p>
            </div>
            {/* Value 2: Client Success */}
            <div className="p-6 bg-purple-50 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-3 text-purple-700">🤝</div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Client Success</h3>
              <p className="text-gray-700">Prioritizing our clients' goals and building lasting partnerships based on trust.</p>
            </div>
            {/* Value 3: Integrity */}
            <div className="p-6 bg-indigo-50 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-3 text-indigo-700">✨</div>
              <h3 className="text-xl font-bold text-indigo-800 mb-2">Integrity</h3>
              <p className="text-gray-700">Operating with honesty, transparency, and the highest ethical standards.</p>
            </div>
            {/* Value 4: Excellence */}
            <div className="p-6 bg-purple-50 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-3 text-purple-700">🏆</div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Excellence</h3>
              <p className="text-gray-700">Committing to delivering superior quality in every project and interaction.</p>
            </div>
            {/* Value 5: Collaboration */}
            <div className="p-6 bg-indigo-50 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-3 text-indigo-700">💡</div>
              <h3 className="text-xl font-bold text-indigo-800 mb-2">Collaboration</h3>
              <p className="text-gray-700">Fostering teamwork and open communication, both internally and with clients.</p>
            </div>
            {/* Value 6: Adaptability */}
            <div className="p-6 bg-purple-50 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-3 text-purple-700">🔄</div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Adaptability</h3>
              <p className="text-gray-700">Embracing change and continuously evolving to meet market demands.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Vision;

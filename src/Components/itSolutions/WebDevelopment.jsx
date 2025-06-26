import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import uiux3img from '../../assets/uiux3.jpeg';
import Frontendimg from '../../assets/Frontend1.jpeg';

gsap.registerPlugin(ScrollTrigger);

const WebDevelopment = () => {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);
  const section2Ref = useRef(null);
  const section2ImageRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.2, ease: 'power3.out' } });

    // Animate H1 + subtitle + Content Section 1 together on page load
    tl.fromTo(
      titleRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1 }
    )
      .fromTo(
        subtitleRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, ease: 'back.out(1.7)' },
        '-=0.8'
      )
      .fromTo(
        heroTextRef.current,
        { x: -100, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1 },
        '-=0.8'
      )
      .fromTo(
        heroImageRef.current,
        { x: 100, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1 },
        '-=1'
      );

    // Section 2 (scroll-triggered)
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
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
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
        },
      }
    );

    // CTA
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
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-200 min-h-screen py-2 px-4 sm:px-6 lg:px-8 mt-15">
      <div className="max-w-[90vw] mx-auto rounded-xl shadow-2xl overflow-hidden bg-white">
        {/* Hero Section */}
        <div className="paraFont-900 relative p-4 md:p-6 lg:p-8 text-center bg-gradient-to-b from-purple-950 to-purple-300 text-white">
          <h1
            ref={titleRef}
            className=" text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
          >
            Custom Website Development
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto text-purple-950"
          >
            Crafting bespoke web solutions tailored to your unique brand and business goals.
          </p>
        </div>

        {/* Content Section 1 */}
        <div className="noto-serif flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 lg:p-16">
          <div ref={heroTextRef} className="md:w-1/2 text-gray-800">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
              Build a Unique Online Presence That Converts
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              In today’s digital world, a generic site won’t suffice. Our custom web development delivers a branded, goal-focused experience that attracts users and grows conversions. From performance to design, we create solutions built to last.
            </p>
            <p className="text-purple-900 font-semibold mb-2">What We Offer:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Bespoke Design & Mobile-Friendly Build</li>
              <li>Custom CMS for Effortless Updates</li>
              <li>SEO-Optimized Structure for Visibility</li>
              <li>Scalable Architecture for Future Growth</li>
              <li>Secure E-commerce & Payment Integration</li>
            </ul>
          </div>

          <div ref={heroImageRef} className="md:w-1/2 flex justify-center items-center">
            <img
              src={uiux3img}
              alt="Custom Web Development"
              className="w-full h-auto rounded-lg shadow-xl border border-purple-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/600x400/8B5CF6/ffffff?text=Web+Dev+Image';
              }}
            />
          </div>
        </div>

        {/* Content Section 2 */}
        <div
          ref={section2Ref}
          className="flex noto-serif flex-col md:flex-row items-center gap-10 p-8 md:p-12 lg:p-16 bg-purple-50 rounded-b-xl"
        >
          <div ref={section2ImageRef} className="md:w-1/2 flex justify-center items-center">
            <img
              src={Frontendimg}
              alt="Web Development Process"
              className="w-full h-auto rounded-lg shadow-xl border border-purple-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/600x400/8B5CF6/ffffff?text=Web+Process+Image';
              }}
            />
          </div>
          <div className="md:w-1/2 text-gray-800">
            <h3 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
              Our Collaborative Web Development Process
            </h3>
            <p className="mb-4 text-lg leading-relaxed">
              We work side-by-side with you from idea to deployment. Our agile process means flexibility at every stage—ensuring your website truly reflects your goals and brand values.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Discovery & Planning to define goals</li>
              <li>Creative Design for optimal experience</li>
              <li>Robust Development with quality checks</li>
              <li>Deployment with smooth go-live</li>
              <li>Reliable Maintenance & Support</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div
          ref={ctaRef}
          className="paraFont-900 bg-gradient-to-t from-purple-950 to-purple-300 text-white p-8 md:p-12 lg:p-16 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to build your dream website?
          </h3>
          <p className="text-lg mb-6">
            Let’s discuss your goals and create a high-converting digital presence.
          </p>
          <button
            onClick={() => {
              navigate('/contactus');
            }}
            className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-100 hover:text-purple-900 transition-colors duration-300"
          >
            Get a Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;

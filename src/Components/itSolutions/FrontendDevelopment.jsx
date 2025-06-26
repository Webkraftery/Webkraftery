import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import frontendimg from '../../assets/WEBdesign.jpeg';
import frontendimg2 from '../../assets/Webdesign2.jpeg';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const FrontendDevelopment = () => {
  const navigate = useNavigate();

  const headingRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);
  const section2Ref = useRef(null);
  const section2ImageRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.2, ease: 'power3.out' } });

    // Animate h1 heading (from top)
    tl.fromTo(
      headingRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1 }
    )
      // Animate heroText div (and nested p)
      .fromTo(
        heroTextRef.current,
        { x: -100, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1 },
        ">"
      )
      // Animate paragraph inside heroTextRef with grow effect
      .fromTo(
        heroTextRef.current.querySelector('p'),
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' },
        "<"
      )
      // Animate list items
      .fromTo(
        heroTextRef.current.querySelectorAll('.list-item'),
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.15,
        },
        "<+=0.3"
      )
      // Animate hero image
      .fromTo(
        heroImageRef.current,
        { x: 100, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 1.2 },
        "-=1.2"
      );

    // Section 2 text
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

    // Section 2 image
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

        <div className="relative paraFont-900 p-4 md:p-6 lg:p-8 text-center bg-gradient-to-b from-purple-950 to-purple-300 text-white">
          {/* Heading ref added */}

          <h1 ref={headingRef} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            Frontend Development
          </h1>
          <div ref={heroTextRef}>
            <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
              Crafting stunning, interactive, and user-friendly web interfaces that captivate your audience.
            </p>
          </div>
        </div>

        {/* Content Section 1 */}

        <div className="noto-serif flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 lg:p-16">
          <div ref={heroTextRef} className="md:w-1/2 text-gray-800">

            <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
              Bringing Your Digital Vision to Life
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              Frontend development is all about creating the visual and interactive elements users see and interact with. We design clean, responsive, and animated web interfaces using modern frameworks and libraries like ReactJS, complemented by powerful styling tools like TailwindCSS and Bootstrap.
            </p>
            <p className="text-purple-900 font-semibold mb-2">Our Frontend Expertise:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li className="list-item">ReactJS, Next.js for Dynamic Web Applications</li>
              <li className="list-item">TailwindCSS & Bootstrap for Responsive Styling</li>
              <li className="list-item">GSAP-powered Animations for Engaging User Experiences</li>
              <li className="list-item">Pixel-Perfect and Cross-Browser Compatible Designs</li>
              <li className="list-item">Development of Creative Animated Landing Pages</li>
              <li className="list-item">Performance Optimization for Fast Loading Times</li>
            </ul>
          </div>

          <div ref={heroImageRef} className="md:w-1/2 flex justify-center items-center">
            <img
              src={frontendimg}
              alt="Frontend Development Illustration"
              className="w-full h-auto rounded-lg shadow-xl border border-purple-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/600x400/8B5CF6/ffffff?text=Frontend+Image";
              }}
            />
          </div>
        </div>

        {/* Content Section 2 */}
        <div ref={section2Ref} className="noto-serif flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 lg:p-16 bg-purple-50 rounded-b-xl">
          <div ref={section2ImageRef} className="md:w-1/2 flex justify-center items-center">
            <img
              src={frontendimg2}
              alt="Frontend Development Process Illustration"
              className="w-full h-auto rounded-lg shadow-xl border border-purple-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/600x400/8B5CF6/ffffff?text=Frontend+Process+Image";
              }}
            />
          </div>
          <div className="md:w-1/2 text-gray-800">
            <h3 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
              A User-Centric Approach to Frontend Development
            </h3>
            <p className="mb-4 text-lg leading-relaxed">
              Our development process is deeply integrated with UI/UX principles. We prioritize user experience, ensuring that every interaction is intuitive, efficient, and enjoyable. From initial wireframes to final pixel-perfect implementation, we focus on creating interfaces that not only look great but also perform flawlessly.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Collaborative Design & Development Workflow</li>
              <li>Focus on Performance & Accessibility</li>
              <li>Modular & Reusable Component Architecture</li>
              <li>Thorough Testing for Cross-Browser Compatibility</li>
              <li>Continuous Integration & Deployment Practices</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div ref={ctaRef} className="paraFont-900 bg-gradient-to-t from-purple-950 to-purple-300 text-white p-8 md:p-12 lg:p-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready for a captivating frontend?</h3>
          <p className="text-lg mb-6">
            Let's build an interactive and visually stunning interface that leaves a lasting impression.
          </p>
          <button
            onClick={() => navigate('/contactus')}
            className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-100 hover:text-purple-900 transition-colors duration-300"
          >
            Discuss Your Frontend Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrontendDevelopment;

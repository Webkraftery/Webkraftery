import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import { useNavigate } from 'react-router-dom';
import React1 from '../../assets/React1.png'
import React2 from '../../assets/React2.webp'
gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

const ReactDevelopment = () => {
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

  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-200  min-h-screen py-2 px-4 sm:px-6 lg:px-8 mt-15">
      <div className="max-w-[90vw] mx-auto rounded-xl shadow-2xl overflow-hidden bg-white">
        {/* Hero Section for React Development */}
        <div className="paraFont-900 relative p-4 md:p-6 lg:p-8 text-center bg-gradient-to-b from-purple-950 to-purple-300 text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            React Development
          </h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
            Building dynamic, high-performance, and scalable web applications with the power of React.js.
          </p>
        </div>

        {/* Content Section 1: Why Choose React for Your Next Project? */}
        <div className="flex noto-serif flex-col md:flex-row items-center gap-10 p-8 md:p-12 lg:p-16">
          {/* Text Content */}
          <div ref={heroTextRef} className="md:w-1/2 text-gray-800">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
              Why Choose React for Your Next Project?
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              React.js is a leading JavaScript library for building user interfaces, known for its component-based architecture, virtual DOM, and efficient rendering. It allows developers to create complex UIs from small, isolated pieces of code called "components."
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              At Pryzen Technologies, our expert React developers leverage its robust ecosystem to deliver fast, interactive, and highly maintainable applications. Whether you need a single-page application (SPA), a complex dashboard, or a progressive web app (PWA), React provides the flexibility and performance required.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Component-Based Architecture for Reusability</li>
              <li>Virtual DOM for Optimized Performance</li>
              <li>Strong Community Support and Ecosystem</li>
              <li>Declarative UI for Predictable Code</li>
              <li>Cross-Platform Capabilities with React Native</li>
            </ul>
          </div>

          {/* Image Space */}
          <div ref={heroImageRef} className="md:w-1/2 flex justify-center items-center">
            <img
              src={React1}
              alt="React Development Illustration"
              className="w-full h-auto rounded-lg shadow-xl border border-purple-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/8B5CF6/ffffff?text=Image+Not+Found"; }}
            />
          </div>
        </div>

        {/* Content Section 2: Our React Development Process */}
        <div ref={section2Ref} className="noto-serif flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 lg:p-16 bg-purple-50 rounded-b-xl">
          <div ref={section2ImageRef} className="md:w-1/2 flex justify-center items-center">
            <img
              src={React2}
              alt="React Development Process Illustration"
              className="w-full h-auto rounded-lg shadow-xl border border-purple-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/8B5CF6/ffffff?text=React+Process+Image"; }} // Fallback
            />
          </div>
          <div className="md:w-1/2 text-gray-800">
            <h3 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
              Our Agile React Development Process
            </h3>
            <p className="mb-4 text-lg leading-relaxed">
              We follow an agile and iterative development process to build React applications that are robust, scalable, and perfectly aligned with your business goals. From concept to deployment, our team ensures transparency and collaboration at every stage.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Discovery & Planning: Defining scope and requirements.</li>
              <li>Design & Prototyping: Crafting intuitive UI/UX.</li>
              <li>Component Development: Building reusable React components.</li>
              <li>Testing & Quality Assurance: Ensuring bug-free performance.</li>
              <li>Deployment & Launch: Bringing your application to life.</li>
              <li>Post-Launch Support: Ongoing maintenance and updates.</li>
            </ul>
          </div>
        </div>

        {/* Call to Action or Additional Info */}
        <div ref={ctaRef} className="paraFont-900 bg-gradient-to-t from-purple-950 to-purple-300 text-white p-8 md:p-12 lg:p-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to build with React?</h3>
          <p className="text-lg mb-6">
            Let's discuss your project and see how our React expertise can bring your ideas to life.
          </p>
          <button onClick={()=>{navigate('/contactus')}}
          className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-100 hover:text-purple-900 transition-colors duration-300">
            Get a Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReactDevelopment;

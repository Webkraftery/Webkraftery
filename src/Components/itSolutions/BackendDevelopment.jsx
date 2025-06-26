import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import backendimg1 from "../../assets/Backend1.jpeg";
import backendimg2 from "../../assets/backend2.jpeg";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const BackendDevelopment = () => {
  const navigate = useNavigate();

  // refs for animations
  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);
  const section2Ref = useRef(null);
  const section2ImageRef = useRef(null);
  const ctaRef = useRef(null);

  // refs for heading and paragraph animation
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  // new refs for ul animations
  const ul1Ref = useRef(null);
  const ul2Ref = useRef(null);

useEffect(() => {
  const tl = gsap.timeline({
    defaults: { duration: 1.2, ease: "power3.out" },
  });

  // Animate h1 from top
  tl.fromTo(
    headingRef.current,
    { y: -100, opacity: 0 },
    { y: 0, opacity: 1 }
  )
  // Start paragraph and heroTextRef together AFTER heading animation ends
  .to({}, { duration: 0 }) // a small pause to separate timeline steps cleanly
  .fromTo(
    paragraphRef.current,
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.2 },
    ">"
  )
  .fromTo(
    heroTextRef.current,
    { x: -100, opacity: 0, scale: 0.9 },
    { x: 0, opacity: 1, scale: 1, duration: 1.2 },
    "<" // start exactly at the same time as paragraphRef animation
  )
  // Animate ul1 items inside heroTextRef from top to bottom with stagger
  .fromTo(
    ul1Ref.current.children,
    { y: -20, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.15,
    },
    "<+0.3" // start 0.3 seconds after heroTextRef animation starts
  )
  // Animate heroImageRef from right, overlapping ul1 animation
  .fromTo(
    heroImageRef.current,
    { x: 100, opacity: 0, scale: 0.9 },
    { x: 0, opacity: 1, scale: 1, duration: 1.2 },
    "-=1.2"
  );

  // The rest of your scroll-trigger animations remain unchanged...

}, []);


  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-200 min-h-screen py-2 px-4 sm:px-6 lg:px-8 mt-15">
      <div className="max-w-[90vw] mx-auto rounded-xl shadow-2xl overflow-hidden bg-white">
        {/* Hero Section for Backend Development */}
        <div className="paraFont-900 relative p-4 md:p-6 lg:p-8 text-center bg-gradient-to-b from-purple-950 to-purple-300 text-white">
          <h1
            ref={headingRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
          >
            Backend Development
          </h1>
          <p
            ref={paragraphRef}
            className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto text-purple-950"
          >
            Building robust, secure, and scalable server-side solutions to power
            your applications.
          </p>
        </div>

        {/* Content Section 1 */}
        {/* section 1 load hona chahiye jb heading ref ka contant load hora ho */}
        <div className="noto-serif flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 lg:p-16">
          <div ref={heroTextRef} className="md:w-1/2 text-gray-800">
          {/* ye left se aana chahiye  */}
            <div className="">


              <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
                Powering Your Application with a Strong Backend
              </h2>
              <p className="mb-4 text-lg leading-relaxed">
                We specialize in building reliable, scalable, and efficient
                backend systems using modern technologies like Node.js and
                Express...
              </p>
            </div>
            {/* ul k sabhi items uppar se aane chahie like frontend component  */}
            <ul
              ref={ul1Ref}
              className="list-disc list-inside text-lg text-gray-700 space-y-2"
            >
              <li>RESTful API & server development (Node.js, Express.js)</li>
              <li>Secure authentication & authorization systems</li>
              <li>Database design & integration (MongoDB, MySQL, PostgreSQL)</li>
              <li>Cloud infrastructure setup and management (AWS, Azure, GCP)</li>
              <li>Real-time communication with WebSockets</li>
              <li>Error handling, logging, and performance optimization</li>
            </ul>
          </div>

          <div
            ref={heroImageRef}
            className="md:w-1/2 flex justify-center items-center"
          >
            <img
              src={backendimg1}
              alt="Backend Development Illustration"
              className="w-full h-auto rounded-lg shadow-xl border border-purple-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x400/8B5CF6/ffffff?text=Backend+Development";
              }}
            />
          </div>
        </div>

        {/* Section 2 */}
        <div
          ref={section2Ref}
          className="noto-serif flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 lg:p-16 bg-purple-50 rounded-b-xl"
        >
          <div
            ref={section2ImageRef}
            className="md:w-1/2 flex justify-center items-center"
          >
            <img
              src={backendimg2}
              alt="Backend Development Process Illustration"
              className="w-full h-auto rounded-lg shadow-xl border border-purple-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x400/8B5CF6/ffffff?text=Backend+Process+Image";
              }}
            />
          </div>
          <div className="md:w-1/2 text-gray-800">
            <h3 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
              Our Comprehensive Backend Development Process
            </h3>
            <p className="mb-4 text-lg leading-relaxed">
              We follow a rigorous development methodology to ensure your
              backend is robust, secure, and perfectly aligned...
            </p>
            <ul
              ref={ul2Ref}
              className="list-disc list-inside text-lg text-gray-700 space-y-2"
            >
              <li>Requirements Analysis & System Design</li>
              <li>API Development & Integration</li>
              <li>Database Management & Optimization</li>
              <li>Security Implementation & Testing</li>
              <li>Scalability Planning & Load Balancing</li>
              <li>CI/CD Pipelines</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className="paraFont-900 bg-gradient-to-t from-purple-950 to-purple-300 text-white p-8 md:p-12 lg:p-16 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Need a powerful backend for your app?
          </h3>
          <p className="text-lg mb-6">
            Let's discuss how our backend development expertise can build a
            strong foundation for your digital product.
          </p>
          <button
            onClick={() => {
              navigate("/contactus");
            }}
            className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-100 hover:text-purple-900 transition-colors duration-300"
          >
            Request a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackendDevelopment;

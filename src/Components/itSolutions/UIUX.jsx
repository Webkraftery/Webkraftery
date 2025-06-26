import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/uiux1.jpeg'
import img2 from '../../assets/uiux-4.jpeg'

gsap.registerPlugin(ScrollTrigger);

const UIUX = () => {
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
        {/* Hero Section for UI/UX Designing */}
        <div className="paraFont-900 relative p-4 md:p-6 lg:p-8 text-center bg-gradient-to-b from-purple-950 to-purple-300 text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            UI/UX Designing
          </h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
            Crafting intuitive, engaging, and visually stunning user experiences that captivate your audience.
          </p>
        </div>

        {/* Content Section 1: Why UI/UX Design */}
        <div className="noto-serif flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 lg:p-16">
          <div ref={heroTextRef} className="md:w-1/2 ">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
              Designing Experiences That Delight and Convert
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              User Interface (UI) and User Experience (UX) design are critical for the success of any digital product. We don't just make things look good; we create seamless, intuitive, and enjoyable interactions that lead to higher user satisfaction and better business outcomes.
            </p>
            <p className="text-purple-900 font-semibold mb-2">Our UI/UX Design Process:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>User Research & Persona Development</li>
              <li>Wireframing & Prototyping</li>
              <li>Information Architecture & User Flows</li>
              <li>Visual Design & Branding</li>
              <li>Usability Testing & Iteration</li>
              <li>Accessibility Compliance</li>
            </ul>
          </div>

          <div ref={heroImageRef} className="md:w-1/2 flex justify-center items-center">
            <img
              src={img1}
              alt="UI/UX Design Illustration"
              className="w-full h-auto rounded-lg shadow-xl border border-purple-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/8B5CF6/ffffff?text=UI/UX+Image"; }} // Fallback
            />
          </div>
        </div>

        {/* Content Section 2: Our Approach to UI/UX */}
        <div ref={section2Ref} className="noto-serif flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 lg:p-16 bg-purple-50 rounded-b-xl">
          <div ref={section2ImageRef} className="md:w-1/2 flex justify-center items-center">
            <img
              src={img2}
              alt="User Journey Illustration"
              className="w-full h-auto rounded-lg shadow-xl border border-purple-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/8B5CF6/ffffff?text=User+Journey+Image"; }} // Fallback
            />
          </div>
          <div className="md:w-1/2 text-gray-800">
            <h3 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
              A User-Centered Approach to Design
            </h3>
            <p className="mb-4 text-lg leading-relaxed">
              Our design philosophy is rooted in understanding your users. We conduct thorough research to identify their needs, behaviors, and pain points, ensuring every design decision is informed by real-world insights. This user-centered approach results in products that are not only beautiful but also highly functional and enjoyable to use.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Empathy-Driven Design Thinking</li>
              <li>Iterative Design & Feedback Loops</li>
              <li>Focus on Accessibility & Inclusivity</li>
              <li>Seamless Handoff to Development Teams</li>
              <li>Continuous Improvement Based on Analytics</li>
            </ul>
          </div>
        </div>

        {/* Call to Action or Additional Info */}
        <div ref={ctaRef} className="paraFont-900 bg-gradient-to-t from-purple-950 to-purple-300 text-white p-8 md:p-12 lg:p-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to create an exceptional user experience?</h3>
          <p className="text-lg mb-6">
            Let's design a digital product that truly resonates with your audience and achieves your business goals.
          </p>
          <button onClick={()=>{navigate('/contactus')}}
          className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-100 hover:text-purple-900 transition-colors duration-300">
            Start Your UI/UX Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default UIUX;

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import adimg1 from '../../assets/ADS3.jpeg'; // Assuming this path is correct
import adimg2 from "../../assets/ADS2.jpeg"; // Assuming this path is correct
import adimg3 from "../../assets/ADS5.jpeg"; // Assuming this path is correct
import { useNavigate } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

const GoogleAds = () => {
  const navigate = useNavigate();
  const heroTextRef = useRef(null); // Ref for the hero section text
  const heroImageRef = useRef(null); // Ref for the hero section image
  const section2Ref = useRef(null); // Ref for the second content section
  const section2ImageRef = useRef(null); // Ref for the second image
  const section3Ref = useRef(null); // Ref for the third content section
  const section3ImageRef = useRef(null); // Ref for the third image
  const ctaRef = useRef(null); // Ref for the Call to Action section

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
    // Section 2 animation
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

    // Section 3 animation
    gsap.fromTo(
      section3Ref.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section3Ref.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );

    gsap.fromTo(
      section3ImageRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: section3ImageRef.current,
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
        {/* Hero Section for Google Advertising */}
        <div className="paraFont-900 relative p-4 md:p-6 lg:p-8 text-center bg-gradient-to-b from-purple-950 to-purple-300 text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            Google Advertising
          </h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
            Maximize Your Reach: Drive Targeted Traffic and Boost Your ROI with Google Ads.
          </p>
        </div>

        {/* Content Section 1: Introduction to Google Ads */}
        <div className="noto-serif flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 lg:p-16">
          <div ref={heroTextRef} className="md:w-1/2 text-gray-800">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
              Reach the Right Audience at the Right Time
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              Reach the right audience at the right time with our results-driven Google Ads services.
              We create targeted campaigns that boost visibility, drive qualified traffic, and increase your ROI.
            </p>
            <p className="text-purple-900 font-semibold mb-2">Our Services Include:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Comprehensive Search & Display Ads Management</li>
              <li>Precise Keyword Research & Targeting</li>
              <li>Advanced Conversion Tracking for Better Insights</li>
              <li>Continuous A/B Testing to Optimize Performance</li>
              <li>Remarketing Strategies to Re-engage Users</li>
            </ul>
          </div>

          <div ref={heroImageRef} className="md:w-1/2 flex justify-center items-center">
            <img
              src={adimg1}
              alt="Google Ads Campaign Illustration"
              className="w-full h-auto rounded-lg shadow-xl border border-purple-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/8B5CF6/ffffff?text=Google+Ads+Image"; }} // Fallback
            />
          </div>
        </div>

        {/* Content Section 2: Smart Ad Strategies */}
        <div ref={section2Ref} className="noto-serif flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 lg:p-16 bg-purple-50 rounded-b-xl">
          <div ref={section2ImageRef} className="md:w-1/2 flex justify-center items-center">
            <img
              src={adimg2}
              alt="Ad Strategy Illustration"
              className="w-full h-auto rounded-lg shadow-xl border border-purple-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/8B5CF6/ffffff?text=Ad+Strategy+Image"; }} // Fallback
            />
          </div>
          <div className="md:w-1/2 text-gray-800">
            <h3 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
              Crafting Smart, Data-Driven Ad Strategies
            </h3>
            <p className="mb-4 text-lg leading-relaxed">
              We don't just run ads — we craft campaigns designed to convert. Our team leverages in-depth market research, search intent analysis, competitor data, and audience demographics to build smart, cost-effective strategies that deliver measurable results.
            </p>
            <p className="text-lg leading-relaxed">
              Every campaign is meticulously planned and executed, focusing on maximizing your return on investment and achieving your specific business objectives, whether it's lead generation, sales, or brand awareness.
            </p>
          </div>
        </div>

        {/* Content Section 3: Why Google Ads? */}
        <div ref={section3Ref} className="noto-serif flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 lg:p-16">
          <div className="md:w-1/2 text-gray-800 order-2 md:order-1">
            <h3 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
              Unlock Unmatched Visibility with Google Ads
            </h3>
            <p className="mb-4 text-lg leading-relaxed">
              <span className='text-purple-950 font-semibold'>Google Ads</span> is one of the most powerful and cost-effective
              <span className='text-purple-950 font-semibold'> digital marketing</span> tools available in today’s competitive online landscape.
              With billions of daily <span className='text-purple-950 font-semibold'>Google searches</span>, this advertising platform allows your business
              to reach high-intent users who are actively searching for products or services like yours.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Whether you’re a startup, small business, or an established enterprise,
              <span className='text-purple-950 font-semibold'> Google Ads</span> helps you appear at the top of
              <span className='text-purple-950 font-semibold'> search engine results</span>, driving qualified traffic directly to your website.
              By leveraging <span className='text-purple-950 font-semibold'>keyword targeting</span>,
              <span className='text-purple-950 font-semibold'> location-based ads</span>, and
              <span className='text-purple-950 font-semibold'> custom audience segments</span>, we ensure your brand appears in front of the right people —
              at exactly the right time.
            </p>
            <p className="text-lg leading-relaxed">
              Our strategic approach to <span className='text-purple-950 font-semibold'>PPC (Pay-Per-Click) advertising</span>,
              combined with <span className='text-purple-950 font-semibold'>conversion-optimized landing pages</span>, allows you to maximize ROI
              while reducing unnecessary ad spend. With continuous <span className='text-purple-950 font-semibold'>campaign optimization</span>,
              <span className='text-purple-950 font-semibold'> A/B testing</span>, and
              <span className='text-purple-950 font-semibold'> performance analytics</span>, your business stays one step ahead of the competition.
            </p>
            <p className="text-lg leading-relaxed">
              Let us help you harness the full potential of
              <span className='text-purple-950 font-semibold'> Google search ads</span>,
              <span className='text-purple-950 font-semibold'> display ads</span>, and
              <span className='text-purple-950 font-semibold'> remarketing campaigns</span> to generate more leads, increase sales, and build brand authority.
            </p>
          </div>
          <div ref={section3ImageRef} className="md:w-1/2 flex justify-center items-center order-1 md:order-2">
            <img
              src={adimg3}
              alt="Why Google Ads Illustration"
              className="w-full h-auto rounded-lg shadow-xl border border-purple-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/8B5CF6/ffffff?text=Why+Google+Ads"; }} // Fallback
            />
          </div>
        </div>

        {/* Call to Action or Additional Info */}
        <div ref={ctaRef} className="paraFont-900 bg-gradient-to-t from-purple-950 to-purple-300 text-white p-8 md:p-12 lg:p-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to boost your online presence with Google Ads?</h3>
          <p className="text-lg mb-6">
            Contact us today for a free consultation and let's create a winning advertising strategy for your business.
          </p>
          <button onClick={()=>{navigate('/contactus')}}
          className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-100 hover:text-purple-900 transition-colors duration-300">
            Get a Free Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleAds;

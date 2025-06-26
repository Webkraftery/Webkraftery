import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const navigate = useNavigate();
  // State to manage which FAQ item is open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the open/close state of an FAQ item
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Refs for GSAP animations
  const headingRef = useRef(null);
  const introTextRef = useRef(null);
  const faqContainerRef = useRef(null);
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

    // Scroll-triggered animation for the FAQ container
    gsap.fromTo(
      faqContainerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: faqContainerRef.current,
          start: 'top 80%', // When the top of the container enters the viewport
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

  // Sample FAQ data
  const faqItems = [
    {
      question: 'What types of web services does WebKraftry offer?',
      answer: 'WebKraftry offers a comprehensive suite of web services, including custom website design and development, e-commerce solutions, frontend and backend development, UI/UX design, SEO optimization, digital marketing strategies, and ongoing software maintenance and support. We are your one-stop shop for a robust online presence.'
    },
    {
      question: 'How does WebKraftry approach a new web development project?',
      answer: 'Our approach begins with a deep dive into your business goals and target audience. We follow an agile development methodology, ensuring transparent communication, regular feedback loops, and iterative progress. This client-centric development process guarantees that the final web solution aligns perfectly with your vision and delivers measurable results.'
    },
    {
      question: 'Is SEO included in your web development services?',
      answer: 'Absolutely! SEO optimization is integrated into our web development process from the ground up. We ensure your website is built with SEO best practices, including clean code, mobile responsiveness, fast loading times, and proper keyword integration. We also offer dedicated SEO services to further enhance your search engine rankings and online visibility.'
    },
    {
      question: 'Can you help with e-commerce website development?',
      answer: 'Yes, e-commerce development is one of our core specializations. We build secure, scalable, and user-friendly online stores that are optimized for conversions. Whether you need a new e-commerce platform or an upgrade to an existing one, we provide custom e-commerce solutions that drive sales and enhance the shopping experience.'
    },
    {
      question: 'What kind of ongoing support and maintenance do you provide?',
      answer: 'WebKraftry offers extensive post-launch support and maintenance packages to ensure your website or application remains secure, updated, and performs optimally. This includes security updates, bug fixes, performance monitoring, content updates, and technical assistance. Our goal is to ensure your digital assets continue to function flawlessly and evolve with your business needs.'
    },
    {
      question: 'How long does it take to develop a custom website?',
      answer: 'The timeline for custom website development varies depending on the complexity, features, and specific requirements of your project. After an initial consultation and detailed scope definition, we provide a clear project timeline. Our efficient web development process ensures timely delivery without compromising on quality.'
    },
  ];

  return (
    <div className="paraFont-900 bg-gradient-to-br from-indigo-50 to-purple-100 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 ref={headingRef} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-purple-800 mb-6 leading-tight">
            Frequently Asked Questions
          </h1>
          <p ref={introTextRef} className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about WebKraftry's web development, digital marketing, and IT services. If you don't see your question here, feel free to contact us!
          </p>
        </section>

        {/* FAQ Accordion Section */}
        <section ref={faqContainerRef} className="bg-white rounded-2xl shadow-lg p-8 md:p-12 lg:p-16 mb-16 border border-purple-100">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0 py-4">
              <button
                className="flex justify-between items-center w-full text-left py-2 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-xl font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                  {item.question}
                </span>
                <span className="text-2xl text-gray-600">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-2 pb-2 text-gray-700 text-lg leading-relaxed animate-fade-in">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Call to Action Section */}
        <section ref={ctaRef} className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl shadow-xl p-10 md:p-16 text-center">
          <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
            Still Have Questions? We're Here to Help!
          </h3>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto opacity-95">
            Don't hesitate to reach out to our team for personalized assistance regarding our web services or your specific project needs.
          </p>
          <button onClick={()=>{navigate('/contactus')}}
          className="bg-white text-purple-700 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-purple-100 hover:text-purple-900 transition-all duration-300 transform hover:scale-105">
            Contact WebKraftry 
          </button>
        </section>

      </div>
    </div>
  );
};

export default FAQ;

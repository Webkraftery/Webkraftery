// src/components/Services.jsx

import React, { useRef } from 'react'; // Import useRef
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles (These are essential for Swiper's core functionality and layout)
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

/**
 * Service data array. This is a clean, structured way to manage your content.
 * Using a simple object for each service with a title, description, and SVG path.
 */
const serviceData = [
  {
    title: 'Custom Website Development',
    description: 'Crafting bespoke web solutions tailored to your unique business needs and goals.',
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
  {
    title: 'Backend Development',
    description: 'Building robust and scalable server-side logic and databases to power your applications.',
    iconPath: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    title: 'Frontend Development',
    description: 'Creating engaging and intuitive user interfaces that provide seamless and enjoyable experiences.',
    iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  },
  {
    title: 'React Development',
    description: 'Leveraging the power of React.js to build fast, interactive, and modern single-page applications.',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting intuitive and engaging user interfaces (UI) and user experiences (UX) that captivate your audience.',
    iconPath: 'M9.75 17L9 20l-1 1h6l-1-1l-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    title: 'Software Maintenance & Support',
    description: 'Ensuring your software runs smoothly with ongoing maintenance, updates, and dedicated support.',
    iconPath: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
  },
  {
    title: 'SEO Optimization',
    description: 'Increase your online visibility and attract more organic traffic with our comprehensive SEO services.',
    iconPath: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  },
  {
    title: 'Advertising',
    description: 'Drive immediate, targeted traffic to your website with expertly managed Google advertising campaigns.',
    iconPath: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
  },
];

/**
 * Reusable component for the SVG icons.
 * This keeps the main JSX cleaner and makes icons easier to manage.
 */
const ServiceIcon = ({ path }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-purple-700 mb-6 transition-transform duration-500 group-hover:scale-110"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

/**
 * The main Services component, featuring a responsive Swiper carousel.
 */
const Services = () => {
  // 1. Create refs for the custom navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Our <span className="text-purple-600">Cutting-Edge</span> Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to deployment, we deliver powerful digital solutions that drive growth.
          </p>
        </header>

        {/* Swiper Carousel Component */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-custom',
            // Use a render function to apply Tailwind CSS classes to the bullets
            renderBullet: function (index, className) {
                return `<span class="${className} !bg-purple-300 opacity-90 transition-all duration-300 w-2.5 h-2.5 rounded-full mx-2 !m-0 !mr-2 swiper-pagination-bullet-active:!bg-purple-600 swiper-pagination-bullet-active:w-3.5 swiper-pagination-bullet-active:h-3.5 swiper-pagination-bullet-active:shadow-md"></span>`;
            },
          }}
          // 2. Set the navigation to use the refs instead of selectors
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          // 3. Use `onInit` to ensure the refs are available when the Swiper instance is created
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="relative pb-16"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {/* Map through the service data to create Swiper slides */}
          {serviceData.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center h-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer group">
                <ServiceIcon path={service.iconPath} />
                <h3 className="text-3xl font-bold text-gray-900 mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-600 flex-grow text-lg">{service.description}</p>
              </div>
            </SwiperSlide>
          ))}

          {/* 4. Attach the refs to the custom navigation buttons */}
          <div
            ref={prevRef} // Attach ref to the button element
            className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-4 z-20 flex items-center justify-center w-12 h-12 rounded-full cursor-pointer transition-all duration-300 bg-gray-100 text-gray-700 border border-gray-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </div>
          <div
            ref={nextRef} // Attach ref to the button element
            className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-4 z-20 flex items-center justify-center w-12 h-12 rounded-full cursor-pointer transition-all duration-300 bg-gray-100 text-gray-700 border border-gray-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>

          {/* Custom Pagination container - Positioned at the bottom center */}
          <div className="swiper-pagination-custom absolute bottom-4 inset-x-0 flex justify-center items-center z-10"></div>
        </Swiper>
        
        {/* Footer/Call to Action */}
        <footer className="mt-20 text-center text-gray-500">
          <p className="text-lg font-medium">
            Ready to build something amazing? <a href="#contact" className="text-purple-600 hover:text-purple-800 transition-colors font-bold">Let's talk.</a>
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Services;
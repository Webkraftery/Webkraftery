import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { gsap } from 'gsap';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const TestimonialsSection = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(".swiper-slide", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.7,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      quote: "WebKraftery transformed our online presence. Their expertise and dedication are truly remarkable. We saw a significant increase in engagement and conversions.",
      author: "Jane Doe",
      title: "CEO of InnovateCorp",
      avatar: "https://placehold.co/100x100/A78BFA/ffffff?text=JD"
    },
    {
      quote: "The team at WebKraftery delivered a stunning e-commerce platform that exceeded our expectations. Their communication and support throughout the project were exceptional.",
      author: "John Smith",
      title: "Founder of E-Shop Solutions",
      avatar: "https://placehold.co/100x100/8B5CF6/ffffff?text=JS"
    },
    {
      quote: "Working with WebKraftery was a seamless experience. Their game development skills are top-notch, and they brought our vision to life perfectly.",
      author: "Emily White",
      title: "Game Studio Lead",
      avatar: "https://placehold.co/100x100/5B21B6/ffffff?text=EW"
    },
    {
      quote: "Their SEO optimization services significantly boosted our organic traffic. WebKraftery is a reliable partner for digital growth.",
      author: "Michael Brown",
      title: "Marketing Director",
      avatar: "https://placehold.co/100x100/6D28D9/ffffff?text=MB"
    },
    {
      quote: "The React application developed by WebKraftery is incredibly fast and user-friendly. Highly recommend their development team!",
      author: "Sarah Green",
      title: "Product Manager",
      avatar: "https://placehold.co/100x100/7C3AED/ffffff?text=SG"
    },
  ];

  return (
    <div 
      ref={containerRef}
      className="relative py-28 px-4 overflow-hidden bg-gray-100"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <h3 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16 text-gray-800"
        >
          What Our Clients Say
        </h3>

        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            el: '.testimonial-pagination',
            bulletClass: 'testimonial-bullet',
            bulletActiveClass: 'testimonial-bullet-active'
          }}
          navigation={{
            nextEl: '.testimonial-next',
            prevEl: '.testimonial-prev'
          }}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            768: { slidesPerView: 1.2 },
            1024: { slidesPerView: 1.5 }
          }}
          className="relative"
          onInit={(swiper) => {
            setTimeout(() => swiper.update(), 100);
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div 
                className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-lg flex flex-col items-center text-center h-full min-h-[350px] md:min-h-[400px] justify-between transition-transform duration-500 hover:scale-[1.02]"
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mb-6 md:mb-8 border-4 border-white"
                />

                <p className="text-gray-700 text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 md:mb-8 font-medium italic">
                  "{testimonial.quote}"
                </p>

                <div className="text-gray-900">
                  <p className="text-lg md:text-xl font-bold mb-1">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm md:text-base">{testimonial.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="testimonial-pagination flex justify-center mt-8 gap-2" />

        <div className="testimonial-next absolute right-4 md:right-8 top-1/2 z-20 -translate-y-1/2 cursor-pointer hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <div className="testimonial-prev absolute left-4 md:left-8 top-1/2 z-20 -translate-y-1/2 cursor-pointer hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </div>

      <style jsx global>{`
        .testimonial-bullet {
          width: 12px;
          height: 12px;
          background: rgba(100, 100, 100, 0.5);
          transition: all 0.3s ease;
          margin: 0 6px !important;
          border-radius: 9999px;
          cursor: pointer;
        }

        .testimonial-bullet-active {
          background: #333;
          transform: scale(1.3);
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;

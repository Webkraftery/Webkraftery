import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import CTA from '../Common/CTA';
import CTACard from '../Common/CTACard';

gsap.registerPlugin(ScrollTrigger);

const LeadershipTeam = () => {
  const navigate = useNavigate();
  // Refs for GSAP animations
  const headingRef = useRef(null);
  const introTextRef = useRef(null);
  const teamGridRef = useRef(null);
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

    // Scroll-triggered animation for the team member cards
    gsap.fromTo(
      teamGridRef.current.children, // Animate each child of the grid
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2, // Stagger the animation of each team member card
        scrollTrigger: {
          trigger: teamGridRef.current,
          start: 'top 80%', // When the top of the grid enters the viewport
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

  // Sample team member data
  const teamMembers = [
    {
      name: 'Kunal Koushik',
      title: 'CEO & Founder',
      phone:"8882320645",
      email:"kunalkoushik44@gmail.com",
      bio:"A dedicated software developer specializing in the end-to-end development of scalable web applications. My focus is on writing clean, efficient code to deliver intuitive and high-performance user experiences." },
    {
      name: 'Mr. Prince Tyagi',
      title: 'Co-Founder & Chief Technology Officer (CTO)',
      phone:'8936950459',
      email:'princetyagi1901@gmail.com',
      bio:'Passionate software developer skilled in building scalable web applications and crafting seamless user experiences. Proficient in modern technologies with a focus on clean, efficient code.'
    
    },
    {
      name: 'The RealCoder',
      title: 'Co-Founder and Managerial Director',
      phone:'9899794119',
      email:'realcoder24@gmail.com',
      bio:'Passionate software developer skilled in building scalable web applications and crafting seamless user experiences. Proficient in modern technologies with a focus on clean, efficient code.'
    
      
    },
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-100 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <section className="paraFont-900 text-center mb-16">
          <h1 ref={headingRef} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-purple-800 mb-6 leading-tight">
            Meet Our Leadership Team
          </h1>
          <p ref={introTextRef} className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            At webkraftery, our success is driven by a passionate team of experts dedicated to digital excellence and client innovation. Get to know the leaders guiding our mission.
          </p>
        </section>
      
        {/* Team Members Grid */}
        <section ref={teamGridRef} className="max-w-5xl noto-serif grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex justify-center">
              <CTACard
                name={member.name}
                role={member.title}
                email={member.email}
                phone={member.phone}
                bio={member.bio}
                logoText="WEB KRAFTERY"
              />
            </div>
          ))}
        </section>
        
        {/* Call to Action Section */}
        <div ref={ctaRef}>
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeam;

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import axios from "axios"; // Import axios for API calls
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"; // Import useForm for form management


import { apiConnector } from "../services/apiConnector";
import { mailpoint } from "../services/operation/Auth";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const navigate = useNavigate();
  // State for form submission status and loading
  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', null

  // useForm hook for form validation and submission
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  // Inside submitContactForm function in ContactUs.jsx
const submitContactForm = async (data) => {
  try {
    setLoading(true);
    setSubmissionStatus(null); // Reset status on new submission
    const res = await apiConnector("POST", mailpoint.SENDMAIL_API, data);
    // console.log("Email Res - ", res);

    // Assuming your API returns a structure like { success: true/false }
    // or you can check res.status or res.data.success
    if (res.data.success || (res.status >= 200 && res.status < 300)) { // Adjust condition based on your API response
      setSubmissionStatus("success");
    } else {
      setSubmissionStatus("error");
    }
    setLoading(false);
  } catch (error) {
    console.log("ERROR MESSAGE - ", error.message);
    setSubmissionStatus("error"); // Set error status on catch
    setLoading(false);
  }
};

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        fullName: "",
        service: "",
        message: "",
        phoneNo: "",
      });
      navigate("/contactus");
    }
  }, [reset, isSubmitSuccessful]);
  // Refs for GSAP animations
  const headingRef = useRef(null);
  const introTextRef = useRef(null);
  const contactInfoRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    // Animation for the main heading and intro text
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 }
    ).fromTo(
      introTextRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1 },
      "-=0.5" // Stagger slightly after the heading
    );

    // Scroll-triggered animation for contact info and form
    gsap.fromTo(
      contactInfoRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      formRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Scroll-triggered animation for the map
    gsap.fromTo(
      mapRef.current,
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="paraFont-900 bg-gradient-to-br from-indigo-50 to-purple-100 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1
            ref={headingRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-600 mb-6 leading-tight"
          >
            Get in Touch with WebKraftery
          </h1>
          <p
            ref={introTextRef}
            className="text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto"
          >
            Have a project in mind, a question about our web development
            services, or just want to say hello ? We're here to help you
            achieve your digital goals.
          </p>
        </section>

        {/* Contact Content: Info & Form */}
        <section className="bona-regular grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div
            ref={contactInfoRef}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-purple-100"
          >
            <h2 className="text-3xl font-bold text-gray-600 mb-6">
              Reach Out to Our Team
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Whether you're looking for a custom website solution, SEO
              expertise, Google Advertising our team is
              ready to assist.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <span className="text-black text-3xl mr-4">📧</span>
                <div>
                  <h3 className="font-semibold text-xl text-gray-600">
                    Email Us
                  </h3>
                  <p className="text-slate-400">
                    For general inquiries or project discussions.
                  </p>
                  <a
                    href="mailto:info.webkraftery@gmail.com"
                    className="text-indigo-400 hover:underline"
                  >
                    info.WebKraftery@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-gray-500 text-3xl mr-4">📞</span>
                <div>
                  <h3 className="font-semibold text-xl text-gray-600">
                    Call Us
                  </h3>
                  <p className="text-slate-400">
                    Speak directly with our experts.
                  </p>
                  <a
                    href="tel:+918882320645"
                    className="text-indigo-400 hover:underline"
                  >
                    +91 8882320645
                  </a>
                  <p></p>
                  <a
                    href="tel:+918936950459"
                    className="text-indigo-400 hover:underline"
                  >
                    {" "}
                    +91 8936950459
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-gray-600 text-3xl mr-4">📍</span>
                <div>
                  <h3 className="font-semibold text-xl text-gray-600">
                    Visit Our Office
                  </h3>
                  <p className="text-slate-400">WebKraftery Headquarters:</p>
                  <address className="not-italic text-indigo-400">
                    Vishwash Nagar <br />
                    Sihani Ghaziabad 201001
                  </address>
                </div>
              </div>
            </div>

            <h3 className="font-semibold text-xl text-gray-700 mb-4">
              Connect on Social Media
            </h3>
            <div className="flex space-x-5">
              <a
                href="https://www.instagram.com/webkraftery?utm_source=qr"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              >
                {/* LinkedIn Icon */}
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              
              <a
                href="https://www.instagram.com/webkraftery?utm_source=qr"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              >
                {/* Facebook Icon */}
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.505 1.492-3.89 3.776-3.89 1.094 0 2.24.195 2.24.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-purple-100"
          >
            <h2 className="text-3xl font-bold text-gray-600 mb-6 text-center">
              Send Us a Message
            </h2>
            <form
              onSubmit={handleSubmit(submitContactForm)}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-gray-600 font-semibold mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your name"
                  {...register("fullName", {
                    required: "Full Name is required",
                  })}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
                    errors.fullName ? "border-red-500" : "border-purple-300"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-semibold mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email Address is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
                    errors.email ? "border-red-500" : "border-purple-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phoneNo"
                  className="block text-gray-600 font-semibold mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel" // Use type="tel" for phone numbers
                  id="phoneNo"
                  placeholder="e.g., +91 9876543210"
                  {...register("phoneNo", {
                    required: "Phone Number is required",
                    pattern: {
                      value:
                        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im, // Basic phone number regex
                      message: "Invalid phone number format",
                    },
                  })}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
                    errors.phoneNo ? "border-red-500" : "border-purple-300"
                  }`}
                />
                {errors.phoneNo && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phoneNo.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-gray-600 font-semibold mb-1"
                >
                  Service Required
                </label>
                <select
                  id="service"
                  {...register("service", {
                    required: "Please select a service",
                  })}
                  className={`w-full px-4 py-3 rounded-lg bg-white text-gray-600 border focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none transition-all duration-200 ${
                    errors.service ? "border-red-500" : "border-purple-300"
                  }`}
                >
                  <option value="">Select a service</option>
                  <option>Custom Website Development</option>
                  <option>Frontend Development</option>
                  <option>Backend Development</option>
                  <option>React Development</option>
                  <option>UI/UX Design</option>
                  <option>Software Maintenance & Support</option>
                  <option>SEO Optimization</option>
                  <option>Google Advertising</option>
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.service.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-600 font-semibold mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us about your project or inquiry..."
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
                    errors.message ? "border-red-500" : "border-purple-300"
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading} // Disable button when loading
                  className="bg-amber-300 text-gray-500 font-bold px-8 py-4 rounded-full shadow-lg hover:from-purple-800 hover:to-indigo-900 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit Your Inquiry"}
                </button>
              </div>

              {/* Submission Status Messages */}
              {submissionStatus === "success" && (
                <p className="text-green-600 text-center mt-4 font-semibold">
                  Thank you! Your message has been sent successfully. We will
                  get back to you shortly.
                </p>
              )}
              {submissionStatus === "error" && (
                <p className="text-red-600 text-center mt-4 font-semibold">
                  There was an error sending your message. Please try again
                  later or contact us directly.
                </p>
              )}
            </form>
          </div>
        </section>

        {/* Map Section */}
        <section
          ref={mapRef}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 border border-purple-100"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center py-4">
            Find Us on the Map
          </h2>
          <div className="w-full h-96 ">
            {/* Google Map Embed for Ghaziabad, Uttar Pradesh, India */}
            <iframe
              src="https://maps.google.com/maps?q=Vishwash%20Nagar,%20Sihani,%20Ghaziabad,%20Uttar%20Pradesh%20201001,%20India&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="webkraftery Office Location - Vishwash Nagar Ghaziabad"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;

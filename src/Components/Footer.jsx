import React from 'react';

const Footer = () => {
  return (
    <footer className="noto-serif bg-gray-800 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">

        {/* Company Info Section */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-4 text-white">WEBKRAFTERY</h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            Your trusted partner for innovative web solutions — driving digital transformation, boosting online success, and delivering lasting impact. We design, optimize, and maintain powerful digital experiences tailored to your business.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.484 0-6.31 2.827-6.31 6.31 0 .497.056.983.164 1.447-5.243-.263-9.89-2.784-13.006-6.6-.543.935-.85 2.03-.85 3.197 0 2.185 1.112 4.12 2.808 5.263-.82-.025-1.59-.251-2.263-.624v.08c0 3.062 2.18 5.618 5.07 6.195-.532.145-1.094.222-1.668.222-.407 0-.802-.04-1.189-.114.804 2.509 3.13 4.339 5.899 4.39-.215.169-.434.331-.657.487-1.162.83-2.52 1.32-3.953 1.32-.257 0-.51-.015-.758-.045 3.013 1.92 6.593 3.044 10.46 3.044 12.55 0 19.33-10.373 19.33-19.33v-.875c1.32-.958 2.45-2.145 3.35-3.49z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.505 1.492-3.89 3.776-3.89 1.094 0 2.24.195 2.24.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            {['About Us', 'Our Services', 'Why Choose Us', 'Leadership Team', 'FAQs'].map((item, i) => (
              <li key={i}><a href="#" className="text-gray-400 hover:text-white transition duration-200 text-sm">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Our Services</h3>
          <ul className="space-y-2">
            {[
              'Custom Web Development', 
              'E-commerce Solutions', 
              'SEO & Digital Marketing', 
              'UI/UX Design', 
              'Software Maintenance'
            ].map((service, i) => (
              <li key={i}><a href="#" className="text-gray-400 hover:text-white transition duration-200 text-sm">{service}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
          <address className="not-italic text-gray-400 space-y-2 text-sm">
            <p> Office Address: Vishwash Nagar, Sihani</p>
            <p>Ghaziabad, Uttar Pradesh -201001</p>
            <p>Email: <a href="mailto:info.webkraftery@gmail.com" className="hover:text-white">info.WebKraftery@gmail.com</a></p>
            <p>Phone: <a href="tel:+918882320645" className="hover:text-white">+91 8882320645</a></p>
            <p>Phone: <a href="tel:+918936950459" className="hover:text-white">+91 8936950459</a></p>
          </address>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} WebKraftery. All rights reserved. | <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms of Service</a></p>
      </div>
    </footer>
  );
};

export default Footer;

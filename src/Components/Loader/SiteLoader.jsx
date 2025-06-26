import React from 'react';
import './SiteLoader.css'; // We'll create this CSS file for styling and animation
import logo from '../../assets/Logo_web.png'

const SiteLoader = () => {
  return (
    <div className="site-loader-container">
      <img
        src={logo} // Path to your logo image in the public folder
        alt="Site Logo Loader"
        className="site-loader-logo"
      />
      {/* You can add a simple loading text or spinner here if desired */}
      {/* <div className="loading-text">Loading...</div> */}
    </div>
  );
};

export default SiteLoader;
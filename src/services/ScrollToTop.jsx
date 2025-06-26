// src/components/ScrollToTop.jsx
import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // useLayoutEffect runs synchronously after all DOM mutations,
  // ensuring the scroll happens before the browser repaints.
  // useEffect can also work, but useLayoutEffect can prevent visual inconsistencies.
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Rerun whenever the pathname changes

  return null; // This component doesn't render any UI
};

export default ScrollToTop;
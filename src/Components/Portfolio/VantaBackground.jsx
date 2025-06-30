import { useEffect, useRef, useState } from 'react';

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  const getResponsiveOptions = () => {
    const width = window.innerWidth;

    if (width < 480) {
      return {
        size: 1.0,
        spacing: 24,
        scale: 1.0,
      };
    } else if (width < 768) {
      return {
        size: 1.4,
        spacing: 22,
        scale: 1.2,
      };
    } else if (width < 1024) {
      return {
        size: 1.6,
        spacing: 20,
        scale: 1.3,
      };
    } else {
      return {
        size: 1.8,
        spacing: 18,
        scale: 1.4,
      };
    }
  };

  const initializeVanta = () => {
    if (window.VANTA && window.VANTA.GLOBE && window.THREE) {
      if (vantaEffect) vantaEffect.destroy();

      const { size, spacing, scale } = getResponsiveOptions();

      const effect = window.VANTA.GLOBE({
        el: vantaRef.current,
        THREE: window.THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale,
        scaleMobile: 1.0,
        color: 0xcbd5e1,
        color2: 0x94a3b8,
        backgroundColor: 0x1e293b,
        spacing,
        size,
      });

      setVantaEffect(effect);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!vantaEffect && window.VANTA && window.VANTA.GLOBE && window.THREE) {
        initializeVanta();
        clearInterval(interval);
      }
    }, 200);

    return () => {
      clearInterval(interval);
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    const handleResize = () => {
      if (vantaEffect) {
        vantaEffect.destroy();
        setVantaEffect(null);
      }
      initializeVanta();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default VantaBackground;

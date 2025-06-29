import React, { useEffect, useState } from 'react';

const TimelineCurve = ({ scale, containerHeight }) => {
  const [amplitude, setAmplitude] = useState(120);
  const [svgWidth, setSvgWidth] = useState(1000);

  const height = containerHeight;
  const frequency = 3; // number of waves
  const step = height / (frequency * 2);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      // Adjust amplitude and width for responsiveness
      if (screenWidth < 480) {
        setAmplitude(180);  // More wavy on small screens
        setSvgWidth(600);
      } else if (screenWidth < 768) {
        setAmplitude(150);
        setSvgWidth(800);
      } else {
        setAmplitude(120);  // Default
        setSvgWidth(1000);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const midX = svgWidth / 2;

  const generatePath = () => {
    let path = `M ${midX},0 `;
    for (let i = 0; i < frequency * 2; i++) {
      const isEven = i % 2 === 0;
      const ctrlX = midX + (isEven ? -amplitude : amplitude);
      const y = step * (i + 1);
      path += `Q ${ctrlX},${y - step / 2} ${midX},${y} `;
    }
    return path;
  };

  return (
    <svg
      width="100%"
      height={height}
      className="absolute left-0 top-0 pointer-events-none z-0"
      viewBox={`0 0 ${svgWidth} ${height}`}
      preserveAspectRatio="xMidYMin meet"
    >
      <defs>
        <linearGradient id="dashedGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#818cf8" stopOpacity="1" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
        </linearGradient>
        <filter id="glow">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#818cf8" floodOpacity="1" />
          <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#06b6d4" floodOpacity="0.8" />
        </filter>
      </defs>

      <path
        d={generatePath()}
        fill="none"
        stroke="url(#dashedGradient)"
        strokeWidth="5"
        strokeDasharray="12 10"
        filter="url(#glow)"
      />
    </svg>
  );
};

export default TimelineCurve;

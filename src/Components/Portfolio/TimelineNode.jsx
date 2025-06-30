import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users } from 'lucide-react';

const TimelineNode = ({ project, position, onClick, index, isLast }) => {
  const [scaledY, setScaledY] = useState(position.y);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [cardStyle, setCardStyle] = useState({});
  const cardRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let scaleFactor = 1;
      if (width < 480) scaleFactor = 0.55;
      else if (width < 640) scaleFactor = 0.65;
      else if (width < 768) scaleFactor = 0.75;
      else if (width < 1024) scaleFactor = 0.85;

      const spacingReduction = width < 768 ? 0.85 : 1;
      setScaledY(position.y * scaleFactor * spacingReduction);
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || width < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [position.y]);

 const handleHover = () => {
  if (!wrapperRef.current || !cardRef.current) return;

  const bubbleRect = wrapperRef.current.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const cardWidth = 320;
  const cardHeight = 160;
  const padding = 12;

  let newStyle = {
    width: `${cardWidth}px`,
    position: 'absolute',
  };

  const space = {
    top: bubbleRect.top,
    bottom: viewportHeight - bubbleRect.bottom,
    left: bubbleRect.left,
    right: viewportWidth - bubbleRect.right,
  };

  // Force place above if it's the last bubble
  if (isLast && space.top > cardHeight + padding) {
    newStyle.bottom = 'calc(100% + 0.5rem)';
    newStyle.left = '50%';
    newStyle.transform = 'translateX(-50%)';
  }
  // Otherwise auto-detect best position
  else if (space.right > cardWidth + padding) {
    newStyle.left = 'calc(100% + 0.5rem)';
    newStyle.top = '50%';
    newStyle.transform = 'translateY(-50%)';
  } else if (space.left > cardWidth + padding) {
    newStyle.right = 'calc(100% + 0.5rem)';
    newStyle.top = '50%';
    newStyle.transform = 'translateY(-50%)';
  } else if (space.bottom > cardHeight + padding) {
    newStyle.top = 'calc(100% + 0.5rem)';
    newStyle.left = '50%';
    newStyle.transform = 'translateX(-50%)';
  } else if (space.top > cardHeight + padding) {
    newStyle.bottom = 'calc(100% + 0.5rem)';
    newStyle.left = '50%';
    newStyle.transform = 'translateX(-50%)';
  } else {
    newStyle.top = `${viewportHeight / 2}px`;
    newStyle.left = `${viewportWidth / 2}px`;
    newStyle.transform = 'translate(-50%, -50%)';
  }

  setCardStyle(newStyle);
};


  return (
    <motion.div
      ref={wrapperRef}
      className="absolute cursor-pointer max-w-[90vw]"
      style={{
        left: position.x,
        top: `${scaledY}px`,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.2,
        type: 'spring',
        damping: 15,
        stiffness: 200,
      }}
      whileHover={{ scale: 1.1 }}
      onMouseEnter={() => {
        setIsHovered(true);
        handleHover();
      }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(project)}
    >
      {/* Year label */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-indigo-400/80 font-bold text-xs sm:text-sm md:text-base lg:text-lg text-center pointer-events-none">
        {new Date(project.date).getFullYear()}
      </div>

      {/* Project Bubble */}
      <motion.div
        className="relative rounded-full 
          w-[clamp(7rem,14vw,18rem)] 
          h-[clamp(7rem,14vw,18rem)] 
          sm:w-[clamp(10rem,20vw,20rem)] 
          md:w-[clamp(10rem,18vw,22rem)] 
          lg:w-[clamp(10rem,22vw,24rem)] 
          xl:w-[clamp(12rem,24vw,26rem)]
          bg-gradient-to-br from-indigo-500/20 to-purple-500/20 
          border-4 border-indigo-400/40 
          backdrop-blur-md overflow-hidden shadow-xl"
        whileHover={{
          borderColor: 'rgb(99, 102, 241)',
          boxShadow:
            '0 0 50px rgba(99, 102, 241, 0.7), 0 0 100px rgba(147, 51, 234, 0.4)',
        }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `url(${project.thumbnail})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-indigo-400/50"
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute bottom-0 left-0 right-0 text-center bg-gradient-to-t from-slate-900/90 to-transparent p-2 sm:p-4 md:p-8">
          <h3 className="w-full px-2 text-white font-semibold 
            text-xs sm:text-sm md:text-base lg:text-lg 
            text-center leading-tight break-words">
            {project.title}
          </h3>
        </div>
      </motion.div>

      {/* Hover Card */}
      {!isMobile && isHovered && (
        <motion.div
          ref={cardRef}
          className="z-50 bg-slate-800/95 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-4 shadow-2xl"
          style={cardStyle}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex gap-4 max-w-full">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="rounded-xl object-cover flex-shrink-0 shadow-lg w-16 h-16 sm:w-20 sm:h-20"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-white text-sm sm:text-lg mb-2 line-clamp-2">
                {project.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-3 line-clamp-3">
                {project.description}
              </p>
              <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-400 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar size={12} className="text-indigo-400" />
                  <span>
                    {new Date(project.date).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={12} className="text-purple-400" />
                  <span>{project.teamSize}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-indigo-500/30 text-indigo-300 rounded-full text-xs font-medium truncate"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="px-2 py-1 bg-slate-700/50 text-slate-400 rounded-full text-xs">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TimelineNode;

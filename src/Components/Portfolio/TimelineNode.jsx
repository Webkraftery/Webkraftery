import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users } from 'lucide-react';

const TimelineNode = ({ project, position, onClick, index }) => {
  const [scaledY, setScaledY] = useState(position.y);
  const isEven = index % 2 === 0;

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
    };

    handleResize(); // initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [position.y]);

  return (
    <motion.div
      className="absolute cursor-pointer group max-w-[90vw]"
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
      onClick={() => onClick(project)}
    >

      {/* Main Node */}
      <motion.div
        className="relative rounded-full 
          w-[clamp(7rem,14vw,18rem)] 
          h-[clamp(7rem,14vw,18rem)] 
          sm:w-[clamp(8rem,16vw,20rem)] 
          md:w-[clamp(9rem,17vw,22rem)] 
          lg:w-[clamp(10rem,18vw,24rem)] 
          xl:w-[clamp(12rem,19vw,26rem)]
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
          className="absolute inset-0 opacity-80 group-hover:opacity-95 transition-opacity duration-300"
          style={{
            backgroundImage: `url(${project.thumbnail})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 group-hover:from-indigo-500/20 group-hover:to-purple-500/20 transition-all duration-300" />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-indigo-400/50"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
       <div className="absolute bottom-0 left-0 right-0 text-center bg-gradient-to-t from-slate-900/90 to-transparent p-2 sm:p-3 md:p-4">
  <h3 className="w-full px-2 text-white font-semibold 
    text-xs sm:text-sm md:text-base lg:text-lg 
    text-center leading-tight break-words">
    {project.title}
  </h3>
</div>

      </motion.div>

      {/* Floating Info Card */}
      {/* Floating Info Card */}
<motion.div
  className={`absolute z-50 
    w-[90vw] sm:w-[22rem] md:w-[26rem] lg:w-[30rem] xl:w-[34rem] 
    min-w-[16rem] max-w-[95vw] 
    bg-slate-800/95 backdrop-blur-xl 
    border border-indigo-500/30 
    rounded-2xl p-4 sm:p-6 
    opacity-0 group-hover:opacity-100 
    transition-all duration-300 
    pointer-events-none group-hover:pointer-events-auto
    ${isEven ? 'left-0 sm:-left-[110%]' : 'right-0 sm:-right-[110%]'}
    bottom-full mb-4 sm:top-1/2 sm:mb-0 translate-x-16 sm:-translate-y-1/2
    h-auto min-h-fit`}
  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
  whileHover={{ opacity: 1, x: 0 }}
  layout
>
  <div className="flex  flex-col sm:flex-row gap-4">
    <img
      src={project.thumbnail}
      alt={project.title}
      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover flex-shrink-0 shadow-lg"
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

    </motion.div>
  );
};

export default TimelineNode;

import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import TimelineCurve from './TimelineCurve';
import TimelineNode from './TimelineNode';
import ProjectModal from './ProjectModal';
import ZoomControls from './ZoomControls';
import { mockProjects } from '../../data/mockProjects';

const Timeline = () => {
  const [scale, setScale] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [containerHeight, setContainerHeight] = useState(2000);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateLayout = () => {
      const baseHeight = window.innerHeight < 768 ? 1.2 : 1.5;
      setContainerHeight(Math.max(window.innerHeight * baseHeight, mockProjects.length * 400 + 600));
      setScreenWidth(window.innerWidth);
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const handleZoom = useCallback((delta) => {
    setScale(prev => Math.min(Math.max(prev + delta, 0.4), 2.5));
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  };

  const nodePositions = useMemo(() => {
    return mockProjects.map((_, i) => {
      const progress = i / (mockProjects.length - 1);
      const y = 200 + progress * (containerHeight - 400);
      
      // Calculate amplitude based on screen size
      let amplitude;
      if (screenWidth < 480) amplitude = 24;
      else if (screenWidth < 768) amplitude = 18;
      else if (screenWidth < 1024) amplitude = 14;
      else amplitude = 25 + progress * 6;
      
      // Alternate sides for nodes
      const side = i % 2 === 0 ? 1 : -1;
      const x = 35 + side * amplitude;
      
      return { 
        x: `${x}%`, 
        y 
      };
    });
  }, [containerHeight, screenWidth]);

  return (
    <div className="min-h-screen border-2  bg-gradient-to-br from-slate-950 via-indigo-950/80 to-slate-900 overflow-hidden relative">

      {/* Header */}
      <div className="relative z-10 pt-12 sm:pt-16 pb-8 sm:pb-12 text-center px-4">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Innovation Timeline
        </motion.h1>
        <motion.p 
          className="text-slate-300 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Journey through our breakthrough projects and technological milestones
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="flex justify-center w-full relative">
        <div
          className="relative transition-transform duration-300 ease-out px-4 w-full max-w-[1000px] pb-24"
          style={{
            height: `${containerHeight}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'center top',
          }}
        >
          {/* Timeline curve */}
          <TimelineCurve scale={scale} containerHeight={containerHeight} nodePositions={nodePositions} />

          {/* Project nodes with embedded year labels */}
          {mockProjects.map((project, index) => (
            <TimelineNode
              key={project.id}
              project={project}
              position={nodePositions[index]}
              onClick={handleProjectClick}
              index={index}
              isLast={index === mockProjects.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Zoom Controls */}
      <ZoomControls
        className="fixed bottom-6 right-4 z-50"
        scale={scale}
        onZoomIn={() => handleZoom(0.2)}
        onZoomOut={() => handleZoom(-0.2)}
        onReset={() => setScale(1)}
      />

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Floating Info */}
      <motion.div 
        className="hidden lg:block absolute top-1/4 left-4 z-40 bg-slate-800/90 backdrop-blur-xl border border-indigo-500/30 rounded-xl p-4 max-w-xs shadow-lg"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p className="mb-2 text-indigo-400 font-semibold text-sm">Explore Timeline:</p>
        <ul className="space-y-1 text-sm">
          {[
            { label: 'Click nodes for details', color: 'bg-indigo-400' },
            { label: 'Use zoom controls', color: 'bg-purple-400' },
            { label: 'Hover for preview', color: 'bg-cyan-400' }
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${item.color}`} />
              {item.label}
            </li>
          ))}
        </ul>
      </motion.div>


    </div>
  );
};

export default Timeline;
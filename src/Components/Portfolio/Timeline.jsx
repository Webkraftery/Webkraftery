import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
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

  const nodePositions = mockProjects.map((_, i) => {
    const progress = i / (mockProjects.length - 1);
    const y = 200 + progress * (containerHeight - 400);
    const amplitude = screenWidth < 480 ? 24 : screenWidth < 768 ? 18 : screenWidth < 1024 ? 14 : 12 + progress * 6;
    const x = 50 + Math.sin(progress * Math.PI * 2.8) * amplitude;
    return { x: `${x}%`, y };
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950/80 to-slate-900 overflow-hidden relative mt-14">
      {/* Grid BG */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_2px_2px,rgba(99,102,241,0.1)_1px,transparent_0)] bg-[60px_60px]" />

      {/* Header */}
      <div className="relative z-10 pt-8 sm:pt-12 pb-6 sm:pb-8 text-center px-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 sm:mb-6">
          Innovation Timeline
        </h1>
        <p className="text-slate-300 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
          Journey through our breakthrough projects and technological milestones
        </p>
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
          <TimelineCurve scale={1} containerHeight={containerHeight} />

          {/* Project nodes with embedded year labels */}
          {mockProjects.map((project, index) => (
            <TimelineNode
              key={project.id}
              project={project}
              position={nodePositions[index]}
              onClick={handleProjectClick}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Zoom Controls */}
      <ZoomControls
        className="fixed bottom-6 right-4 z-50 p-1 sm:p-2 bg-slate-900/80 rounded-md shadow-md"
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

      {/* Info Box */}
<div className="hidden lg:block absolute top-70 left-2 z-40 bg-slate-800/90 backdrop-blur-xl border border-indigo-500/30 rounded-xl p-3 sm:p-4 text-slate-300 max-w-[85vw] sm:max-w-xs shadow-lg">
  <p className="mb-2 text-indigo-400 font-semibold text-xs sm:text-sm">Explore Timeline:</p>
  <ul className="space-y-1 text-[11px] sm:text-sm">
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
</div>

    </div>
  );
};

export default Timeline;

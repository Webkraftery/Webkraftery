import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Github,
  FileText,
  Calendar,
  Users,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const projectImages =
    project.images ||
    [
      project.thumbnail,
      project.backgroundImage[0],
      project.backgroundImage[1],
    ].filter(Boolean);

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  const prevImage = () =>
    setCurrentImageIndex(
      (prev) => (prev - 1 + projectImages.length) % projectImages.length
    );
  const goToImage = (index) => setCurrentImageIndex(index);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 md:inset-10 lg:inset-16 bg-slate-900/95 rounded-3xl border border-slate-700 shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            <div className="relative flex-1 overflow-y-auto p-4 sm:p-6 md:p-10">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-slate-800/80 border border-slate-700 text-slate-300 p-2 rounded-full hover:bg-slate-700 hover:text-white z-50"
              >
                <X size={18} />
              </button>

              <div className="grid lg:grid-cols-2 gap-10 h-full">
                {/* Left side - Image + stack */}
                <div className="flex flex-col">
                  <div className="relative aspect-video rounded-2xl overflow-hidden group shadow-lg">
                    <img
                      src={projectImages[currentImageIndex]}
                      alt="Project"
                      className="w-full h-full object-cover"
                    />
                    {projectImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-800/70 text-white p-2 rounded-full hover:bg-slate-700"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-800/70 text-white p-2 rounded-full hover:bg-slate-700"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </>
                    )}
                  </div>

                  {projectImages.length > 1 && (
                    <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                      {projectImages.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => goToImage(idx)}
                          className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition ${
                            idx === currentImageIndex
                              ? 'border-teal-400'
                              : 'border-slate-700 hover:border-teal-400'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`Thumb ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="mt-6">
                    <h4 className="text-white text-lg font-semibold mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-teal-600/20 text-teal-300 border border-teal-500/40 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right side - Title, info, overview, achievements, links */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text  mb-4">
                    {project.title}
                  </h2>

                  <div className="flex flex-wrap gap-4 text-slate-400 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-teal-400" />
                      <span>
                        {new Date(project.date).toLocaleDateString('en-US', {
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-teal-400" />
                      <span>{project.teamSize} team members</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white text-lg font-semibold mb-2">
                      Overview
                    </h4>
                    <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                      {project.detailedDescription}
                    </p>
                  </div>

                  {project.achievements?.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-white text-lg font-semibold mb-2">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-300">
                        {project.achievements.map((item, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="w-2 h-2 bg-teal-400 rounded-full mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3 pt-3 border-t border-slate-700 mt-6">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition"
                      >
                        <Github size={16} /> View Code
                      </a>
                    )}
                    {project.caseStudyLink && (
                      <a
                        href={project.caseStudyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition"
                      >
                        <FileText size={16} /> Case Study
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

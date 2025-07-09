import { Plus, Minus, RotateCcw } from 'lucide-react';

const ZoomControls = ({ scale, onZoomIn, onZoomOut, onReset }) => {
  return (
    <div className="fixed top-25 right-4 bg-emerald-400 sm:right-6 flex flex-col items-center gap-2 z-40">
      <button
        onClick={onZoomIn}
        className="bg-indigo-600/10 text-indigo-300 p-2 rounded-md hover:bg-indigo-600/20 transition disabled:opacity-40"
        disabled={scale >= 2.5}
        title="Zoom In"
      >
        <Plus size={16} />
      </button>

      <button
        onClick={onZoomOut}
        className="bg-purple-600/10 text-purple-300 p-2 rounded-md hover:bg-purple-600/20 transition disabled:opacity-40"
        disabled={scale <= 0.4}
        title="Zoom Out"
      >
        <Minus size={16} />
      </button>

      <button
        onClick={onReset}
        className="bg-cyan-600/10 text-cyan-300 p-2 rounded-md hover:bg-cyan-600/20 transition"
        title="Reset Zoom"
      >
        <RotateCcw size={16} />
      </button>

      <div className="text-xs text-slate-300 mt-1 px-2 py-0.5 bg-slate-800/70 rounded border border-slate-600">
        {Math.round(scale * 100)}%
      </div>
    </div>
  );
};

export default ZoomControls;

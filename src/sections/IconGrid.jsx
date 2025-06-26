import React from 'react';

const IconGrid = () => {
  return (
    <div className="bg-slate-800 rounded-xl p-4 shadow-lg">
      <div className="grid grid-cols-2 gap-2">
        <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
        <div className="w-3 h-3 bg-slate-600 rounded-sm"></div>
        <div className="w-3 h-3 bg-slate-600 rounded-sm"></div>
        <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
      </div>
    </div>
  );
};

export default IconGrid;
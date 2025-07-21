import React from 'react';

const labelColors = {
  Support: 'bg-green-100 text-green-600',
  Live: 'bg-orange-100 text-orange-600',
  Online: 'bg-purple-100 text-purple-600',
  Friends: 'bg-blue-100 text-blue-600',
};

const LabelBadge = ({ label }) => {
  return (
    <span className={`text-[10px] px-2 py-[2px] rounded-full font-semibold ${labelColors[label] || 'bg-gray-100 text-gray-600'}`}>
      {label}
    </span>
  );
};

export default LabelBadge;

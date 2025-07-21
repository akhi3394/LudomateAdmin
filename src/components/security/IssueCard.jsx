import React from 'react';
import XIcon from '../../../public/Xicon.svg';

const IssueCard = () => {
  return (
    <div
      className="p-6 rounded-[400px] shadow-lg max-w-2xl mx-auto border border-white/20"
      style={{
        width: '594px',
        height: '559px',
        position: 'absolute',
        top: '2253px',
        left: '2290px',
        backgroundColor: '#131060',
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-bold">ID-#456987</h2>
        <button>
          <img src={XIcon} alt="Close" className="w-6 h-6" />
        </button>
      </div>

      {/* Status and Priority */}
      <div className="flex space-x-4 mb-4">
        <div className="bg-yellow-400 text-black px-4 py-1 rounded-full font-semibold">In Progress</div>
        <div className="bg-gray-200 text-black px-4 py-1 rounded-full font-semibold">Medium</div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4 text-white">
        <div>
          <p className="text-gray-400">Created By</p>
          <p className="font-semibold">John Doe</p>
        </div>
        <div>
          <p className="text-gray-400">Assigned To</p>
          <p className="font-semibold">Maintenance Team</p>
        </div>
        <div>
          <p className="text-gray-400">Created On</p>
          <p className="font-semibold">23/04/2025</p>
        </div>
        <div>
          <p className="text-gray-400">Last Updated</p>
          <p className="font-semibold">23/04/2025</p>
        </div>
      </div>

      {/* Chat Snippet */}
      <div className="mb-4">
        <p className="text-gray-400">Chat Snippet</p>
        <p className="text-white font-semibold">Truck broke near exit 14</p>
      </div>

      {/* Evidence Images */}
      <div>
        <p className="text-gray-400 mb-2">Evidence</p>
        <div className="flex space-x-4">
          <div className="w-1/3 h-24 bg-gray-300 rounded-lg"></div>
          <div className="w-1/3 h-24 bg-gray-300 rounded-lg"></div>
          <div className="w-1/3 h-24 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
import React from 'react';
import { FiSearch, FiTrash2, FiFolder, FiArchive } from 'react-icons/fi';
import Sidebar from '../../components/Messages/Sidebar';
import MessageItem from '../../components/Messages/MessageItem';

const messageData = [
  { name: 'Jullu Jalal', label: 'Support', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed', time: '8:38 AM' },
  { name: 'Minerva Barnett', label: 'Live', message: 'Lorem ipsum sit amet', time: '8:13 AM' },
  { name: 'Peter Lewis', label: 'Online', message: 'Lorem ipsum dolor sit amet', time: '7:52 PM' },
  { name: 'Anthony Briggs', starred: true, message: 'Lorem ipsum dolor sit amet', time: '7:52 PM' },
  { name: 'Clifford Morgan', label: 'Friends', message: 'Lorem dolo adipiscing elit', time: '4:13 PM' },
  { name: 'Cecilia Webster', label: 'Online', message: 'Lorem ipsum amet, copiscing elit', time: '3:52 PM' },
  { name: 'Harvey Manning', starred: true, message: 'Lorem ipsum dolor sit amet', time: '2:30 PM' },
  { name: 'Willie Blake', label: 'Support', message: 'Lorem ipsum dolor sit amet', time: '8:38 AM' },
  { name: 'Fanny Weaver', starred: true, message: 'Lorem ipsum dolor sit amet', time: '7:52 PM' },
];

const Messages = () => {
  return (
    <div className="flex h-screen bg-[#f5f9ff]">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Scrollable Main Content */}
      <main className="flex-1 ml-60 overflow-y-auto p-10 mt-5">

        <div className="bg-white rounded-md shadow p-3 mb-4 flex items-center gap-3">
          <div className="flex items-center bg-gray-100 px-3 py-1 rounded w-full">
            <FiSearch className="text-gray-400 mr-2" />
            <input className="bg-transparent outline-none w-full text-sm" placeholder="Search mail" />
          </div>
          <button><FiArchive /></button>
          <button><FiFolder /></button>
          <button><FiTrash2 /></button>
        </div>

        <div className="bg-white rounded-md shadow divide-y">
          {messageData.map((msg, idx) => (
            <MessageItem key={idx} {...msg} />
          ))}
        </div>

        <div className="text-xs text-gray-400 mt-3">
          Showing 1–12 of 1,253
        </div>
      </main>
    </div>
  );
};

export default Messages;

import React from 'react';
import {
  FiInbox,
  FiStar,
  FiSend,
  FiFileText,
  FiAlertCircle,
  FiTag,
  FiTrash,
} from 'react-icons/fi';

const menu = [
  { icon: <FiInbox />, label: 'Inbox', count: 1253, active: true },
  { icon: <FiStar />, label: 'Starred', count: 245 },
  { icon: <FiSend />, label: 'Sent', count: 24532 },
  { icon: <FiFileText />, label: 'Draft', count: 9 },
  { icon: <FiAlertCircle />, label: 'Spam', count: 14 },
  { icon: <FiTag />, label: 'Important', count: 18 },
  { icon: <FiTrash />, label: 'Bin', count: 9 },
];

const labels = ['Contact Support', 'Friends', 'Live Chat', 'Online'];

const Sidebar = () => {
  return (
            <>
            <h1 className="text-2xl font-semibold mb-4 fixed ml-6 mt-6">Messages</h1>
            <aside className="bg-white w-60 h-screen fixed top-[160px] left-[280px] p-4 shadow-md overflow-y-auto">

          <button className="bg-[#4b7bec] text-white w-full py-2 rounded-md mb-4 font-semibold">
              + Compose
          </button>

          <div>
              <h4 className="text-sm font-semibold text-gray-600 mb-2">My Email</h4>
              <ul className="space-y-2 text-sm">
                  {menu.map((item, idx) => (
                      <li
                          key={idx}
                          className={`flex items-center justify-between px-2 py-1 rounded-md hover:bg-gray-100 ${item.active ? 'bg-[#f0f4ff] text-[#4b7bec]' : ''}`}
                      >
                          <span className="flex items-center gap-2">
                              {item.icon}
                              {item.label}
                          </span>
                          <span className="text-xs font-semibold">{item.count}</span>
                      </li>
                  ))}
              </ul>
          </div>

          <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-600 mb-2">Label</h4>
              <ul className="text-sm space-y-1">
                  {labels.map((label, idx) => (
                      <li key={idx} className="flex items-center gap-2 px-2">
                          <span
                              className={`w-3 h-3 rounded-sm ${['bg-teal-400', 'bg-blue-400', 'bg-orange-400', 'bg-purple-400'][idx]}`}
                          ></span>
                          {label}
                      </li>
                  ))}
              </ul>
              <p className="text-xs text-gray-500 mt-4 px-2 cursor-pointer">
                  + Create New Label
              </p>
          </div>
      </aside></>
  );
};

export default Sidebar;

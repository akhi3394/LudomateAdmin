import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { FiUpload } from 'react-icons/fi';

const notifications = [
  { title: 'Image Notification', date: 'Mon Aug 17 2025', type: 'Image', action: 'Test Send' },
  { title: 'Lead in app notification', date: 'Mon Aug 17 2025', type: 'Video', action: 'Test Send' },
  { title: 'Lead Notification', date: 'Mon Aug 17 2025', type: 'Test', action: 'Test Send' },
  { title: 'Image Notification', date: 'Mon Aug 17 2025', type: 'Image', action: 'Test Send' },
  { title: 'Lead in app notification', date: 'Mon Aug 17 2025', type: 'Video', action: 'Test Send' },
  { title: 'Lead Notification', date: 'Mon Aug 17 2025', type: 'Test', action: 'Test Send' },
];

const PushNotification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#EFF6FB] p-6">
      <div className="w-full mx-auto bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold text-[#1B1E25]">Push Notification</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#3F83F8] text-white text-sm px-4 py-2 rounded-md hover:bg-[#2563EB] transition-all"
          >
            + Create New Notification
          </button>
        </div>

        <div className="space-y-4">
          {notifications.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border rounded-md px-4 py-4 bg-white"
            >
              <div>
                <p className="text-sm font-semibold text-[#1B1E25]">{item.title}</p>
                <p className="text-xs text-gray-500 mt-1">Created {item.date}</p>
              </div>
              <div className="text-sm text-[#1B1E25]">{item.type}</div>
              <div className="text-sm text-[#1B1E25]">{item.action}</div>
              <button className="text-red-500 hover:text-red-600 flex items-center gap-1 text-sm font-medium">
                <FiEdit className="w-4 h-4" />
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-lg w-full max-w-xl shadow-lg relative">
            <div className="border-b px-6 py-4 flex justify-between items-center bg-gray-100 rounded-t-lg">
              <h2 className="text-center w-full text-lg font-semibold text-[#1B1E25]">
                New Push Notification
              </h2>
              <button
                className="absolute right-4 text-2xl text-gray-600 hover:text-black"
                onClick={() => setIsModalOpen(false)}
              >
                <IoMdClose />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2 text-[#1B1E25]">Message</label>
                <textarea
                  rows={4}
                  className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Send to info */}
              <div>
                <label className="block text-sm font-medium mb-1 text-[#1B1E25]">Send to</label>
                <p className="text-sm text-gray-500">
                  Push Notification will be sent to all users with access to the selected documents.
                </p>
              </div>

              {/* Upload Document */}
              <div>
                <label className="block text-sm font-medium mb-2 text-[#1B1E25]">Document</label>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F6F8FF] flex items-center justify-center">
                    <FiUpload className="text-[#3F83F8] text-xl" />
                  </div>
                  <div className="flex-1 border border-dashed rounded-lg h-12" />
                </div>
              </div>
            </div>

            <div className="px-6 pb-6">
              <button className="bg-[#845EF7] text-white w-full py-2 rounded-md text-sm hover:bg-[#6F4BD8] transition-all">
                Send Notification
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PushNotification;

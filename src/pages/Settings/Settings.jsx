import React from 'react';
import { FaCamera } from 'react-icons/fa';

const Settings = () => {
  return (
    <div className="min-h-screen bg-[#f5f9ff] p-6">
      <h1 className="text-2xl font-semibold mb-6">General Settings</h1>

      <div className="bg-white rounded-2xl p-6 max-w-5xl mx-auto shadow-md">
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-[#f2f4f7] rounded-full flex items-center justify-center">
            <FaCamera className="text-gray-500 text-xl" />
          </div>
          <button className="mt-2 text-sm font-medium text-[#5570f1] hover:underline">
            Upload Logo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm text-gray-600 mb-1">App Name</label>
            <input
              type="text"
              defaultValue="Ludo Mate"
              className="w-full bg-[#f7f9fc] border border-gray-200 text-sm rounded-md px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Copy Right</label>
            <input
              type="text"
              defaultValue="All rights Reserved@Ludomate"
              className="w-full bg-[#f7f9fc] border border-gray-200 text-sm rounded-md px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">SEO Title</label>
            <input
              type="text"
              defaultValue="Ludo mate is a Game App"
              className="w-full bg-[#f7f9fc] border border-gray-200 text-sm rounded-md px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">SEO Description</label>
            <textarea
              defaultValue="Ludo mate is a Game App"
              rows={3}
              className="w-full bg-[#f7f9fc] border border-gray-200 text-sm rounded-md px-4 py-2"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">SEO Keywords</label>
            <input
              type="text"
              defaultValue="CEO"
              className="w-full bg-[#f7f9fc] border border-gray-200 text-sm rounded-md px-4 py-2"
            />
          </div>
        </div>

        <div className="text-center">
          <button className="bg-[#4b7bec] hover:bg-[#3b6ed6] transition text-white text-sm font-medium px-8 py-2 rounded-lg">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

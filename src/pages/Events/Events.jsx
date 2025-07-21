import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend
} from 'recharts';
import { FiEdit } from 'react-icons/fi';

const barData = [
  { year: '2024', earningA: 40, earningB: 24 },
  { year: '2025', earningA: 30, earningB: 13 },
  { year: '2026', earningA: 20, earningB: 98 },
  { year: '2027', earningA: 27, earningB: 39 },
  { year: '2028', earningA: 18, earningB: 48 },
];

const lineData = [
  { year: '2024', salesA: 50, salesB: 60 },
  { year: '2025', salesA: 70, salesB: 80 },
  { year: '2026', salesA: 60, salesB: 50 },
  { year: '2027', salesA: 90, salesB: 100 },
  { year: '2028', salesA: 120, salesB: 140 },
];

const Events = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6 bg-[#f5f9ff] min-h-screen">
      <h1 className="text-xl font-semibold mb-4">Event Management</h1>

      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Live Events</h2>
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#4b7bec] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#3b6ed6] transition"
          >
            + Add New Event
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="border border-dashed rounded-xl p-2">
              <p className="text-sm text-gray-500 text-center mb-2">Adjust Button position on banner frame</p>
              <div className="relative">
                <img
                  src="https://via.placeholder.com/300x150"
                  alt="Banner"
                  className="rounded-xl w-full h-40 object-cover"
                />
                <button className="absolute bottom-2 left-2 px-3 py-1 bg-yellow-400 text-sm rounded-md shadow">Button</button>
              </div>
              <div className="flex justify-between items-center mt-2 px-2">
                <div className="flex items-center space-x-2">
                  <span className="text-xs">Off</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                  </label>
                  <span className="text-xs">On</span>
                </div>
                <button className="text-sm text-red-500 px-2 py-1 rounded hover:bg-red-50 flex items-center gap-1">
                  <FiEdit className="text-sm" /> Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium mb-2">Customers</h3>
          <div className="flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full border-[6px] border-blue-300 flex items-center justify-center text-center text-sm font-semibold">
              Events
            </div>
            <div className="text-center mt-3 flex gap-16 items-center">
              <div className="">
                <p className="text-xl font-bold">34,249</p>
                <p className="text-sm text-gray-500">New Customers</p>
              </div>
              <div className="">
                <p className="text-md font-semibold">1420</p>
                <p className="text-sm text-gray-500">Repeated</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium mb-2">Earning</h3>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={barData}>
              <XAxis dataKey="year" fontSize={10} />
              <YAxis fontSize={10} />
              <Tooltip />
              <Bar dataKey="earningA" fill="#4b7bec" />
              <Bar dataKey="earningB" fill="#ffa502" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium mb-2">Sales Analytics</h3>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={lineData}>
              <XAxis dataKey="year" fontSize={10} />
              <YAxis fontSize={10} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="salesA" stroke="#1e90ff" strokeWidth={2} />
              <Line type="monotone" dataKey="salesB" stroke="#00b894" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-lg p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xl">📷</span>
              </div>
              <p className="text-sm text-blue-500 mt-2 cursor-pointer">Upload Cover Photo</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <input type="text" placeholder="Enter event name" className="border rounded-lg px-4 py-2 text-sm" />
              <input type="text" placeholder="1234 BDT" className="border rounded-lg px-4 py-2 text-sm" />
              <input type="date" className="border rounded-lg px-4 py-2 text-sm" />
              <input type="text" placeholder="Address" className="border rounded-lg px-4 py-2 text-sm" />
            </div>
            <div className="text-center">
              <button className="bg-[#4b7bec] text-white px-6 py-2 rounded-lg hover:bg-[#3b6ed6] transition">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
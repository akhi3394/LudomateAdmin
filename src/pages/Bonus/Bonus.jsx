import React from 'react';
import { FaEdit } from 'react-icons/fa';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const salesData = [
  { name: 'Mon', sales: 30 },
  { name: 'Tue', sales: 50 },
  { name: 'Wed', sales: 70 },
  { name: 'Thu', sales: 40 },
  { name: 'Fri', sales: 60 },
  { name: 'Sat', sales: 35 },
  { name: 'Sun', sales: 55 },
];

const Bonus = () => {
  return (
    <div className="p-6 bg-[#EDF3F9] min-h-screen">
      <h1 className="text-2xl font-semibold text-[#1A1A1A] mb-6">Bonus Management</h1>

      {/* Top Card Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
        {/* Daily Bonus */}
          <h2 className="text-base font-semibold text-[#1A1A1A] mb-2">DAILY BONUS</h2>
        <div className="mb-6 flex justify-start">
          <div className="flex flex-col items-center gap-2">
            <img
              src="/dummy.png"
              alt="Daily Bonus"
              className="w-[70px] h-[70px] object-contain"
            />
            <label className="flex items-center gap-2 text-sm text-[#999999]">
              <input type="checkbox" className="form-checkbox accent-[#58006D]" />
              Auto Send
            </label>
          </div>
        </div>

        <hr className="my-4" />

        {/* Bonus Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            'COPPER', 'GOLD', '500', '10,000',
            '25,000', '50,000', '100,000', '200,000',
          ].map((label, i) => (
            <div
              key={i}
              className="flex flex-col items-center  rounded-xl py-4 px-2 text-white "
            >
              <img
                src="/dummy.png"
                alt={label}
                className="w-14 h-14 object-contain mb-2"
              />
              <p className="text-sm font-semibold">{label}</p>
              <p className="text-sm text-[#FFDA17] mt-1">₹ 199</p>
              <button className="flex items-center gap-1 mt-2 text-xs text-[#FFB9D0]">
                <FaEdit className="text-xs" />
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Customers */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-[#1A1A1A] mb-3">Customers</h3>
          <div className="flex items-center justify-between">
            <img src="/dummy.png" alt="Customer Chart" className="w-16 h-16" />
            <div className="text-right">
              <p className="text-xl font-bold text-[#1A1A1A]">34,249</p>
              <p className="text-xs text-[#999999]">New Customers</p>
              <p className="text-sm font-semibold text-[#1A1A1A] mt-1">1420</p>
              <p className="text-xs text-[#999999]">Repeated</p>
            </div>
          </div>
        </div>

        {/* Featured Product */}
        <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center justify-center">
          <h3 className="text-sm font-semibold text-[#1A1A1A] mb-2">Featured Product</h3>
          <img src="/dummy.png" alt="Product" className="w-16 h-16 mb-2" />
          <p className="text-sm font-semibold text-[#1A1A1A]">Gold 500 Coins</p>
          <p className="text-sm text-[#3E79F7]">₹ 199</p>
        </div>

        {/* Sales Analytics - Recharts Graph */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-[#1A1A1A] mb-3">Sales Analytics</h3>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#3E79F7" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Bonus;

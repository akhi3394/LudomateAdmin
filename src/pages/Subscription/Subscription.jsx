import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const revenueData = [
  { name: '5k', sales: 20, profit: 10 },
  { name: '10k', sales: 60, profit: 30 },
  { name: '15k', sales: 40, profit: 25 },
  { name: '20k', sales: 50, profit: 20 },
  { name: '25k', sales: 90, profit: 50 },
  { name: '30k', sales: 70, profit: 40 },
  { name: '35k', sales: 60, profit: 30 },
  { name: '40k', sales: 75, profit: 45 },
  { name: '45k', sales: 50, profit: 25 },
  { name: '50k', sales: 80, profit: 60 },
  { name: '55k', sales: 70, profit: 50 },
  { name: '60k', sales: 100, profit: 70 },
];

const Subscription = () => {
  return (
    <div className="p-6 bg-[#f5f9ff] min-h-screen">
      <h1 className="text-xl font-semibold mb-6">Manage Subscriptions</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="text-center">
            <h2 className="text-base font-semibold mb-1">Basic</h2>
            <p className="text-xs text-gray-400">Monthly Charge</p>
            <h3 className="text-4xl font-bold text-[#7d35f8] my-3">$14.99</h3>
          </div>
          <div className="border-b border-gray-300 my-4"></div>
          <ul className="text-sm space-y-2 text-gray-800 px-4 flex flex-col justify-center items-center">
            <li>100,000</li>
            <li>500</li>
            <li>125</li>
            <li>Unlimited Video Calls</li>
            <li>Open ingame chats</li>
            <li>Ads Free</li>
            <li>30+ Dice Design</li>
            <li>Rematch</li>
            <li>Unlock ALL</li>
          </ul>
        </div>

        <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow-md border border-dashed">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="border-4 border-yellow-300 p-1 rounded-lg shadow-lg">
                  <img
                    src="https://via.placeholder.com/80x80"
                    alt={`Feature ${i + 1}`}
                    className="rounded-lg w-20 h-20 object-cover"
                  />
                </div>
                <p className="text-[11px] text-center mt-1 font-medium">Feature {i + 1}</p>
              </div>
            ))}
          </div>
          <div className="text-right mt-6">
            <button className="bg-[#4b7bec] text-white px-6 py-2 rounded-lg hover:bg-[#3b6ed6] transition">
              Save Changes
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white mt-8 p-6 rounded-2xl shadow-md">
        <h2 className="text-md font-medium mb-4">Revenue</h2>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={revenueData}>
            <XAxis dataKey="name" fontSize={10} />
            <YAxis fontSize={10} />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="sales" stroke="#fc5c65" fill="#fc5c65" fillOpacity={0.3} />
            <Area type="monotone" dataKey="profit" stroke="#a55eea" fill="#a55eea" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Subscription;

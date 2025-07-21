import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

const salesData = Array.from({ length: 30 }, (_, i) => ({
  name: `${(i + 1) * 2}k`,
  value: Math.floor(30 + Math.random() * 70)
}));

const statusStyles = {
  Delivered: 'bg-green-100 text-green-600',
  Sent: 'bg-yellow-100 text-yellow-600',
  Received: 'bg-blue-100 text-blue-600',
};

const Dashboard = () => {
  return (
    <div className="p-6 bg-[#f1f6fb] min-h-screen space-y-6">
      {/* Header Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total User', value: '40,689', trend: '+8.5% Up from yesterday', color: 'text-green-500', icon: '👤' },
          { label: 'Total Player', value: '10,293', trend: '1.3% Up from past week', color: 'text-green-500', icon: '🎮' },
          { label: 'Total Sales', value: '$89,000', trend: '4.3% Down from yesterday', color: 'text-red-500', icon: '💰' },
          { label: 'Total Matches', value: '2040', trend: '1.8% Up from yesterday', color: 'text-green-500', icon: '⏱️' },
        ].map((card, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl shadow flex items-center space-x-4">
            <div className="text-2xl">{card.icon}</div>
            <div>
              <div className="text-sm text-gray-500">{card.label}</div>
              <div className="text-xl font-semibold">{card.value}</div>
              <div className={`text-xs mt-1 ${card.color}`}>{card.trend}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Sales Details Chart */}
      <div className="bg-white rounded-xl p-6 shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Sales Details</h2>
          <select className="text-sm border px-2 py-1 rounded">
            <option>October</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={salesData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Winner Details Table */}
      <div className="bg-white rounded-xl p-6 shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Winner Details</h2>
          <select className="text-sm border px-2 py-1 rounded">
            <option>October</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#f1f6fb] text-left text-gray-600">
                <th className="p-3">User Name</th>
                <th className="p-3">Location</th>
                <th className="p-3">Event</th>
                <th className="p-3">Level</th>
                <th className="p-3">Price</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Suresh Wardha', location: 'India', event: 'Get profile on top', level: '1st', price: '1000 Coins', status: 'Delivered' },
                { name: 'Arush Mehra', location: 'India', event: 'Get profile on top', level: '2nd', price: '500 Coins', status: 'Sent' },
                { name: 'Sindhya Shastri', location: 'India', event: 'Get profile on top', level: '3rd', price: '100 Coins', status: 'Received' },
              ].map((winner, idx) => (
                <tr key={idx} className="border-t">
                  <td className="p-3 flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300" />
                    <span>{winner.name}</span>
                  </td>
                  <td className="p-3">{winner.location}</td>
                  <td className="p-3">{winner.event}</td>
                  <td className="p-3">{winner.level}</td>
                  <td className="p-3">{winner.price}</td>
                  <td className="p-3">
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${statusStyles[winner.status]}`}>
                      {winner.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

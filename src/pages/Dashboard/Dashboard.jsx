import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import { useGetDashboardStatsQuery, useGetMonthlySalesQuery, useGetWinnersQuery } from '../../redux/slices/apiSlice';

const statusStyles = {
  Delivered: 'bg-green-100 text-green-600',
  Sent: 'bg-yellow-100 text-yellow-600',
  Received: 'bg-blue-100 text-blue-600',
  COMPLETE: 'bg-green-100 text-green-600',
};

const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState('6'); // Default to June
  const [selectedYear, setSelectedYear] = useState('2025');

  const { data: statsData, isLoading: statsLoading, error: statsError } = useGetDashboardStatsQuery();
  const { data: salesData, isLoading: salesLoading, error: salesError } = useGetMonthlySalesQuery({
    year: selectedYear,
    month: selectedMonth
  });
  const { data: winnersData, isLoading: winnersLoading, error: winnersError } = useGetWinnersQuery();

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const getTrendColor = (percentage) => {
    return percentage >= 0 ? 'text-green-500' : 'text-red-500';
  };

  if (statsLoading || salesLoading || winnersLoading) {
    return <div className="p-6 bg-[#f1f6fb] min-h-screen">Loading...</div>;
  }

  if (statsError || salesError || winnersError) {
    return (
      <div className="p-6 bg-[#f1f6fb] min-h-screen">
        <div className="bg-red-100 text-red-600 p-4 rounded-xl">
          Error: {statsError?.data?.message || salesError?.data?.message || winnersError?.data?.message || 'Failed to load dashboard data'}
        </div>
      </div>
    );
  }

  const cards = [
    {
      label: 'Total User',
      value: formatNumber(statsData?.data?.totalUsers || 0),
      trend: `${statsData?.data?.statsChange?.users?.percentage}% ${statsData?.data?.statsChange?.users?.since}`,
      color: getTrendColor(statsData?.data?.statsChange?.users?.percentage),
      icon: '/DashboardUser.svg',
      bg: '#8280FF'
    },
    {
      label: 'Total Player',
      value: formatNumber(statsData?.data?.totalPlayers || 0),
      trend: `${statsData?.data?.statsChange?.players?.percentage}% ${statsData?.data?.statsChange?.players?.since}`,
      color: getTrendColor(statsData?.data?.statsChange?.players?.percentage),
      icon: '/DashboardPlayer.svg',
      bg: '#FEC53D'
    },
    {
      label: 'Total Sales',
      value: `$${formatNumber(statsData?.data?.totalSales || 0)}`,
      trend: `${statsData?.data?.statsChange?.sales?.percentage}% ${statsData?.data?.statsChange?.sales?.since}`,
      color: getTrendColor(statsData?.data?.statsChange?.sales?.percentage),
      icon: '/DashboardSales.svg',
        bg:'#4AD991'
    },
    {
      label: 'Total Matches',
      value: formatNumber(statsData?.data?.totalMatches || 0),
      trend: `${statsData?.data?.statsChange?.matches?.percentage}% ${statsData?.data?.statsChange?.matches?.since}`,
      color: getTrendColor(statsData?.data?.statsChange?.matches?.percentage),
      icon: '/DashboardMatches.svg',
        bg:'#8280FF'
    },
  ];

  const months = [
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];

  return (
    <div className="p-6 bg-[#f1f6fb] min-h-screen space-y-6">
      <h1 className='text-[28px] font-semibold'>Dashboard</h1>

      {/* Header Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl shadow flex items-center justify-between space-x-4">

            <div>
              <div className="text-sm text-gray-500">{card.label}</div>
              <div className="text-xl font-semibold">{card.value}</div>
              <div className={`text-xs mt-1 ${card.color}`}>{card.trend}</div>
            </div>
            <div className="text-2xl ">
              <img src={card.icon} alt="icons" className={`${card.bg}`}/>
            </div>
          </div>
        ))}
      </div>

      {/* Sales Details Chart */}
      <div className="bg-white rounded-xl p-6 shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Sales Details</h2>
          <div className="flex space-x-2">
            <select
              className="text-sm border px-2 py-1 rounded"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              {months.map(month => (
                <option key={month.value} value={month.value}>{month.label}</option>
              ))}
            </select>
            <select
              className="text-sm border px-2 py-1 rounded"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={salesData?.data?.map(item => ({ name: `Day ${item.day}`, value: item.total })) || []}>
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
          <select
            className="text-sm border px-2 py-1 rounded"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {months.map(month => (
              <option key={month.value} value={month.value}>{month.label}</option>
            ))}
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
              {winnersData?.data?.map((winner, idx) => (
                <tr key={winner._id} className="border-t">
                  <td className="p-3 flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300" />
                    <span>{`${winner.winner.firstName} ${winner.winner.lastName}`.trim()}</span>
                  </td>
                  <td className="p-3">Unknown</td>
                  <td className="p-3">{winner.contestId}</td>
                  <td className="p-3">1st</td>
                  <td className="p-3">{winner.firstPrize} Coins</td>
                  <td className="p-3">
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${statusStyles[winner.status]}`}>
                      {winner.status}
                    </span>
                  </td>
                </tr>
              )) || (
                  <tr>
                    <td colSpan="6" className="p-3 text-center">No winners data available</td>
                  </tr>
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
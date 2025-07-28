import React, { useState } from 'react'
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, CartesianGrid, Legend, PieChart, Pie, Cell
} from 'recharts'
import { useGetCustomerStatsQuery, useGetEarningsStatsQuery, useGetMostPurchasedDiceQuery, useGetRevenueStatsQuery, useGetSalesStatsQuery } from '../../redux/slices/apiSlice'

const COLORS = ['#3B82F6', '#A5B4FC']

const ReportsAnalytics = () => {
  const [selectedYear, setSelectedYear] = useState('2025')
  const { data: salesStats, isLoading: salesLoading, error: salesError } = useGetSalesStatsQuery({ mode: 'monthly', year: selectedYear })
  const { data: customerStats, isLoading: customerLoading, error: customerError } = useGetCustomerStatsQuery()
  const { data: revenueStats, isLoading: revenueLoading, error: revenueError } = useGetRevenueStatsQuery()
  const { data: earningsStats, isLoading: earningsLoading, error: earningsError } = useGetEarningsStatsQuery()
  const { data: mostPurchasedDice, isLoading: isDiceLoading, error: diceError } = useGetMostPurchasedDiceQuery();


  if (salesLoading || customerLoading || revenueLoading || earningsLoading) {
    return <div className="p-6 bg-[#F3F7FD] min-h-screen font-roboto">Loading...</div>
  }

  if (salesError || customerError || revenueError || earningsError) {
    return (
      <div className="p-6 bg-[#F3F7FD] min-h-screen font-roboto">
        Error: {salesError?.data?.message || customerError?.data?.message || revenueError?.data?.message || earningsError?.data?.message || 'Failed to load data'}
      </div>
    )
  }

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]
  const salesData = salesStats?.data?.map(item => ({
    name: months[item.month - 1],
    value: item.total
  })) || []

  const pieData = [
    { name: 'New', value: customerStats?.data?.newUsers || 0 },
    { name: 'Repeated', value: customerStats?.data?.repeatedUsers || 0 }
  ]

  const revenueData = revenueStats?.data?.map(item => ({
    name: `Day ${item.day}`,
    Sales: item.sales,
    Profit: item.profit
  })) || []

  const earningsData = earningsStats?.data?.map(item => ({
    name: item.year.toString(),
    value: item.earning
  })) || []

  return (
    <div className="p-6 bg-[#F3F7FD] min-h-screen font-roboto space-y-6">
      <h2 className="text-lg font-semibold text-[#1B1E25]">Overall Analytics</h2>

      {/* Sales Details */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-sm text-[#1B1E25]">Sales Details</h3>
          <select
            className="text-sm border rounded px-2 py-1"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={salesData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#3B82F6" fill="#bfdbfe" strokeWidth={2} dot />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 3 Small Panels */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Customers */}
        <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col justify-center items-center text-center">
          <p className="text-sm font-semibold mb-2">Customers</p>
          <PieChart width={120} height={120}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={35}
              outerRadius={50}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>

          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="text-center">
              <p className="text-lg font-semibold text-black">
                {customerStats?.data?.newUsers || 0}
              </p>
              <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span> New Customers
              </p>
            </div>

            <div className="text-center">
              <p className="text-lg font-semibold text-black">
                {customerStats?.data?.repeatedUsers || 0}
              </p>
              <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                <span className="w-2 h-2 bg-blue-200 rounded-full"></span> Repeated
              </p>
            </div>
          </div>
        </div>


        {/* Featured Product */}
       <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-between min-h-[220px] w-full">
          <p className="text-sm font-semibold text-[#1B1E25] mb-2">Featured Product</p>

          {isDiceLoading ? (
            <div className="h-[100px] flex items-center justify-center">Loading...</div>
          ) : diceError ? (
            <div className="text-red-500 text-sm">Error: {diceError.message}</div>
          ) : (
            <div className="relative w-full flex items-center justify-center">
              {/* Left Arrow */}
              <button className="absolute left-0 bg-white rounded-full p-1 shadow-md hover:bg-gray-100">
                <span className="text-xl">&lt;</span>
              </button>

              {/* Dice Image */}
              <img
                src={mostPurchasedDice?.data?.image}
                alt={mostPurchasedDice?.data?.name}
                className="w-[90px] h-[90px] object-contain"
              />

              {/* Right Arrow */}
              <button className="absolute right-0 bg-white rounded-full p-1 shadow-md hover:bg-gray-100">
                <span className="text-xl">&gt;</span>
              </button>
            </div>
          )}

          {/* Name and Price */}
          {!isDiceLoading && !diceError && (
            <>
              <p className="text-sm font-semibold text-[#1B1E25] mt-3">{mostPurchasedDice?.data?.name}</p>
              <p className="text-sm font-semibold text-[#4880FF]">${mostPurchasedDice?.data?.price}</p>
            </>
          )}
        </div>

        {/* Sales Analytics */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-sm font-medium text-[#1B1E25] mb-2">Sales Analytics</h3>
          <ResponsiveContainer width="100%" height={120}>
            <LineChart data={salesData}>
              <XAxis dataKey="name" />
              <YAxis hide />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#6366F1" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Revenue */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-sm text-[#1B1E25]">Revenue</h3>
          <select className="text-sm border rounded px-2 py-1">
            <option>July</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FB7185" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FB7185" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#C084FC" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#C084FC" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="Sales" stroke="#FB7185" fillOpacity={1} fill="url(#colorSales)" />
            <Area type="monotone" dataKey="Profit" stroke="#C084FC" fillOpacity={1} fill="url(#colorProfit)" />
            <Legend />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Total Earnings */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="text-sm font-medium text-[#1B1E25] mb-2">Total Earning: <span className="font-bold">{earningsStats?.totalEarning || 0}</span></h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={earningsData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#EF4444" strokeWidth={2} dot />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ReportsAnalytics
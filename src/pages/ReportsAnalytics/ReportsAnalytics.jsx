import React from 'react'
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, CartesianGrid, Legend, PieChart, Pie, Cell
} from 'recharts'

const dataLine = [
  { name: '2000', value: 30 },
  { name: '2002', value: 40 },
  { name: '2004', value: 120 },
  { name: '2006', value: 50 },
  { name: '2008', value: 70 },
  { name: '2010', value: 60 },
  { name: '2012', value: 55 }
]

const dataPie = [
  { name: 'New', value: 34249 },
  { name: 'Repeated', value: 1420 }
]

const salesAnalyticsData = [
  { year: 2015, sales: 20, trend: 30 },
  { year: 2016, sales: 40, trend: 45 },
  { year: 2017, sales: 60, trend: 55 },
  { year: 2018, sales: 80, trend: 70 },
  { year: 2019, sales: 100, trend: 90 }
]

const areaData = [
  { name: '1k', Sales: 20, Profit: 10 },
  { name: '2k', Sales: 60, Profit: 40 },
  { name: '3k', Sales: 30, Profit: 20 },
  { name: '4k', Sales: 90, Profit: 60 },
  { name: '5k', Sales: 50, Profit: 30 },
  { name: '6k', Sales: 80, Profit: 40 },
  { name: '7k', Sales: 30, Profit: 20 },
  { name: '8k', Sales: 100, Profit: 60 }
]

const COLORS = ['#3B82F6', '#A5B4FC']

const ReportsAnalytics = () => {
  return (
    <div className="p-6 bg-[#F3F7FD] min-h-screen font-roboto space-y-6">
      <h2 className="text-lg font-semibold text-[#1B1E25]">Overall Analytics</h2>

      {/* Sales Details */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-sm text-[#1B1E25]">Sales Details</h3>
          <select className="text-sm border rounded px-2 py-1">
            <option>October</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={dataLine}>
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
          <PieChart width={120} height={120}>
            <Pie
              data={dataPie}
              cx="50%"
              cy="50%"
              innerRadius={35}
              outerRadius={50}
              dataKey="value"
            >
              {dataPie.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
          <p className="text-lg font-semibold">34,249</p>
          <p className="text-xs text-gray-500">New Customers</p>
          <p className="text-sm mt-1 text-gray-500">1420 Repeated</p>
        </div>

        {/* Featured Product */}
        <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col justify-center items-center text-center">
          <p className="text-sm text-gray-500">Featured Product</p>
          <p className="font-semibold text-[#1B1E25]">Dice</p>
          <p className="text-sm text-blue-600 font-medium">$589.00</p>
        </div>

        {/* Sales Analytics */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-sm font-medium text-[#1B1E25] mb-2">Sales Analytics</h3>
          <ResponsiveContainer width="100%" height={120}>
            <LineChart data={salesAnalyticsData}>
              <XAxis dataKey="year" />
              <YAxis hide />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#6366F1" strokeWidth={2} />
              <Line type="monotone" dataKey="trend" stroke="#22D3EE" strokeDasharray="5 5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Revenue */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-sm text-[#1B1E25]">Revenue</h3>
          <select className="text-sm border rounded px-2 py-1">
            <option>October</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={areaData}>
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
        <h3 className="text-sm font-medium text-[#1B1E25] mb-2">Total Earning: <span className="font-bold">1,987,654</span></h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={dataLine}>
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

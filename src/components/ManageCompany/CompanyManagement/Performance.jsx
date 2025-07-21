import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

// Data for Delivery Performance (Stacked Bar Chart - First Screenshot)
const deliveryData = [
  { month: "2025-01", onTime: 40, delayed: 12 },
  { month: "2025-02", onTime: 42, delayed: 10 },
  { month: "2025-03", onTime: 45, delayed: 11 },
  { month: "2025-04", onTime: 43, delayed: 13 },
  { month: "2025-05", onTime: 41, delayed: 14 },
  { month: "2025-06", onTime: 44, delayed: 12 },
];

// Data for Issue Tracking (Pie Chart - Second Screenshot)
const pieData = [
  { name: "Delivery Delays", value: 42, color: "#A3BFFA" },
  { name: "Late Pickups", value: 15, color: "#FBB6CE" },
  { name: "Loading Issues", value: 12, color: "#D4B896" },
  { name: "Damaged Goods", value: 9, color: "#283593" },
  { name: "Documentation Error", value: 21, color: "#B5EAD7" },
];

// Data for Issue Tracking (Line Chart - Second Screenshot)
const lineData = [
  { month: "2025-01", issues: 8.5 },
  { month: "2025-02", issues: 9.8 },
  { month: "2025-03", issues: 7.2 },
  { month: "2025-04", issues: 6.8 },
  { month: "2025-05", issues: 5.5 },
  { month: "2025-06", issues: 2.1 },
];

const options = [
  {
    type: 'active-trucks',
    title: 'Fleet Size',
    value: '12 Trucks, 38 Drivers',
  },
  {
    type: 'driver-details',
    title: 'Subscription',
    value: 'Premium',
  },
  {
    type: 'performance',
    title: 'Revenue',
    value: '$14,195',
  },
];

const initialData = [
  {
    module: 'Last 6 months',
  },
  {
    module: 'Last 30 days',
  },
  {
    module: 'Last 3 months',
  },
  {
    module: 'Last 6 months',
  },
  {
    module: 'Last 1 year',
  },
];

const Performance = () => {
  const [selectedTab, setSelectedTab] = useState("Pending");
  const [data, setData] = useState(initialData);
  const [selectedModule, setSelectedModule] = useState('Last 6 months');
  const navigate=useNavigate()
  return (
    <div className=" text-white">
      {/* Header Section */}
      <div className="flex gap-3 items-center mb-8">
        <div className="cursor-pointer" onClick={()=>navigate(-1)}>
          <img src="/backbuttons.svg" alt="Back" className="w-[42px] h-[42px]" />

        </div>
        <h1 className="text-[22px] font-bold">BlueDart Logistics</h1>
      </div>

      <div className="flex gap-4 mb-4 ">
        {options.map(({ type, title, value }) => (
          <div
            key={type}
            className="w-full h-[75px] rounded-xl px-6 py-2 flex flex-col justify-between bg-[#131060] border border-[#1C1889] transition-all duration-200"
          >
            <div className="text-[12px] text-start text-[#BFBFBF] leading-[18px] font-medium font-[Poppins]">
              {title}
            </div>
            <div className="flex justify-between items-center">
              <div className="text-[22px] text-white font-semibold font-[Poppins] leading-[33px]">
                {value}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between gap-3 items-center mb-1">
        <p className='text-[22px] font-semibold'>Performance Analytics</p>
        <select
          value={selectedModule}
          onChange={(e) => setSelectedModule(e.target.value)}
          className="w-[279px] h-[48px] px-3 py-2 bg-[#fff] text-[#000] border border-[#FFFFFF] rounded-lg focus:outline-none"
        >
          {data.map((item) => (
            <option key={item.module} value={item.module}>
              {item.module}
            </option>
          ))}
        </select>
      </div>

      <p className="text-[16px] text-[#B2B2B2] font-medium mb-6">Delivery performance and issue tracking of Bluedart Logistics</p>

      {/* Tabs Section (User-Provided UI) */}
      <div className="w-full overflow-hidden mb-6">
        <div className="inline-flex bg-[#070539] p-1 rounded-[5px]">
          {/* Delivery Performance Tab */}
          <div
            onClick={() => setSelectedTab("Pending")}
            className={`w-[265px] h-[48px] flex items-center justify-center font-medium text-[16px] cursor-pointer ${selectedTab === "Pending"
              ? "bg-[#0A0666] text-white rounded-[5px]"
              : "text-white"
              }`}
          >
            Delivery Performance
          </div>

          {/* Issue Tracking Tab */}
          <div
            onClick={() => setSelectedTab("In transit")}
            className={`w-[265px] h-[48px] flex items-center justify-center font-medium text-[16px] cursor-pointer ${selectedTab === "In transit"
              ? "bg-[#0A0666] text-white rounded-[5px]"
              : "text-[#BFBFBF]"
              }`}
          >
            Issue Tracking
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-[#131060] rounded-lg mb-6">
        <div className="p-6">
          {selectedTab === "Pending" ? (
            // First Tab: Delivery Performance (Stacked Bar Chart)
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={deliveryData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="2 2" stroke="#4A4A95" opacity={0.3} />
                  <XAxis
                    dataKey="month"
                    stroke="#BFBFBF"
                    fontSize={12}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    stroke="#BFBFBF"
                    fontSize={12}
                    axisLine={false}
                    tickLine={false}
                    domain={[0, 60]}
                    ticks={[0, 15, 30, 45, 60]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1a1a2e',
                      border: '1px solid #4A4A95',
                      borderRadius: '8px',
                      color: '#ffffff'
                    }}
                  />
                  <Legend
                    wrapperStyle={{
                      paddingTop: '20px',
                      color: '#BFBFBF'
                    }}
                  />
                  <Bar
                    dataKey="onTime"
                    fill="#4CAF50"
                    name="On Time Deliveries"
                    radius={[0, 0, 0, 0]}
                  />
                  <Bar
                    dataKey="delayed"
                    fill="#F44336"
                    name="Delayed Deliveries"
                    radius={[0, 0, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            // Second Tab: Issue Tracking (Pie Chart + Line Chart)
            <div className="flex justify-between gap-8">
              {/* Pie Chart */}
              <div className="flex-1">
                <ResponsiveContainer width="100%" height={350}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={120}
                      dataKey="value"
                      stroke="none"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1a1a2e',
                        border: '1px solid #4A4A95',
                        borderRadius: '8px',
                        color: '#ffffff'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                {/* Pie Chart Legend */}
                <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
                  {pieData.map((entry, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded-sm"
                        style={{ backgroundColor: entry.color }}
                      ></div>
                      <span className="text-[#BFBFBF] text-xs">{entry.name}: {entry.value}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Line Chart */}
              <div className="flex-1">
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={lineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="2 2" stroke="#4A4A95" opacity={0.3} />
                    <XAxis
                      dataKey="month"
                      stroke="#BFBFBF"
                      fontSize={12}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      stroke="#BFBFBF"
                      fontSize={12}
                      axisLine={false}
                      tickLine={false}
                      domain={[0, 10]}
                      ticks={[0, 2, 4, 6, 8, 10]}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1a1a2e',
                        border: '1px solid #4A4A95',
                        borderRadius: '8px',
                        color: '#ffffff'
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="issues"
                      stroke="#ffffff"
                      strokeWidth={2}
                      dot={{ fill: '#ffffff', strokeWidth: 2, r: 4 }}
                      name="Total Issues"
                    />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-center mt-4 font-bold text-[#BFBFBF] text-sm">Total Issues</p>
              </div>
            </div>
          )}
        </div>

        {/* Summary Metrics */}
        <div className="border border-[#F8F8F826] mb-8"></div>
        <div className=" rounded-lg p-6">
          {selectedTab === "Pending" ? (
            <div className="flex justify-around">
              <div className="text-center">
                <p className="text-2xl font-bold">91%</p>
                <p className="text-sm text-[#BFBFBF]">Average On-Time Rate</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">23-Minutes</p>
                <p className="text-sm text-[#BFBFBF]">Average Delay Time</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">9%</p>
                <p className="text-sm text-[#BFBFBF]">Late Delivery Rate</p>
              </div>
            </div>
          ) : (
            <div className="flex justify-around">
              <div className="text-center">
                <p className="text-2xl font-bold">58</p>
                <p className="text-sm text-[#BFBFBF]">Issues Reported</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-400">97%</p>
                <p className="text-sm text-[#BFBFBF]">Issues Resolved</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">3.2 Hours</p>
                <p className="text-sm text-[#BFBFBF]">Avg Resolution Time</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Performance;

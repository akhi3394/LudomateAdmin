import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

// Sample data for the revenue chart
const revenueData = [
  { week: "Week 1", value: 15000 },
  { week: "Week 2", value: 18000 },
  { week: "Week 3", value: 12000 },
  { week: "Week 4", value: 8000 },
  { week: "Week 5", value: 5000 },
];

const Revenue = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Weekly");
  // State to manage dynamic progress bar values
  const [progressValues, setProgressValues] = useState({
    totalRevenue: 78,
    avgRevenue: 68,
    subscription: 75,
    transactionFee: 60,
    premiumFeatures: 45,
  });

  return (
    <div className="text-white w-full p-6">
      {/* Header */}
      <div className="flex items-center gap-6 mb-8">
        <img
          src="/dashboardicons/backbutton.svg"
          alt="Back"
          className="w-[42px] h-[42px] rounded-full cursor-pointer"
          onClick={() => window.history.back()}
        />
        <h1 className="text-[22px] font-semibold leading-[33px] font-poppins">
          Revenue
        </h1>
      </div>

      {/* Top Revenue Cards */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Total Revenue */}
        <div className="bg-[#131060] rounded-lg p-6">
          <h3 className="text-[12px] text-gray-300 mb-2">Total Revenue</h3>
          <div className="flex gap-2">
            <span className="text-[22px] font-bold mb-1">$25,896</span>
            <span className="flex items-center ">
              <span className="w-[12px] h-[12px]">
                <img src="/dashboardicons/topArrow.svg" alt="" />
              </span>
              <span className="text-[12px] text-[#009951]">24%</span>
            </span>
          </div>
          <div className="text-[12px] text-gray-400 mb-3">VS. $2,852 last period</div>
          <div className="flex items-center justify-end gap-2 mb-2">
            <span className="text-xs">{progressValues.totalRevenue}%</span>
          </div>
          <div className="w-full bg-gray-600 rounded-full h-[20px]">
            <div
              className="bg-green-500 h-[20px] rounded-full"
              style={{ width: `${progressValues.totalRevenue}%` }}
            ></div>
          </div>
        </div>

        {/* Monthly Recurring Revenue */}
        <div className="bg-[#131060] rounded-lg p-6">
          <h3 className="text-[12px] text-gray-300 mb-2">Monthly Recurring Revenue</h3>
          <div className="flex gap-2">
            <span className="text-[22px] font-bold mb-1">$10,520</span>
            <span className="flex items-center ">
              <span className="w-[12px] h-[12px]">
                <img src="/dashboardicons/topArrow.svg" alt="" />
              </span>
              <span className="text-[12px] text-[#009951]">18%</span>
            </span>
          </div>          <div className="text-[12px] text-gray-400 mb-3">From 187 subscription</div>
          <div className="grid grid-cols-3 gap-2 mb-2">
            <div className="text-center bg-[#02011A] w-full h-[54px] flex items-center flex-col justify-center rounded-lg">
              <div className="text-xs text-gray-400">Basic</div>
              <div className="text-sm font-semibold">187</div>
            </div>
            <div className="text-center bg-[#02011A] w-full h-[54px] flex items-center flex-col justify-center rounded-lg">
              <div className="text-xs text-gray-400">Standard</div>
              <div className="text-sm font-semibold">97</div>
            </div>
            <div className="text-center bg-[#02011A] w-full h-[54px] flex items-center flex-col justify-center rounded-lg">
              <div className="text-xs text-gray-400">Premium</div>
              <div className="text-sm font-semibold">92</div>
            </div>
          </div>
        </div>

        {/* Avg Revenue Per Company */}
        <div className="bg-[#131060] rounded-lg p-6">
          <h3 className="text-[12px] text-gray-300 mb-2">Avg. Revenue Per Company</h3>
          <div className="flex gap-2">
            <span className="text-[22px] font-bold mb-1">$6,210</span>
            <span className="flex items-center ">
              <span className="w-[12px] h-[12px]">
                <img src="/dashboardicons/topArrow.svg" alt="" />
              </span>
              <span className="text-[12px] text-[#009951]">12%</span>
            </span>
          </div>          <div className="text-[12px] text-gray-400 mb-3">From 18 active company</div>
          <div className="flex items-center justify-end gap-2 mb-2">
            <span className="text-xs">{progressValues.avgRevenue}%</span>
          </div>
          <div className="w-full bg-gray-600 rounded-full h-[20px]">
            <div
              className="bg-green-500 h-[20px] rounded-full"
              style={{ width: `${progressValues.avgRevenue}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        {/* Revenue Chart */}
        <div className="bg-[#131060] border border-[#1C1889] rounded-lg p-6 lg:w-[calc(100%-320px)]">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">Revenue</h3>
              <div className="text-2xl font-bold">$5,895</div>
              <div className="text-xs text-green-400">+125% since last week</div>
            </div>
          </div>

          {/* Period Tabs */}
          <div className="inline-flex bg-[#070539] p-1 rounded-lg mb-4 w-full">
            {["Weekly", "Monthly", "Yearly"].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={` py-2 h-[42px] w-full text-sm rounded-md transition-colors ${selectedPeriod === period
                  ? "bg-[#131060] text-white"
                  : "text-gray-400 hover:text-white"
                  }`}
              >
                {period}
              </button>
            ))}
          </div>

          {/* Chart */}
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <XAxis
                  dataKey="week"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#9CA3AF" }}
                />
                <YAxis hide />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#ffffff"
                  strokeWidth={2}
                  dot={{ fill: "#ffffff", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, fill: "#ffffff" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Revenue Sources */}
        <div className="bg-[#131060] border border-[#1C1889] rounded-lg p-6 w-full lg:w-[320px]">
          <h3 className="text-[22px] font-semibold mb-6">Top Revenue Sources</h3>

          <div className="space-y-6">
            {/* Subscription */}
            <div className="">
              <div className="flex justify-between mb-4">
                <span className="text-[16px">Subscription</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-[20px]">
                <div
                  className="bg-[#E8B931] h-[20px] rounded-full"
                  style={{ width: `${progressValues.subscription}%` }}
                ></div>
              </div>
            </div>

            {/* Transaction Fee */}
            <div className="">
              <div className="flex justify-between mb-4">
                <span className="text-[16px]">Transaction Fee</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-[20px]">
                <div
                  className="bg-[#2398E1] h-[20px] rounded-full"
                  style={{ width: `${progressValues.transactionFee}%` }}
                ></div>
              </div>
            </div>

            {/* Premium Features */}
            <div className="">
              <div className="flex justify-between mt-10">
                <span className="text-[16px]">Premium Features</span>
              </div>
              <div className="w-full h-[20px] bg-gray-600 rounded-full">
                <div
                  className="bg-[#14AE5C] h-[20px] rounded-full"
                  style={{ width: `${progressValues.premiumFeatures}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metrics */}
      <div className="grid grid-cols-3 gap-6">
        {/* Customer Acquisition */}
        <div className="bg-[#131060] rounded-lg p-6">
          <h3 className="text-[22px] font-semibold mb-4">Customer Acquisition</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-sm text-gray-300">New Company</span>
              <span className="text-sm text-gray-300">CAC</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-semibold">+3</span>
              <span className="text-lg font-semibold">$1,256</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-300">LTV</span>
              <span className="text-sm text-gray-300">LTV:CAC</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-semibold">$42,258</span>
              <span className="text-lg font-semibold text-green-400">34:2</span>
            </div>
          </div>
        </div>

        {/* Subscription Metrics */}
        <div className="bg-[#131060] rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-[22px]">Subscription Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-sm text-gray-300">Active Subs</span>
              <span className="text-sm text-gray-300">Growth</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-semibold">128</span>
              <span className="text-lg font-semibold text-green-400">+18%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-300">Avg. Duration</span>
              <span className="text-sm text-gray-300">Renewable Rate</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-semibold">2.4 Yrs</span>
              <span className="text-lg font-semibold text-green-400">94%</span>
            </div>
          </div>
        </div>

        {/* Financial Health */}
        <div className="bg-[#131060] rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-[22px]">Financial Health</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-sm text-gray-300">Gross Margin</span>
              <span className="text-sm text-gray-300">Burn Rate</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-semibold">84%</span>
              <span className="text-lg font-semibold">$42k/M</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-300">Runway</span>
              <span className="text-sm text-gray-300">Cash Balance</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-semibold">18+ Month</span>
              <span className="text-lg font-semibold">$1.2 M</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;